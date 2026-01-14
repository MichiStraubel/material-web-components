import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './segmented-button.js';
import type { MdSegmentedButton } from './segmented-button.js';

describe('MdSegmentedButton', () => {
  async function createSegmentedButton(
    template = '<md-segmented-button value="test">Test</md-segmented-button>'
  ): Promise<MdSegmentedButton> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const button = container.querySelector(
      'md-segmented-button'
    ) as MdSegmentedButton;
    await button.updateComplete;
    return button;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const button = await createSegmentedButton();

      expect(button).toBeInTheDocument();
      expect(button.shadowRoot).toBeTruthy();
      expect(button.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with value attribute', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="option1">Option 1</md-segmented-button>'
      );

      expect(button.value).toBe('option1');
    });

    it('renders with only position by default', async () => {
      const button = await createSegmentedButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--only');
    });
  });

  describe('positions', () => {
    it('applies first position class', async () => {
      const button = await createSegmentedButton();
      button.setPosition('first');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--first');
    });

    it('applies middle position class', async () => {
      const button = await createSegmentedButton();
      button.setPosition('middle');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--middle');
    });

    it('applies last position class', async () => {
      const button = await createSegmentedButton();
      button.setPosition('last');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--last');
    });

    it('applies only position class', async () => {
      const button = await createSegmentedButton();
      button.setPosition('only');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--only');
    });
  });

  describe('selected state', () => {
    it('renders without selected class by default', async () => {
      const button = await createSegmentedButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-segmented-button--selected');
    });

    it('renders with selected class when selected', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" selected>Test</md-segmented-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--selected');
    });

    it('shows checkmark when selected', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" selected>Test</md-segmented-button>'
      );

      const checkmark = button.shadowRoot!.querySelector(
        '.md-segmented-button__checkmark'
      );
      expect(checkmark).toBeTruthy();
      // Check it's visible (not display: none)
      expect(getComputedStyle(checkmark!).display).not.toBe('none');
    });

    it('hides checkmark when no-checkmark is set', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" selected no-checkmark>Test</md-segmented-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--no-checkmark');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on inner button', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" disabled>Disabled</md-segmented-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toBeDisabled();
    });

    it('does not emit toggle when disabled', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" disabled>Disabled</md-segmented-button>'
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
      const button = await createSegmentedButton();

      const toggleHandler = vi.fn();
      button.addEventListener('toggle', toggleHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(toggleHandler).toHaveBeenCalledTimes(1);
    });

    it('includes originalEvent and value in event detail', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="myvalue">Test</md-segmented-button>'
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
      const button = await createSegmentedButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'button');
    });

    it('has role radio when in single-select set', async () => {
      const button = await createSegmentedButton();
      button.setInsideSet(true);
      button.setSelectionMode('single');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'radio');
    });

    it('has role checkbox when in multi-select set', async () => {
      const button = await createSegmentedButton();
      button.setInsideSet(true);
      button.setSelectionMode('multi');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('role', 'checkbox');
    });

    it('sets aria-checked when in set', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" selected>Test</md-segmented-button>'
      );
      button.setInsideSet(true);
      button.setSelectionMode('single');
      await button.updateComplete;

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-checked', 'true');
    });

    it('forwards aria-label to inner button', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test" aria-label="Bold formatting">B</md-segmented-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-label', 'Bold formatting');
    });
  });

  describe('icon slot', () => {
    it('shows icon slot when icon is provided', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test"><svg slot="icon"></svg>With Icon</md-segmented-button>'
      );

      await button.updateComplete;
      const iconSlot = button.shadowRoot!.querySelector(
        '.md-segmented-button__icon'
      );
      expect(iconSlot).toBeTruthy();
    });

    it('applies icon-only class when only icon is provided', async () => {
      const button = await createSegmentedButton(
        '<md-segmented-button value="test"><svg slot="icon"></svg></md-segmented-button>'
      );

      await button.updateComplete;
      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-segmented-button--icon-only');
    });
  });
});
