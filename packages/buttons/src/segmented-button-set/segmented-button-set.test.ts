import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './segmented-button-set.js';
import '../segmented-button/segmented-button.js';
import type { MdSegmentedButtonSet } from './segmented-button-set.js';
import type { MdSegmentedButton } from '../segmented-button/segmented-button.js';

describe('MdSegmentedButtonSet', () => {
  async function createSegmentedButtonSet(
    template = `
      <md-segmented-button-set>
        <md-segmented-button value="a">A</md-segmented-button>
        <md-segmented-button value="b">B</md-segmented-button>
        <md-segmented-button value="c">C</md-segmented-button>
      </md-segmented-button-set>
    `
  ): Promise<MdSegmentedButtonSet> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const set = container.querySelector(
      'md-segmented-button-set'
    ) as MdSegmentedButtonSet;
    await set.updateComplete;

    // Wait for children to be ready
    const buttons = container.querySelectorAll('md-segmented-button');
    await Promise.all(
      Array.from(buttons).map((b) => (b as MdSegmentedButton).updateComplete)
    );

    return set;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const set = await createSegmentedButtonSet();

      expect(set).toBeInTheDocument();
      expect(set.shadowRoot).toBeTruthy();
    });

    it('renders children in default slot', async () => {
      const set = await createSegmentedButtonSet();

      const buttons = set.querySelectorAll('md-segmented-button');
      expect(buttons.length).toBe(3);
    });

    it('defaults to single selection mode', async () => {
      const set = await createSegmentedButtonSet();

      expect(set.selectionMode).toBe('single');
    });
  });

  describe('position assignment', () => {
    it('assigns first position to first button', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      await firstButton.updateComplete;

      const innerButton = firstButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--first');
    });

    it('assigns middle position to middle buttons', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const middleButton = buttons[1] as MdSegmentedButton;
      await middleButton.updateComplete;

      const innerButton = middleButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--middle');
    });

    it('assigns last position to last button', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const lastButton = buttons[2] as MdSegmentedButton;
      await lastButton.updateComplete;

      const innerButton = lastButton.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--last');
    });

    it('assigns only position when single button', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set>
          <md-segmented-button value="a">A</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const button = set.querySelector(
        'md-segmented-button'
      ) as MdSegmentedButton;
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--only');
    });
  });

  describe('single-select mode', () => {
    it('selects first button by default', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const selected = set.getSelectedValues();
      expect(selected).toEqual(['a']);
    });

    it('selects clicked button', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const secondButton = buttons[1] as MdSegmentedButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);
      await set.updateComplete;

      expect(secondButton.selected).toBe(true);
      expect(set.getSelectedValues()).toEqual(['b']);
    });

    it('deselects other buttons when one is selected', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const secondButton = buttons[1] as MdSegmentedButton;
      const innerSecond = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerSecond);
      await set.updateComplete;

      expect(firstButton.selected).toBe(false);
      expect(secondButton.selected).toBe(true);
    });

    it('does not allow deselecting in single mode', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;

      // Click already selected button
      fireEvent.click(innerFirst);
      await set.updateComplete;

      // Should still be selected
      expect(firstButton.selected).toBe(true);
      expect(set.getSelectedValues()).toEqual(['a']);
    });
  });

  describe('multi-select mode', () => {
    it('allows multiple selections', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set selection-mode="multi">
          <md-segmented-button value="a">A</md-segmented-button>
          <md-segmented-button value="b">B</md-segmented-button>
          <md-segmented-button value="c">C</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const secondButton = buttons[1] as MdSegmentedButton;

      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;
      const innerSecond = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerFirst);
      fireEvent.click(innerSecond);
      await set.updateComplete;

      expect(set.getSelectedValues()).toContain('a');
      expect(set.getSelectedValues()).toContain('b');
    });

    it('toggles selection on click', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set selection-mode="multi">
          <md-segmented-button value="a" selected>A</md-segmented-button>
          <md-segmented-button value="b">B</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const firstButton = set.querySelector(
        'md-segmented-button'
      ) as MdSegmentedButton;
      const innerFirst = firstButton.shadowRoot!.querySelector('button')!;

      // Click to deselect
      fireEvent.click(innerFirst);
      await set.updateComplete;

      expect(firstButton.selected).toBe(false);
    });
  });

  describe('events', () => {
    it('emits md-change when selection changes', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const changeHandler = vi.fn();
      set.addEventListener('md-change', changeHandler);

      const buttons = set.querySelectorAll('md-segmented-button');
      const secondButton = buttons[1] as MdSegmentedButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('includes selected and previousSelected in event detail', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      let eventDetail: { selected: string[]; previousSelected: string[] } | undefined;
      set.addEventListener('md-change', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const buttons = set.querySelectorAll('md-segmented-button');
      const secondButton = buttons[1] as MdSegmentedButton;
      const innerButton = secondButton.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(eventDetail?.previousSelected).toEqual(['a']);
      expect(eventDetail?.selected).toEqual(['b']);
    });
  });

  describe('disabled state', () => {
    it('disables all buttons when set is disabled', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set disabled>
          <md-segmented-button value="a">A</md-segmented-button>
          <md-segmented-button value="b">B</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const container = set.shadowRoot!.querySelector(
        '.md-segmented-button-set'
      );
      expect(container).toHaveClass('md-segmented-button-set--disabled');
    });

    it('does not emit change when disabled', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set disabled>
          <md-segmented-button value="a">A</md-segmented-button>
          <md-segmented-button value="b">B</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      const changeHandler = vi.fn();
      set.addEventListener('md-change', changeHandler);

      const button = set.querySelector(
        'md-segmented-button'
      ) as MdSegmentedButton;
      const innerButton = button.shadowRoot!.querySelector('button')!;

      fireEvent.click(innerButton);

      expect(changeHandler).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has role radiogroup in single-select mode', async () => {
      const set = await createSegmentedButtonSet();

      const container = set.shadowRoot!.querySelector(
        '.md-segmented-button-set'
      );
      expect(container).toHaveAttribute('role', 'radiogroup');
    });

    it('has role group in multi-select mode', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set selection-mode="multi">
          <md-segmented-button value="a">A</md-segmented-button>
        </md-segmented-button-set>
      `);

      const container = set.shadowRoot!.querySelector(
        '.md-segmented-button-set'
      );
      expect(container).toHaveAttribute('role', 'group');
    });

    it('forwards aria-label to container', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set aria-label="View options">
          <md-segmented-button value="a">A</md-segmented-button>
        </md-segmented-button-set>
      `);

      const container = set.shadowRoot!.querySelector(
        '.md-segmented-button-set'
      );
      expect(container).toHaveAttribute('aria-label', 'View options');
    });
  });

  describe('keyboard navigation', () => {
    it('moves focus with arrow right', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const secondButton = buttons[1] as MdSegmentedButton;

      // Focus first button
      firstButton.focus();

      // Press arrow right
      fireEvent.keyDown(firstButton, { key: 'ArrowRight' });

      // Second button should be focused
      expect(document.activeElement).toBe(secondButton);
    });

    it('moves focus with arrow left', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const secondButton = buttons[1] as MdSegmentedButton;

      // Focus second button
      secondButton.focus();

      // Press arrow left
      fireEvent.keyDown(secondButton, { key: 'ArrowLeft' });

      // First button should be focused
      expect(document.activeElement).toBe(firstButton);
    });

    it('wraps focus from last to first', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const lastButton = buttons[2] as MdSegmentedButton;

      // Focus last button
      lastButton.focus();

      // Press arrow right
      fireEvent.keyDown(lastButton, { key: 'ArrowRight' });

      // First button should be focused
      expect(document.activeElement).toBe(firstButton);
    });

    it('selects on arrow navigation in single-select mode', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const secondButton = buttons[1] as MdSegmentedButton;

      // Focus first button
      firstButton.focus();

      // Press arrow right
      fireEvent.keyDown(firstButton, { key: 'ArrowRight' });
      await set.updateComplete;

      // Second button should be selected
      expect(secondButton.selected).toBe(true);
      expect(firstButton.selected).toBe(false);
    });

    it('moves to first with Home key', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const lastButton = buttons[2] as MdSegmentedButton;

      // Focus last button
      lastButton.focus();

      // Press Home
      fireEvent.keyDown(lastButton, { key: 'Home' });

      expect(document.activeElement).toBe(firstButton);
    });

    it('moves to last with End key', async () => {
      const set = await createSegmentedButtonSet();
      await new Promise((r) => setTimeout(r, 10));

      const buttons = set.querySelectorAll('md-segmented-button');
      const firstButton = buttons[0] as MdSegmentedButton;
      const lastButton = buttons[2] as MdSegmentedButton;

      // Focus first button
      firstButton.focus();

      // Press End
      fireEvent.keyDown(firstButton, { key: 'End' });

      expect(document.activeElement).toBe(lastButton);
    });
  });

  describe('density', () => {
    it('applies compact class when density is compact', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set density="compact">
          <md-segmented-button value="a">A</md-segmented-button>
        </md-segmented-button-set>
      `);

      const container = set.shadowRoot!.querySelector(
        '.md-segmented-button-set'
      );
      expect(container).toHaveClass('md-segmented-button-set--compact');
    });
  });

  describe('programmatic selection', () => {
    it('sets selected values programmatically', async () => {
      const set = await createSegmentedButtonSet(`
        <md-segmented-button-set selection-mode="multi">
          <md-segmented-button value="a">A</md-segmented-button>
          <md-segmented-button value="b">B</md-segmented-button>
          <md-segmented-button value="c">C</md-segmented-button>
        </md-segmented-button-set>
      `);
      await new Promise((r) => setTimeout(r, 10));

      set.setSelectedValues(['a', 'c']);

      const buttons = set.querySelectorAll('md-segmented-button');
      expect((buttons[0] as MdSegmentedButton).selected).toBe(true);
      expect((buttons[1] as MdSegmentedButton).selected).toBe(false);
      expect((buttons[2] as MdSegmentedButton).selected).toBe(true);
    });
  });
});
