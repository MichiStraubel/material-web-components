import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './fab-menu.js';
import './fab-menu-item.js';
import type { MdFabMenu } from './fab-menu.js';

describe('MdFabMenu', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  async function createFabMenu(
    template = `
      <md-fab-menu aria-label="Create menu">
        <md-fab-menu-item value="photo" label="Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
      </md-fab-menu>
    `
  ): Promise<MdFabMenu> {
    container.innerHTML = template;
    const fabMenu = container.querySelector('md-fab-menu') as MdFabMenu;
    await fabMenu.updateComplete;
    // Wait for menu items to be ready
    await new Promise(resolve => setTimeout(resolve, 0));
    return fabMenu;
  }

  describe('rendering', () => {
    it('renders with slot content', async () => {
      const fabMenu = await createFabMenu();

      expect(fabMenu).toBeInTheDocument();
      expect(fabMenu.shadowRoot).toBeTruthy();
      expect(fabMenu.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders menu container', async () => {
      const fabMenu = await createFabMenu();

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toBeTruthy();
    });

    it('renders with primary variant by default', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--primary');
    });

    it('renders with surface variant', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu variant="surface" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--surface');
    });

    it('renders with secondary variant', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu variant="secondary" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--secondary');
    });

    it('renders with tertiary variant', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu variant="tertiary" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--tertiary');
    });
  });

  describe('sizes', () => {
    it('renders with medium size by default', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--medium');
    });

    it('renders with small size', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu size="small" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--small');
    });

    it('renders with large size', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu size="large" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--large');
    });
  });

  describe('menu alignment', () => {
    it('renders with end alignment by default', async () => {
      const fabMenu = await createFabMenu();

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--end');
    });

    it('renders with start alignment', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu alignment="start" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--start');
    });

    it('renders with center alignment', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu alignment="center" aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--center');
    });
  });

  describe('lowered mode', () => {
    it('does not have lowered class by default', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).not.toHaveClass('md-fab-menu__fab--lowered');
    });

    it('renders with lowered class when enabled', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu lowered aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveClass('md-fab-menu__fab--lowered');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on FAB button', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu disabled aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toBeDisabled();
    });

    it('does not open menu when disabled', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu disabled aria-label="Menu">
          <md-fab-menu-item value="a" label="A">icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const openHandler = vi.fn();
      fabMenu.addEventListener('md-open', openHandler);

      const fab = fabMenu.shadowRoot!.querySelector('button')!;
      fireEvent.click(fab);

      expect(openHandler).not.toHaveBeenCalled();
    });
  });

  describe('open/close behavior', () => {
    it('is closed by default', async () => {
      const fabMenu = await createFabMenu();

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('opens on FAB click', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button')!;
      fireEvent.click(fab);
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--open');
    });

    it('closes on second FAB click', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button')!;
      fireEvent.click(fab); // open
      await fabMenu.updateComplete;
      fireEvent.click(fab); // close
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('adds expanded class to FAB when open', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button')!;
      fireEvent.click(fab);
      await fabMenu.updateComplete;

      expect(fab).toHaveClass('md-fab-menu__fab--expanded');
    });

    it('public open() method works', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--open');
    });

    it('public close() method works', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;
      fabMenu.close();
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('public toggle() method works', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.toggle();
      await fabMenu.updateComplete;
      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--open');

      fabMenu.toggle();
      await fabMenu.updateComplete;
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('closes on ESC key', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      fireEvent.keyDown(document, { key: 'Escape' });
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('closes on outside click', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      // Create and click an element outside the fab menu
      const outside = document.createElement('div');
      document.body.appendChild(outside);
      fireEvent.click(outside);
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');

      outside.remove();
    });
  });

  describe('events', () => {
    it('emits md-open event when opening', async () => {
      const fabMenu = await createFabMenu();

      const openHandler = vi.fn();
      fabMenu.addEventListener('md-open', openHandler);

      const fab = fabMenu.shadowRoot!.querySelector('button')!;
      fireEvent.click(fab);

      expect(openHandler).toHaveBeenCalledTimes(1);
    });

    it('emits md-close event when closing', async () => {
      const fabMenu = await createFabMenu();

      const closeHandler = vi.fn();
      fabMenu.addEventListener('md-close', closeHandler);

      fabMenu.open();
      await fabMenu.updateComplete;
      fabMenu.close();

      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('emits md-item-click event when menu item is clicked', async () => {
      const fabMenu = await createFabMenu();

      const itemClickHandler = vi.fn();
      fabMenu.addEventListener('md-item-click', itemClickHandler);

      fabMenu.open();
      await fabMenu.updateComplete;

      const menuItem = container.querySelector('md-fab-menu-item')!;
      fireEvent.click(menuItem);

      expect(itemClickHandler).toHaveBeenCalledTimes(1);
    });

    it('includes value and label in md-item-click event detail', async () => {
      const fabMenu = await createFabMenu();

      let eventDetail: { value: string; label: string } | undefined;
      fabMenu.addEventListener('md-item-click', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      fabMenu.open();
      await fabMenu.updateComplete;

      const menuItem = container.querySelector('md-fab-menu-item')!;
      fireEvent.click(menuItem);

      expect(eventDetail?.value).toBe('photo');
      expect(eventDetail?.label).toBe('Photo');
    });

    it('closes menu after item click (MD3 spec)', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      const menuItem = container.querySelector('md-fab-menu-item')!;
      fireEvent.click(menuItem);
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).not.toHaveClass('md-fab-menu__menu--open');
    });

    it('does not close menu when disabled item is clicked', async () => {
      const fabMenu = await createFabMenu(`
        <md-fab-menu aria-label="Menu">
          <md-fab-menu-item value="a" label="A" disabled>icon</md-fab-menu-item>
          <md-fab-menu-item value="b" label="B">icon</md-fab-menu-item>
        </md-fab-menu>
      `);

      const itemClickHandler = vi.fn();
      fabMenu.addEventListener('md-item-click', itemClickHandler);

      fabMenu.open();
      await fabMenu.updateComplete;

      const disabledItem = container.querySelector('md-fab-menu-item[disabled]')!;
      fireEvent.click(disabledItem);
      await fabMenu.updateComplete;

      // Menu should still be open
      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveClass('md-fab-menu__menu--open');
      // Event should not be emitted
      expect(itemClickHandler).not.toHaveBeenCalled();
    });

    it('emits md-close after md-item-click', async () => {
      const fabMenu = await createFabMenu();

      const events: string[] = [];
      fabMenu.addEventListener('md-item-click', () => events.push('item-click'));
      fabMenu.addEventListener('md-close', () => events.push('close'));

      fabMenu.open();
      await fabMenu.updateComplete;

      const menuItem = container.querySelector('md-fab-menu-item')!;
      fireEvent.click(menuItem);

      expect(events).toEqual(['item-click', 'close']);
    });
  });

  describe('accessibility', () => {
    it('has aria-expanded attribute', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates aria-expanded when opened', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveAttribute('aria-expanded', 'true');
    });

    it('has aria-haspopup attribute', async () => {
      const fabMenu = await createFabMenu();

      const fab = fabMenu.shadowRoot!.querySelector('button');
      expect(fab).toHaveAttribute('aria-haspopup', 'menu');
    });

    it('menu has role="menu"', async () => {
      const fabMenu = await createFabMenu();

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toBeTruthy();
    });

    it('menu has aria-hidden when closed', async () => {
      const fabMenu = await createFabMenu();

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveAttribute('aria-hidden', 'true');
    });

    it('menu has aria-hidden=false when open', async () => {
      const fabMenu = await createFabMenu();

      fabMenu.open();
      await fabMenu.updateComplete;

      const menu = fabMenu.shadowRoot!.querySelector('[role="menu"]');
      expect(menu).toHaveAttribute('aria-hidden', 'false');
    });
  });
});

