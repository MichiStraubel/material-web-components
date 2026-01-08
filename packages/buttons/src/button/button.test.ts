import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './button.js';
import type { MdButton } from './button.js';

describe('MdButton', () => {
  async function createButton(
    template = '<md-button>Click me</md-button>'
  ): Promise<MdButton> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const button = container.querySelector('md-button') as MdButton;
    await button.updateComplete;
    return button;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const button = await createButton();

      expect(button).toBeInTheDocument();
      expect(button.shadowRoot).toBeTruthy();
      expect(button.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with filled variant by default', async () => {
      const button = await createButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--filled');
    });

    it('renders with outlined variant', async () => {
      const button = await createButton(
        '<md-button variant="outlined">Outlined</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--outlined');
    });

    it('renders with text variant', async () => {
      const button = await createButton(
        '<md-button variant="text">Text</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--text');
    });

    it('renders with elevated variant', async () => {
      const button = await createButton(
        '<md-button variant="elevated">Elevated</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--elevated');
    });

    it('renders with tonal variant', async () => {
      const button = await createButton(
        '<md-button variant="tonal">Tonal</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--tonal');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on inner button', async () => {
      const button = await createButton(
        '<md-button disabled>Disabled</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toBeDisabled();
    });

    it('does not emit md-click when disabled', async () => {
      const button = await createButton(
        '<md-button disabled>Disabled</md-button>'
      );

      const clickHandler = vi.fn();
      button.addEventListener('md-click', clickHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('emits md-click event on click', async () => {
      const button = await createButton();

      const clickHandler = vi.fn();
      button.addEventListener('md-click', clickHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('includes original event in detail', async () => {
      const button = await createButton();

      let eventDetail: unknown;
      button.addEventListener('md-click', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(eventDetail).toHaveProperty('originalEvent');
    });
  });

  describe('link mode', () => {
    it('renders as anchor when href is provided', async () => {
      const button = await createButton(
        '<md-button href="https://example.com">Link</md-button>'
      );

      const anchor = button.shadowRoot!.querySelector('a');
      expect(anchor).toBeTruthy();
      expect(anchor).toHaveAttribute('href', 'https://example.com');
    });

    it('adds rel noopener noreferrer for target _blank', async () => {
      const button = await createButton(
        '<md-button href="https://example.com" target="_blank">Link</md-button>'
      );

      const anchor = button.shadowRoot!.querySelector('a');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders as button when disabled even with href', async () => {
      const button = await createButton(
        '<md-button href="https://example.com" disabled>Link</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      const anchor = button.shadowRoot!.querySelector('a');

      expect(innerButton).toBeTruthy();
      expect(anchor).toBeNull();
    });
  });

  describe('button type', () => {
    it('defaults to type button', async () => {
      const button = await createButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('type', 'button');
    });

    it('can be set to type submit', async () => {
      const button = await createButton(
        '<md-button type="submit">Submit</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('type', 'submit');
    });

    it('can be set to type reset', async () => {
      const button = await createButton(
        '<md-button type="reset">Reset</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('type', 'reset');
    });
  });

  describe('accessibility', () => {
    it('forwards aria-label to inner button', async () => {
      const button = await createButton(
        '<md-button aria-label="Close dialog">X</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-label', 'Close dialog');
    });
  });

  describe('sizes', () => {
    it('renders with medium size by default', async () => {
      const button = await createButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--medium');
    });

    it('renders with small size', async () => {
      const button = await createButton(
        '<md-button size="small">Small</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--small');
    });

    it('renders with large size', async () => {
      const button = await createButton(
        '<md-button size="large">Large</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--large');
    });
  });

  describe('full width', () => {
    it('does not have full-width class by default', async () => {
      const button = await createButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-button--full-width');
    });

    it('renders with full-width class when enabled', async () => {
      const button = await createButton(
        '<md-button full-width>Full Width</md-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--full-width');
    });
  });

  describe('icon slot', () => {
    it('shows icon slot when icon is provided', async () => {
      const button = await createButton(
        '<md-button><svg slot="icon"></svg>With Icon</md-button>'
      );

      await button.updateComplete;
      const iconSlot = button.shadowRoot!.querySelector('.md-button__icon');
      expect(iconSlot).toBeTruthy();
    });

    it('adds has-icon class when icon is provided', async () => {
      const button = await createButton(
        '<md-button><svg slot="icon"></svg>With Icon</md-button>'
      );

      await button.updateComplete;
      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-button--has-icon');
    });
  });
});
