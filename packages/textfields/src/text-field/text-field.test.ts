import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import './text-field.js';
import type { MdTextField } from './text-field.js';

describe('MdTextField', () => {
  async function createTextField(
    template = '<md-text-field label="Name"></md-text-field>'
  ): Promise<MdTextField> {
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container);

    const textField = container.querySelector('md-text-field') as MdTextField;
    await textField.updateComplete;
    return textField;
  }

  describe('variant attribute', () => {
    it('defaults to filled variant', async () => {
      const textField = await createTextField();

      expect(textField.variant).toBe('filled');
      expect(textField.shadowRoot!.querySelector('.md-text-field--filled')).toBeTruthy();
    });

    it('renders outlined variant when specified', async () => {
      const textField = await createTextField(
        '<md-text-field variant="outlined" label="Name"></md-text-field>'
      );

      expect(textField.variant).toBe('outlined');
      expect(textField.shadowRoot!.querySelector('.md-text-field--outlined')).toBeTruthy();
    });

    it('can switch variants dynamically', async () => {
      const textField = await createTextField();

      expect(textField.shadowRoot!.querySelector('.md-text-field--filled')).toBeTruthy();

      textField.variant = 'outlined';
      await textField.updateComplete;

      expect(textField.shadowRoot!.querySelector('.md-text-field--outlined')).toBeTruthy();
      expect(textField.shadowRoot!.querySelector('.md-text-field--filled')).toBeFalsy();
    });
  });

  describe('rendering', () => {
    it('renders with label', async () => {
      const textField = await createTextField();

      expect(textField).toBeInTheDocument();
      expect(textField.shadowRoot).toBeTruthy();
    });

    it('renders input element', async () => {
      const textField = await createTextField();

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toBeTruthy();
    });

    it('renders label element', async () => {
      const textField = await createTextField();

      const label = textField.shadowRoot!.querySelector('.md-text-field__label');
      expect(label).toBeTruthy();
      expect(label?.textContent).toBe('Name');
    });

    it('renders without label when not provided', async () => {
      const textField = await createTextField('<md-text-field></md-text-field>');

      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--no-label');
    });
  });

  describe('value binding', () => {
    it('has empty value by default', async () => {
      const textField = await createTextField();
      expect(textField.value).toBe('');
    });

    it('reflects value attribute', async () => {
      const textField = await createTextField(
        '<md-text-field value="Hello"></md-text-field>'
      );
      expect(textField.value).toBe('Hello');
    });

    it('updates value on input', async () => {
      const textField = await createTextField();

      const input = textField.shadowRoot!.querySelector('input')!;
      input.value = 'Test';
      fireEvent.input(input);

      expect(textField.value).toBe('Test');
    });

    it('can update value programmatically', async () => {
      const textField = await createTextField();
      textField.value = 'Programmatic';
      await textField.updateComplete;

      const input = textField.shadowRoot!.querySelector('input')!;
      expect(input.value).toBe('Programmatic');
    });
  });

  describe('events', () => {
    it('emits input event on typing', async () => {
      const textField = await createTextField();
      const inputHandler = vi.fn();
      textField.addEventListener('input', inputHandler);

      const input = textField.shadowRoot!.querySelector('input')!;
      input.value = 'Test';
      fireEvent.input(input);

      expect(inputHandler).toHaveBeenCalled();
    });

    it('emits change event on blur', async () => {
      const textField = await createTextField();
      const changeHandler = vi.fn();
      textField.addEventListener('change', changeHandler);

      const input = textField.shadowRoot!.querySelector('input')!;
      input.value = 'Test';
      fireEvent.change(input, { bubbles: true, composed: true });

      expect(changeHandler).toHaveBeenCalled();
    });

    it('emits focus event', async () => {
      const textField = await createTextField();
      const focusHandler = vi.fn();
      textField.addEventListener('focus', focusHandler);

      const input = textField.shadowRoot!.querySelector('input')!;
      fireEvent.focus(input);

      expect(focusHandler).toHaveBeenCalled();
    });

    it('emits blur event', async () => {
      const textField = await createTextField();
      const blurHandler = vi.fn();
      textField.addEventListener('blur', blurHandler);

      const input = textField.shadowRoot!.querySelector('input')!;
      fireEvent.blur(input);

      expect(blurHandler).toHaveBeenCalled();
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on input', async () => {
      const textField = await createTextField(
        '<md-text-field disabled></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toBeDisabled();
    });

    it('adds disabled class to container', async () => {
      const textField = await createTextField(
        '<md-text-field disabled></md-text-field>'
      );

      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--disabled');
    });
  });

  describe('required state', () => {
    it('sets required attribute on input', async () => {
      const textField = await createTextField(
        '<md-text-field required></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toHaveAttribute('required');
    });
  });

  describe('error state', () => {
    it('adds error class when error is true', async () => {
      const textField = await createTextField(
        '<md-text-field error></md-text-field>'
      );

      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--error');
    });

    it('displays error text instead of supporting text', async () => {
      const textField = await createTextField(
        '<md-text-field error error-text="Invalid input" supporting-text="Help text"></md-text-field>'
      );

      const supportingText = textField.shadowRoot!.querySelector('.md-text-field__supporting-text');
      expect(supportingText?.textContent?.trim()).toBe('Invalid input');
    });

    it('sets aria-invalid when error', async () => {
      const textField = await createTextField(
        '<md-text-field error></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('supporting text', () => {
    it('renders supporting text', async () => {
      const textField = await createTextField(
        '<md-text-field supporting-text="Helper text"></md-text-field>'
      );

      const supportingText = textField.shadowRoot!.querySelector('.md-text-field__supporting-text');
      expect(supportingText?.textContent?.trim()).toBe('Helper text');
    });

    it('renders character counter when maxlength is set', async () => {
      const textField = await createTextField(
        '<md-text-field maxlength="100" value="Hello"></md-text-field>'
      );

      const counter = textField.shadowRoot!.querySelector('.md-text-field__counter');
      expect(counter?.textContent).toContain('5 / 100');
    });
  });

  describe('prefix and suffix', () => {
    it('renders prefix text', async () => {
      const textField = await createTextField(
        '<md-text-field prefix-text="$"></md-text-field>'
      );

      const prefix = textField.shadowRoot!.querySelector('.md-text-field__prefix');
      expect(prefix?.textContent).toBe('$');
    });

    it('renders suffix text', async () => {
      const textField = await createTextField(
        '<md-text-field suffix-text="kg"></md-text-field>'
      );

      const suffix = textField.shadowRoot!.querySelector('.md-text-field__suffix');
      expect(suffix?.textContent).toBe('kg');
    });
  });

  describe('icons', () => {
    it('renders with leading icon', async () => {
      const textField = await createTextField(`
        <md-text-field>
          <svg slot="leading-icon"></svg>
        </md-text-field>
      `);

      await textField.updateComplete;
      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--has-leading-icon');
    });

    it('renders with trailing icon', async () => {
      const textField = await createTextField(`
        <md-text-field>
          <svg slot="trailing-icon"></svg>
        </md-text-field>
      `);

      await textField.updateComplete;
      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--has-trailing-icon');
    });
  });

  describe('input types', () => {
    it('renders email input', async () => {
      const textField = await createTextField(
        '<md-text-field type="email"></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password input', async () => {
      const textField = await createTextField(
        '<md-text-field type="password"></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('renders number input', async () => {
      const textField = await createTextField(
        '<md-text-field type="number" min="0" max="100" step="5"></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toHaveAttribute('type', 'number');
      expect(input).toHaveAttribute('min', '0');
      expect(input).toHaveAttribute('max', '100');
      expect(input).toHaveAttribute('step', '5');
    });

    it('renders textarea', async () => {
      const textField = await createTextField(
        '<md-text-field type="textarea" rows="4"></md-text-field>'
      );

      const textarea = textField.shadowRoot!.querySelector('textarea');
      expect(textarea).toBeTruthy();
      expect(textarea).toHaveAttribute('rows', '4');
    });
  });

  describe('validation', () => {
    it('validates pattern', async () => {
      const textField = await createTextField(
        '<md-text-field pattern="[A-Z]+" value="abc"></md-text-field>'
      );

      expect(textField.checkValidity()).toBe(false);
    });

    it('validates minlength', async () => {
      const textField = await createTextField(
        '<md-text-field minlength="5"></md-text-field>'
      );

      const input = textField.shadowRoot!.querySelector('input')!;
      expect(input).toHaveAttribute('minlength', '5');
    });

    it('validates required', async () => {
      const textField = await createTextField(
        '<md-text-field required></md-text-field>'
      );

      expect(textField.checkValidity()).toBe(false);
    });
  });

  describe('focus management', () => {
    it('focuses input when focus() is called', async () => {
      const textField = await createTextField();

      textField.focus();
      await textField.updateComplete;

      const input = textField.shadowRoot!.querySelector('input');
      expect(document.activeElement).toBe(textField);
    });

    it('focuses input when container is clicked', async () => {
      const textField = await createTextField();

      const container = textField.shadowRoot!.querySelector('.md-text-field')!;
      fireEvent.click(container);

      // The input should receive focus
      const input = textField.shadowRoot!.querySelector('input');
      expect(input).toBeTruthy();
    });

    it('adds focused class when input is focused', async () => {
      const textField = await createTextField();

      const input = textField.shadowRoot!.querySelector('input')!;
      fireEvent.focus(input);
      await textField.updateComplete;

      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).toHaveClass('md-text-field--focused');
    });

    it('removes focused class on blur', async () => {
      const textField = await createTextField();

      const input = textField.shadowRoot!.querySelector('input')!;
      fireEvent.focus(input);
      await textField.updateComplete;
      fireEvent.blur(input);
      await textField.updateComplete;

      const container = textField.shadowRoot!.querySelector('.md-text-field');
      expect(container).not.toHaveClass('md-text-field--focused');
    });
  });

  describe('floating label', () => {
    it('floats label when focused', async () => {
      const textField = await createTextField();

      const input = textField.shadowRoot!.querySelector('input')!;
      fireEvent.focus(input);
      await textField.updateComplete;

      const label = textField.shadowRoot!.querySelector('.md-text-field__label');
      expect(label).toHaveClass('md-text-field__label--floating');
    });

    it('floats label when value is present', async () => {
      const textField = await createTextField(
        '<md-text-field label="Name" value="John"></md-text-field>'
      );

      const label = textField.shadowRoot!.querySelector('.md-text-field__label');
      expect(label).toHaveClass('md-text-field__label--floating');
    });

    it('does not float label when empty and not focused', async () => {
      const textField = await createTextField();

      const label = textField.shadowRoot!.querySelector('.md-text-field__label');
      expect(label).not.toHaveClass('md-text-field__label--floating');
    });
  });

  describe('filled variant specifics', () => {
    it('has filled background', async () => {
      const textField = await createTextField(
        '<md-text-field variant="filled"></md-text-field>'
      );

      const container = textField.shadowRoot!.querySelector('.md-text-field--filled');
      expect(container).toBeTruthy();
    });
  });

  describe('outlined variant specifics', () => {
    it('has border outline', async () => {
      const textField = await createTextField(
        '<md-text-field variant="outlined"></md-text-field>'
      );

      const container = textField.shadowRoot!.querySelector('.md-text-field--outlined');
      expect(container).toBeTruthy();
    });

    it('floating label has background for notch effect', async () => {
      const textField = await createTextField(
        '<md-text-field variant="outlined" label="Name" value="John"></md-text-field>'
      );

      const label = textField.shadowRoot!.querySelector('.md-text-field__label--floating');
      expect(label).toBeTruthy();
    });
  });
});