describe('MdFabMenuItem', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  async function createMenuItem(
    template = `<md-fab-menu-item value="test" label="Test">icon</md-fab-menu-item>`
  ) {
    container.innerHTML = template;
    const item = container.querySelector('md-fab-menu-item')!;
    await (item as { updateComplete: Promise<void> }).updateComplete;
    return item;
  }

  describe('rendering', () => {
    it('renders with button element', async () => {
      const item = await createMenuItem();

      expect(item.shadowRoot!.querySelector('button')).toBeTruthy();
    });

    it('renders with menuitem role', async () => {
      const item = await createMenuItem();

      const button = item.shadowRoot!.querySelector('button');
      expect(button).toHaveAttribute('role', 'menuitem');
    });

    it('displays label', async () => {
      const item = await createMenuItem();

      const label = item.shadowRoot!.querySelector('.md-fab-menu-item__label');
      expect(label?.textContent?.trim()).toBe('Test');
    });

    it('has with-label class when label is provided', async () => {
      const item = await createMenuItem();

      const button = item.shadowRoot!.querySelector('button');
      expect(button).toHaveClass('md-fab-menu-item--with-label');
    });

    it('does not have with-label class when no label', async () => {
      const item = await createMenuItem(
        `<md-fab-menu-item value="test">icon</md-fab-menu-item>`
      );

      const button = item.shadowRoot!.querySelector('button');
      expect(button).not.toHaveClass('md-fab-menu-item--with-label');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on button', async () => {
      const item = await createMenuItem(
        `<md-fab-menu-item value="test" label="Test" disabled>icon</md-fab-menu-item>`
      );

      const button = item.shadowRoot!.querySelector('button');
      expect(button).toBeDisabled();
    });

    it('has disabled class', async () => {
      const item = await createMenuItem(
        `<md-fab-menu-item value="test" label="Test" disabled>icon</md-fab-menu-item>`
      );

      const button = item.shadowRoot!.querySelector('button');
      expect(button).toHaveClass('md-fab-menu-item--disabled');
    });
  });
});
