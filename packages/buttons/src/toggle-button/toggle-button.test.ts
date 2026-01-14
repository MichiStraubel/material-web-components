import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './toggle-button.js';
import type { MdToggleButton } from './toggle-button.js';

describe('MdToggleButton', () => {
  async function createToggleButton(
    template = '<md-toggle-button value="test">Test</md-toggle-button>'
  ): Promise<MdToggleButton> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const button = container.querySelector('md-toggle-button') as MdToggleButton;
    await button.updateComplete;
    return button;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const button = await createToggleButton();

      expect(button).toBeInTheDocument();
      expect(button.shadowRoot).toBeTruthy();
      expect(button.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with value attribute', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="option1">Option 1</md-toggle-button>'
      );

      expect(button.value).toBe('option1');
    });

    it('renders with standalone position by default', async () => {
      const button = await createToggleButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--standalone');
    });
  });

  describe('positions (MD3 Expressive connected shapes)', () => {
    it('applies leading position class', async () => {
      const button = await createToggleButton();
      button.setPosition('leading');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--leading');
    });

    it('applies middle position class', async () => {
      const button = await createToggleButton();
      button.setPosition('middle');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--middle');
    });

    it('applies trailing position class', async () => {
      const button = await createToggleButton();
      button.setPosition('trailing');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--trailing');
    });

    it('applies standalone position class', async () => {
      const button = await createToggleButton();
      button.setPosition('standalone');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--standalone');
    });
  });

  describe('selected state', () => {
    it('renders without selected class by default', async () => {
      const button = await createToggleButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-toggle-button--selected');
    });

    it('renders with selected class when selected', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" selected>Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--selected');
    });

    it('has aria-pressed when standalone', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" selected>Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on inner button', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" disabled>Disabled</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toBeDisabled();
    });

    it('does not emit toggle when disabled', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" disabled>Disabled</md-toggle-button>'
      );

      const toggleHandler = vi.fn();
      button.addEventListener('toggle', toggleHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(toggleHandler).not.toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('emits toggle event on click', async () => {
      const button = await createToggleButton();

      const toggleHandler = vi.fn();
      button.addEventListener('toggle', toggleHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(toggleHandler).toHaveBeenCalledTimes(1);
    });

    it('includes originalEvent and value in event detail', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="myvalue">Test</md-toggle-button>'
      );

      let eventDetail: { originalEvent: Event; value: string; selected: boolean } | undefined;
      button.addEventListener('toggle', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(eventDetail?.originalEvent).toBeTruthy();
      expect(eventDetail?.value).toBe('myvalue');
    });
  });

  describe('accessibility', () => {
    it('has role button when standalone', async () => {
      const button = await createToggleButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'button');
    });

    it('has role radio when in single-select group', async () => {
      const button = await createToggleButton();
      button.setInsideGroup(true);
      button.setSelectionMode('single');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'radio');
    });

    it('has role checkbox when in multi-select group', async () => {
      const button = await createToggleButton();
      button.setInsideGroup(true);
      button.setSelectionMode('multi');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'checkbox');
    });

    it('sets aria-checked when in group', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" selected>Test</md-toggle-button>'
      );
      button.setInsideGroup(true);
      button.setSelectionMode('single');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-checked', 'true');
    });

    it('forwards aria-label to inner button', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" aria-label="Bold formatting">B</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-label', 'Bold formatting');
    });
  });

  describe('sizes (MD3 Expressive)', () => {
    it('defaults to medium size', async () => {
      const button = await createToggleButton();

      expect(button.size).toBe('medium');
      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--medium');
    });

    it('applies xsmall size class', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" size="xsmall">Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--xsmall');
    });

    it('applies small size class', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" size="small">Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--small');
    });

    it('applies large size class', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" size="large">Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--large');
    });

    it('applies xlarge size class', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test" size="xlarge">Test</md-toggle-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--xlarge');
    });

    it('updates size via setSize method', async () => {
      const button = await createToggleButton();

      button.setSize('large');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--large');
    });
  });

  describe('icon slot', () => {
    it('shows icon slot when icon is provided', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test"><svg slot="icon"></svg>With Icon</md-toggle-button>'
      );

      await button.updateComplete;
      const iconSlot = button.shadowRoot!.querySelector('.md-toggle-button__icon');
      expect(iconSlot).toBeTruthy();
    });

    it('applies icon-only class when only icon is provided', async () => {
      const button = await createToggleButton(
        '<md-toggle-button value="test"><svg slot="icon"></svg></md-toggle-button>'
      );

      await button.updateComplete;
      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-toggle-button--icon-only');
    });
  });
});
