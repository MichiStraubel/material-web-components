import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './fab.js';
import type { MdFab } from './fab.js';

describe('MdFab', () => {
  async function createFab(
    template = '<md-fab aria-label="Add"><svg slot="icon"></svg></md-fab>'
  ): Promise<MdFab> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const fab = container.querySelector('md-fab') as MdFab;
    await fab.updateComplete;
    return fab;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const fab = await createFab();

      expect(fab).toBeInTheDocument();
      expect(fab.shadowRoot).toBeTruthy();
      expect(fab.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with primary variant by default', async () => {
      const fab = await createFab();

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--primary');
    });

    it('renders with surface variant', async () => {
      const fab = await createFab(
        '<md-fab variant="surface" aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--surface');
    });

    it('renders with secondary variant', async () => {
      const fab = await createFab(
        '<md-fab variant="secondary" aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--secondary');
    });

    it('renders with tertiary variant', async () => {
      const fab = await createFab(
        '<md-fab variant="tertiary" aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--tertiary');
    });
  });

  describe('sizes', () => {
    it('renders with medium size by default', async () => {
      const fab = await createFab();

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--medium');
    });

    it('renders with small size', async () => {
      const fab = await createFab(
        '<md-fab size="small" aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--small');
    });

    it('renders with large size', async () => {
      const fab = await createFab(
        '<md-fab size="large" aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--large');
    });
  });

  describe('extended mode', () => {
    it('does not have extended class by default', async () => {
      const fab = await createFab();

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-fab--extended');
    });

    it('renders with extended class when enabled', async () => {
      const fab = await createFab(
        '<md-fab extended aria-label="Add"><svg slot="icon"></svg>Create</md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--extended');
    });

    it('shows label slot when extended', async () => {
      const fab = await createFab(
        '<md-fab extended aria-label="Add"><svg slot="icon"></svg>Create</md-fab>'
      );

      const labelSlot = fab.shadowRoot!.querySelector('.md-fab__label');
      expect(labelSlot).toBeTruthy();
      expect(labelSlot).not.toHaveAttribute('hidden');
    });

    it('hides label slot when not extended and no label content', async () => {
      const fab = await createFab(
        '<md-fab aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const labelSlot = fab.shadowRoot!.querySelector('.md-fab__label');
      expect(labelSlot).toHaveAttribute('hidden');
    });

    it('auto-extends when label content is provided', async () => {
      const fab = await createFab(
        '<md-fab aria-label="Add"><svg slot="icon"></svg>Create</md-fab>'
      );

      await fab.updateComplete;
      const innerButton = fab.shadowRoot!.querySelector('button');
      // FAB auto-extends when hasLabel is true
      expect(innerButton).toHaveClass('md-fab--extended');
    });
  });

  describe('lowered mode', () => {
    it('does not have lowered class by default', async () => {
      const fab = await createFab();

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).not.toHaveClass('md-fab--lowered');
    });

    it('renders with lowered class when enabled', async () => {
      const fab = await createFab(
        '<md-fab lowered aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveClass('md-fab--lowered');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on inner button', async () => {
      const fab = await createFab(
        '<md-fab disabled aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toBeDisabled();
    });

    it('does not emit md-click when disabled', async () => {
      const fab = await createFab(
        '<md-fab disabled aria-label="Add"><svg slot="icon"></svg></md-fab>'
      );

      const clickHandler = vi.fn();
      fab.addEventListener('md-click', clickHandler);

      const innerButton = fab.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('emits md-click event on click', async () => {
      const fab = await createFab();

      const clickHandler = vi.fn();
      fab.addEventListener('md-click', clickHandler);

      const innerButton = fab.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('includes original event in detail', async () => {
      const fab = await createFab();

      let eventDetail: unknown;
      fab.addEventListener('md-click', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const innerButton = fab.shadowRoot!.querySelector('button')!;
      fireEvent.click(innerButton);

      expect(eventDetail).toHaveProperty('originalEvent');
    });
  });


  describe('accessibility', () => {
    it('forwards aria-label to inner button', async () => {
      const fab = await createFab(
        '<md-fab aria-label="Create new item"><svg slot="icon"></svg></md-fab>'
      );

      const innerButton = fab.shadowRoot!.querySelector('button');
      expect(innerButton).toHaveAttribute('aria-label', 'Create new item');
    });
  });
});
