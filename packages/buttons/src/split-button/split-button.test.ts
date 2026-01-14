import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './split-button.js';
import type { MdSplitButton } from './split-button.js';

describe('MdSplitButton', () => {
  async function createSplitButton(
    template = '<md-split-button>Save</md-split-button>'
  ): Promise<MdSplitButton> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const splitButton = container.querySelector('md-split-button') as MdSplitButton;
    await splitButton.updateComplete;
    return splitButton;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const splitButton = await createSplitButton();

      expect(splitButton).toBeInTheDocument();
      expect(splitButton.shadowRoot).toBeTruthy();
      expect(splitButton.shadowRoot!.querySelector('.md-split-button')).toBeTruthy();
    });

    it('renders both leading and trailing buttons', async () => {
      const splitButton = await createSplitButton();

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');

      expect(leadingButton).toBeTruthy();
      expect(trailingButton).toBeTruthy();
    });

    it('renders with filled variant by default', async () => {
      const splitButton = await createSplitButton();

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveClass('md-split-button--filled');
    });
  });

  describe('variants', () => {
    it('renders with tonal variant', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button variant="tonal">Save</md-split-button>'
      );

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveClass('md-split-button--tonal');
    });

    it('renders with outlined variant', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button variant="outlined">Save</md-split-button>'
      );

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveClass('md-split-button--outlined');
    });

    it('renders with elevated variant', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button variant="elevated">Save</md-split-button>'
      );

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveClass('md-split-button--elevated');
    });
  });

  describe('sizes', () => {
    it('renders with medium size by default', async () => {
      const splitButton = await createSplitButton();

      const container = splitButton.shadowRoot!.querySelector('.md-split-button');
      expect(container).toHaveClass('md-split-button--medium');
    });

    it('renders with xsmall size', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button size="xsmall">Save</md-split-button>'
      );

      const container = splitButton.shadowRoot!.querySelector('.md-split-button');
      expect(container).toHaveClass('md-split-button--xsmall');
    });

    it('renders with small size', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button size="small">Save</md-split-button>'
      );

      const container = splitButton.shadowRoot!.querySelector('.md-split-button');
      expect(container).toHaveClass('md-split-button--small');
    });

    it('renders with large size', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button size="large">Save</md-split-button>'
      );

      const container = splitButton.shadowRoot!.querySelector('.md-split-button');
      expect(container).toHaveClass('md-split-button--large');
    });

    it('renders with xlarge size', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button size="xlarge">Save</md-split-button>'
      );

      const container = splitButton.shadowRoot!.querySelector('.md-split-button');
      expect(container).toHaveClass('md-split-button--xlarge');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on both buttons', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button disabled>Save</md-split-button>'
      );

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');

      expect(leadingButton).toBeDisabled();
      expect(trailingButton).toBeDisabled();
    });

    it('does not emit events when disabled', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button disabled>Save</md-split-button>'
      );

      const clickHandler = vi.fn();
      const openHandler = vi.fn();
      splitButton.addEventListener('click', clickHandler);
      splitButton.addEventListener('open', openHandler);

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading')!;
      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;

      fireEvent.click(leadingButton);
      fireEvent.click(trailingButton);

      expect(clickHandler).not.toHaveBeenCalled();
      expect(openHandler).not.toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('emits native click when leading button is clicked', async () => {
      const splitButton = await createSplitButton();

      const clickHandler = vi.fn();
      splitButton.addEventListener('click', clickHandler);

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading')!;
      fireEvent.click(leadingButton);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('value is accessible via element.value on click', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button value="save-action">Save</md-split-button>'
      );

      let capturedValue: string | undefined;
      splitButton.addEventListener('click', () => {
        capturedValue = splitButton.value;
      });

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading')!;
      fireEvent.click(leadingButton);

      expect(capturedValue).toBe('save-action');
    });

    it('emits open when trailing button is clicked to open menu', async () => {
      const splitButton = await createSplitButton();

      const openHandler = vi.fn();
      splitButton.addEventListener('open', openHandler);

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      fireEvent.click(trailingButton);

      expect(openHandler).toHaveBeenCalledTimes(1);
    });

    it('emits close when trailing button is clicked to close menu', async () => {
      const splitButton = await createSplitButton();

      const closeHandler = vi.fn();
      splitButton.addEventListener('close', closeHandler);

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      // First click opens
      fireEvent.click(trailingButton);
      // Second click closes
      fireEvent.click(trailingButton);

      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('emits change with value when menu item is selected', async () => {
      const splitButton = await createSplitButton(`
        <md-split-button>
          Save
          <button slot="menu" role="menuitem" value="save-as">Save As</button>
        </md-split-button>
      `);

      let eventDetail: { value: string } | undefined;
      splitButton.addEventListener('change', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      // Open the menu first
      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      fireEvent.click(trailingButton);
      await splitButton.updateComplete;

      // Click the menu item
      const menuItem = splitButton.querySelector('[value="save-as"]')!;
      fireEvent.click(menuItem);

      expect(eventDetail?.value).toBe('save-as');
    });

    it('emits close when menu item is selected', async () => {
      const splitButton = await createSplitButton(`
        <md-split-button>
          Save
          <button slot="menu" role="menuitem" value="save-as">Save As</button>
        </md-split-button>
      `);

      const closeHandler = vi.fn();
      splitButton.addEventListener('close', closeHandler);

      // Open the menu first
      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      fireEvent.click(trailingButton);
      await splitButton.updateComplete;

      // Click the menu item
      const menuItem = splitButton.querySelector('[value="save-as"]')!;
      fireEvent.click(menuItem);

      expect(closeHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('expanded state', () => {
    it('is not expanded by default', async () => {
      const splitButton = await createSplitButton();

      expect(splitButton.expanded).toBe(false);
    });

    it('toggles expanded on trailing button click', async () => {
      const splitButton = await createSplitButton();

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      fireEvent.click(trailingButton);

      expect(splitButton.expanded).toBe(true);

      fireEvent.click(trailingButton);
      expect(splitButton.expanded).toBe(false);
    });

    it('adds expanded class to trailing button when expanded', async () => {
      const splitButton = await createSplitButton();

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing')!;
      fireEvent.click(trailingButton);
      await splitButton.updateComplete;

      expect(trailingButton).toHaveClass('md-split-button__trailing--expanded');
    });
  });

  describe('accessibility', () => {
    it('forwards leading-aria-label to leading button', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button leading-aria-label="Save document">Save</md-split-button>'
      );

      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveAttribute('aria-label', 'Save document');
    });

    it('forwards trailing-aria-label to trailing button', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button trailing-aria-label="More save options">Save</md-split-button>'
      );

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');
      expect(trailingButton).toHaveAttribute('aria-label', 'More save options');
    });

    it('has default aria-label on trailing button', async () => {
      const splitButton = await createSplitButton();

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');
      expect(trailingButton).toHaveAttribute('aria-label', 'More options');
    });

    it('sets aria-expanded on trailing button', async () => {
      const splitButton = await createSplitButton();

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');
      expect(trailingButton).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(trailingButton!);
      await splitButton.updateComplete;

      expect(trailingButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets aria-haspopup on trailing button', async () => {
      const splitButton = await createSplitButton();

      const trailingButton = splitButton.shadowRoot!.querySelector('.md-split-button__trailing');
      expect(trailingButton).toHaveAttribute('aria-haspopup', 'menu');
    });
  });

  describe('icons', () => {
    it('renders with leading icon', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button><svg slot="leading-icon"></svg>Save</md-split-button>'
      );

      await splitButton.updateComplete;
      const iconSlot = splitButton.shadowRoot!.querySelector('.md-split-button__leading-icon');
      expect(iconSlot).toBeTruthy();
    });

    it('applies has-icon class when leading icon is present', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button><svg slot="leading-icon"></svg>Save</md-split-button>'
      );

      await splitButton.updateComplete;
      const leadingButton = splitButton.shadowRoot!.querySelector('.md-split-button__leading');
      expect(leadingButton).toHaveClass('md-split-button__leading--has-icon');
    });
  });

  describe('value property', () => {
    it('has empty value by default', async () => {
      const splitButton = await createSplitButton();
      expect(splitButton.value).toBe('');
    });

    it('reflects value attribute', async () => {
      const splitButton = await createSplitButton(
        '<md-split-button value="my-action">Save</md-split-button>'
      );
      expect(splitButton.value).toBe('my-action');
      expect(splitButton.getAttribute('value')).toBe('my-action');
    });

    it('can update value programmatically', async () => {
      const splitButton = await createSplitButton();
      splitButton.value = 'new-value';
      await splitButton.updateComplete;
      expect(splitButton.value).toBe('new-value');
      expect(splitButton.getAttribute('value')).toBe('new-value');
    });
  });
});
