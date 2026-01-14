import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './button-group.js';
import '../toggle-button/toggle-button.js';
import type { MdButtonGroup } from './button-group.js';
import type { MdToggleButton } from '../toggle-button/toggle-button.js';

describe('MdButtonGroup', () => {
  async function createButtonGroup(
    template = `
      <md-button-group>
        <md-toggle-button value="a">A</md-toggle-button>
        <md-toggle-button value="b">B</md-toggle-button>
        <md-toggle-button value="c">C</md-toggle-button>
      </md-button-group>
    `
  ): Promise<MdButtonGroup> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const group = container.querySelector('md-button-group') as MdButtonGroup;
    await group.updateComplete;

    // Wait for children to be ready
    const buttons = container.querySelectorAll('md-toggle-button');
    await Promise.all(
      Array.from(buttons).map((b) => (b as MdToggleButton).updateComplete)
    );

    return group;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const group = await createButtonGroup();

      expect(group).toBeInTheDocument();
      expect(group.shadowRoot).toBeTruthy();
    });

    it('renders children in default slot', async () => {
      const group = await createButtonGroup();

      const buttons = group.querySelectorAll('md-toggle-button');
      expect(buttons.length).toBe(3);
    });

    it('defaults to single selection mode', async () => {
      const group = await createButtonGroup();

      expect(group.selectionMode).toBe('single');
    });
  });

  describe('position assignment (MD3 Expressive connected shapes)', () => {
    it('assigns leading position to first button', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      await firstButton.updateComplete;

      const innerButton = firstButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--leading');
    });

    it('assigns middle position to middle buttons', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const middleButton = buttons[1] as MdToggleButton;
      await middleButton.updateComplete;

      const innerButton = middleButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--middle');
    });

    it('assigns trailing position to last button', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const lastButton = buttons[2] as MdToggleButton;
      await lastButton.updateComplete;

      const innerButton = lastButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--trailing');
    });

    it('assigns standalone position when single button', async () => {
      const group = await createButtonGroup(`
        <md-button-group>
          <md-toggle-button value="a">A</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const button = group.querySelector('md-toggle-button') as MdToggleButton;
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--standalone');
    });
  });

  describe('single-select mode', () => {
    it('selects first button by default', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const selected = group.getSelectedValues();
      expect(selected).toEqual(['a']);
    });

    it('selects clicked button', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const secondButton = buttons[1] as MdToggleButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);
      await group.updateComplete;

      expect(secondButton.selected).toBe(true);
      expect(group.getSelectedValues()).toEqual(['b']);
    });

    it('deselects other buttons when one is selected', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const secondButton = buttons[1] as MdToggleButton;
      const innerSecond = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerSecond);
      await group.updateComplete;

      expect(firstButton.selected).toBe(false);
      expect(secondButton.selected).toBe(true);
    });

    it('does not allow deselecting in single mode', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;

      // Click already selected button
      fireEvent.click(innerFirst);
      await group.updateComplete;

      // Should still be selected
      expect(firstButton.selected).toBe(true);
      expect(group.getSelectedValues()).toEqual(['a']);
    });
  });

  describe('multi-select mode', () => {
    it('allows multiple selections', async () => {
      const group = await createButtonGroup(`
        <md-button-group selection-mode="multi">
          <md-toggle-button value="a">A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
          <md-toggle-button value="c">C</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const secondButton = buttons[1] as MdToggleButton;

      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;
      const innerSecond = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerFirst);
      fireEvent.click(innerSecond);
      await group.updateComplete;

      expect(group.getSelectedValues()).toContain('a');
      expect(group.getSelectedValues()).toContain('b');
    });

    it('toggles selection on click', async () => {
      const group = await createButtonGroup(`
        <md-button-group selection-mode="multi">
          <md-toggle-button value="a" selected>A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const firstButton = group.querySelector('md-toggle-button') as MdToggleButton;
      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;

      // Click to deselect
      fireEvent.click(innerFirst);
      await group.updateComplete;

      expect(firstButton.selected).toBe(false);
    });
  });

  describe('events', () => {
    it('emits change when selection changes', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const changeHandler = vi.fn();
      group.addEventListener('change', changeHandler);

      const buttons = group.querySelectorAll('md-toggle-button');
      const secondButton = buttons[1] as MdToggleButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('includes originalEvent and value in event detail', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      let eventDetail: { originalEvent: Event; value: string[] } | undefined;
      group.addEventListener('change', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const buttons = group.querySelectorAll('md-toggle-button');
      const secondButton = buttons[1] as MdToggleButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(eventDetail?.originalEvent).toBeTruthy();
      expect(eventDetail?.value).toEqual(['b']);
    });
  });

  describe('disabled state', () => {
    it('applies disabled class when set is disabled', async () => {
      const group = await createButtonGroup(`
        <md-button-group disabled>
          <md-toggle-button value="a">A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const container = group.shadowRoot!.querySelector('.md-button-group');
      expect(container).toHaveClass('md-button-group--disabled');
    });

    it('does not emit change when disabled', async () => {
      const group = await createButtonGroup(`
        <md-button-group disabled>
          <md-toggle-button value="a">A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const changeHandler = vi.fn();
      group.addEventListener('change', changeHandler);

      const button = group.querySelector('md-toggle-button') as MdToggleButton;
      const innerButton = button.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(changeHandler).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has role radiogroup in single-select mode', async () => {
      const group = await createButtonGroup();

      const container = group.shadowRoot!.querySelector('.md-button-group');
      expect(container).toHaveAttribute('role', 'radiogroup');
    });

    it('has role group in multi-select mode', async () => {
      const group = await createButtonGroup(`
        <md-button-group selection-mode="multi">
          <md-toggle-button value="a">A</md-toggle-button>
        </md-button-group>
      `);

      const container = group.shadowRoot!.querySelector('.md-button-group');
      expect(container).toHaveAttribute('role', 'group');
    });

    it('forwards aria-label to container', async () => {
      const group = await createButtonGroup(`
        <md-button-group aria-label="View options">
          <md-toggle-button value="a">A</md-toggle-button>
        </md-button-group>
      `);

      const container = group.shadowRoot!.querySelector('.md-button-group');
      expect(container).toHaveAttribute('aria-label', 'View options');
    });
  });

  describe('keyboard navigation', () => {
    it('moves focus with arrow right', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const secondButton = buttons[1] as MdToggleButton;

      // Focus first button
      firstButton.focus();

      // Press arrow right
      fireEvent.keyDown(firstButton, { key: 'ArrowRight' });

      // Second button should be focused
      expect(document.activeElement).toBe(secondButton);
    });

    it('moves focus with arrow left', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const secondButton = buttons[1] as MdToggleButton;

      // Focus second button
      secondButton.focus();

      // Press arrow left
      fireEvent.keyDown(secondButton, { key: 'ArrowLeft' });

      // First button should be focused
      expect(document.activeElement).toBe(firstButton);
    });

    it('wraps focus from last to first', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const lastButton = buttons[2] as MdToggleButton;

      // Focus last button
      lastButton.focus();

      // Press arrow right
      fireEvent.keyDown(lastButton, { key: 'ArrowRight' });

      // First button should be focused
      expect(document.activeElement).toBe(firstButton);
    });

    it('selects on arrow navigation in single-select mode', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const secondButton = buttons[1] as MdToggleButton;

      // Focus first button
      firstButton.focus();

      // Press arrow right
      fireEvent.keyDown(firstButton, { key: 'ArrowRight' });
      await group.updateComplete;

      // Second button should be selected
      expect(secondButton.selected).toBe(true);
      expect(firstButton.selected).toBe(false);
    });

    it('moves to first with Home key', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const lastButton = buttons[2] as MdToggleButton;

      // Focus last button
      lastButton.focus();

      // Press Home
      fireEvent.keyDown(lastButton, { key: 'Home' });

      expect(document.activeElement).toBe(firstButton);
    });

    it('moves to last with End key', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      const lastButton = buttons[2] as MdToggleButton;

      // Focus first button
      firstButton.focus();

      // Press End
      fireEvent.keyDown(firstButton, { key: 'End' });

      expect(document.activeElement).toBe(lastButton);
    });
  });

  describe('programmatic selection', () => {
    it('sets selected values programmatically', async () => {
      const group = await createButtonGroup(`
        <md-button-group selection-mode="multi">
          <md-toggle-button value="a">A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
          <md-toggle-button value="c">C</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      group.setSelectedValues(['a', 'c']);

      const buttons = group.querySelectorAll('md-toggle-button');
      expect((buttons[0] as MdToggleButton).selected).toBe(true);
      expect((buttons[1] as MdToggleButton).selected).toBe(false);
      expect((buttons[2] as MdToggleButton).selected).toBe(true);
    });
  });

  describe('sizes (MD3 Expressive)', () => {
    it('defaults to medium size', async () => {
      const group = await createButtonGroup();

      expect(group.size).toBe('medium');
    });

    it('propagates size to child buttons on init', async () => {
      const group = await createButtonGroup(`
        <md-button-group size="large">
          <md-toggle-button value="a">A</md-toggle-button>
          <md-toggle-button value="b">B</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      await firstButton.updateComplete;

      const innerButton = firstButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--large');
    });

    it('propagates size changes to children', async () => {
      const group = await createButtonGroup();
      await new Promise((r) => setTimeout(r, 10));

      // Change size
      group.size = 'small';
      await group.updateComplete;

      const buttons = group.querySelectorAll('md-toggle-button');
      const firstButton = buttons[0] as MdToggleButton;
      await firstButton.updateComplete;

      const innerButton = firstButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--small');
    });

    it('supports xsmall size', async () => {
      const group = await createButtonGroup(`
        <md-button-group size="xsmall">
          <md-toggle-button value="a">A</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const button = group.querySelector('md-toggle-button') as MdToggleButton;
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--xsmall');
    });

    it('supports xlarge size', async () => {
      const group = await createButtonGroup(`
        <md-button-group size="xlarge">
          <md-toggle-button value="a">A</md-toggle-button>
        </md-button-group>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const button = group.querySelector('md-toggle-button') as MdToggleButton;
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--xlarge');
    });
  });
});
