import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './icon-button.js';
import type { MdIconButton } from './icon-button.js';

describe('MdIconButton', () => {
  async function createIconButton(
    template = '<md-icon-button aria-label="Test"><svg></svg></md-icon-button>'
  ): Promise<MdIconButton> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const button = container.querySelector('md-icon-button') as MdIconButton;
    await button.updateComplete;
    return button;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const button = await createIconButton();

      expect(button).toBeInTheDocument();
      expect(button.shadowRoot).toBeTruthy();
      expect(button.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with standard variant by default', async () => {
      const button = await createIconButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--standard');
    });

    it('renders with filled variant', async () => {
      const button = await createIconButton(
        '<md-icon-button variant="filled" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--filled');
    });

    it('renders with tonal variant', async () => {
      const button = await createIconButton(
        '<md-icon-button variant="tonal" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--tonal');
    });

    it('renders with outlined variant', async () => {
      const button = await createIconButton(
        '<md-icon-button variant="outlined" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--outlined');
    });
  });

  describe('sizes', () => {
    it('renders with small size by default (MD3 Expressive)', async () => {
      const button = await createIconButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--small');
    });

    it('renders with xsmall size', async () => {
      const button = await createIconButton(
        '<md-icon-button size="xsmall" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--xsmall');
    });

    it('renders with small size', async () => {
      const button = await createIconButton(
        '<md-icon-button size="small" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--small');
    });

    it('renders with medium size', async () => {
      const button = await createIconButton(
        '<md-icon-button size="medium" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--medium');
    });

    it('renders with large size', async () => {
      const button = await createIconButton(
        '<md-icon-button size="large" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--large');
    });

    it('renders with xlarge size', async () => {
      const button = await createIconButton(
        '<md-icon-button size="xlarge" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--xlarge');
    });
  });

  describe('shapes', () => {
    it('renders with round shape by default', async () => {
      const button = await createIconButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--round');
    });

    it('renders with square shape', async () => {
      const button = await createIconButton(
        '<md-icon-button shape="square" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--square');
    });
  });

  describe('widths', () => {
    it('renders with default width by default', async () => {
      const button = await createIconButton();

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-icon-button--width-narrow');
      expect(innerButton).not.toHaveClass('md-icon-button--width-wide');
    });

    it('renders with narrow width', async () => {
      const button = await createIconButton(
        '<md-icon-button width="narrow" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--width-narrow');
    });

    it('renders with wide width', async () => {
      const button = await createIconButton(
        '<md-icon-button width="wide" aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--width-wide');
    });
  });

  describe('toggle functionality', () => {
    it('does not toggle by default', async () => {
      const button = await createIconButton();

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(button.selected).toBe(false);
    });

    it('toggles selected state when toggle is enabled', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle aria-label="Test"><svg></svg></md-icon-button>'
      );

      expect(button.selected).toBe(false);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(button.selected).toBe(true);
    });

    it('adds selected class when selected', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle selected aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-icon-button--selected');
    });

    it('sets aria-pressed when toggle is enabled', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-pressed', 'false');
    });

    it('updates aria-pressed when selected', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle selected aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('shows default icon when not selected', async () => {
      const button = await createIconButton(
        `<md-icon-button toggle aria-label="Test">
          <span id="default-icon">default</span>
          <span slot="selected" id="selected-icon">selected</span>
        </md-icon-button>`
      );

      await button.updateComplete;

      const icons = button.shadowRoot!.querySelectorAll('.md-icon-button__icon');
      expect(icons[0].hasAttribute('hidden')).toBe(false);
      expect(icons[1].hasAttribute('hidden')).toBe(true);
    });

    it('shows selected icon when selected and selected slot has content', async () => {
      const button = await createIconButton(
        `<md-icon-button toggle selected aria-label="Test">
          <span id="default-icon">default</span>
          <span slot="selected" id="selected-icon">selected</span>
        </md-icon-button>`
      );

      // Wait for slotchange to fire
      await new Promise((resolve) => setTimeout(resolve, 0));
      await button.updateComplete;

      const icons = button.shadowRoot!.querySelectorAll('.md-icon-button__icon');
      expect(icons[0].hasAttribute('hidden')).toBe(true);
      expect(icons[1].hasAttribute('hidden')).toBe(false);
    });

    it('shows default icon when selected but no selected slot content', async () => {
      const button = await createIconButton(
        `<md-icon-button toggle selected aria-label="Test">
          <span id="default-icon">default</span>
        </md-icon-button>`
      );

      await button.updateComplete;

      const icons = button.shadowRoot!.querySelectorAll('.md-icon-button__icon');
      expect(icons[0].hasAttribute('hidden')).toBe(false);
      expect(icons[1].hasAttribute('hidden')).toBe(true);
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on inner button', async () => {
      const button = await createIconButton(
        '<md-icon-button disabled aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toBeDisabled();
    });

    it('does not emit md-click when disabled', async () => {
      const button = await createIconButton(
        '<md-icon-button disabled aria-label="Test"><svg></svg></md-icon-button>'
      );

      const clickHandler = vi.fn();
      button.addEventListener('md-click', clickHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).not.toHaveBeenCalled();
    });

    it('does not toggle when disabled', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle disabled aria-label="Test"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(button.selected).toBe(false);
    });
  });

  describe('events', () => {
    it('emits md-click event on click', async () => {
      const button = await createIconButton();

      const clickHandler = vi.fn();
      button.addEventListener('md-click', clickHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('emits md-toggle event when toggled', async () => {
      const button = await createIconButton(
        '<md-icon-button toggle aria-label="Test"><svg></svg></md-icon-button>'
      );

      const toggleHandler = vi.fn();
      button.addEventListener('md-toggle', toggleHandler);

      const innerButton = button.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(toggleHandler).toHaveBeenCalledTimes(1);
      expect(toggleHandler.mock.calls[0][0].detail.selected).toBe(true);
    });
  });

  describe('accessibility', () => {
    it('forwards aria-label to inner button', async () => {
      const button = await createIconButton(
        '<md-icon-button aria-label="Close"><svg></svg></md-icon-button>'
      );

      const innerButton = button.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-label', 'Close');
    });
  });

  describe('link mode', () => {
    it('renders as anchor when href is provided', async () => {
      const button = await createIconButton(
        '<md-icon-button href="https://example.com" aria-label="Link"><svg></svg></md-icon-button>'
      );

      const anchor = button.shadowRoot!.querySelector('a');
      expect(anchor).toBeTruthy();
      expect(anchor).toHaveAttribute('href', 'https://example.com');
    });

    it('adds rel noopener noreferrer for target _blank', async () => {
      const button = await createIconButton(
        '<md-icon-button href="https://example.com" target="_blank" aria-label="Link"><svg></svg></md-icon-button>'
      );

      const anchor = button.shadowRoot!.querySelector('a');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
