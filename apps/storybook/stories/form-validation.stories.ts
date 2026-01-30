import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Schema } from '@effect/schema';
import { Either } from 'effect';

import '../../../packages/textfields/src/text-field/text-field.js';
import '../../../packages/buttons/src/button/button.js';

const meta: Meta = {
  title: 'Examples/Form Validation with Effect Schema',
};

export default meta;

// Validation schemas
const EmailSchema = Schema.String.pipe(
  Schema.nonEmptyString({ message: () => 'Email is required' }),
  Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: () => 'Please enter a valid email address',
  })
);

const PasswordSchema = Schema.String.pipe(
  Schema.nonEmptyString({ message: () => 'Password is required' }),
  Schema.minLength(8, { message: () => 'Password must be at least 8 characters' })
);

function validateField(schema: Schema.Schema<string, string>, value: string): string | null {
  const decode = Schema.decodeUnknownEither(schema);
  const result = decode(value);

  if (Either.isLeft(result)) {
    const issue = result.left.issue;
    if ('message' in issue && typeof issue.message === 'string') {
      return issue.message;
    }
    return 'Invalid';
  }
  return null;
}

type TextField = HTMLElement & {
  error: boolean;
  errorText: string;
  value: string;
};

const sourceCode = `import { Schema } from '@effect/schema';
import { Either } from 'effect';

// Validation schemas
const EmailSchema = Schema.String.pipe(
  Schema.nonEmptyString({ message: () => 'Email is required' }),
  Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, {
    message: () => 'Please enter a valid email address',
  })
);

const PasswordSchema = Schema.String.pipe(
  Schema.nonEmptyString({ message: () => 'Password is required' }),
  Schema.minLength(8, { message: () => 'Password must be at least 8 characters' })
);

function validateField(schema, value) {
  const decode = Schema.decodeUnknownEither(schema);
  const result = decode(value);

  if (Either.isLeft(result)) {
    const issue = result.left.issue;
    if ('message' in issue && typeof issue.message === 'string') {
      return issue.message;
    }
    return 'Invalid';
  }
  return null;
}

// Get references to form elements
const emailField = document.querySelector('#email-field');
const passwordField = document.querySelector('#password-field');
const confirmField = document.querySelector('#confirm-field');
const submitButton = document.querySelector('#submit-button');

// Update button state based on validation
const updateButtonState = () => {
  const hasErrors =
    emailField.error ||
    passwordField.error ||
    confirmField.error ||
    !emailField.value ||
    !passwordField.value ||
    !confirmField.value;
  submitButton.disabled = hasErrors;
};

// Email validation
emailField.addEventListener('input', () => {
  const error = validateField(EmailSchema, emailField.value);
  emailField.error = !!error;
  emailField.errorText = error ?? '';
  updateButtonState();
});

// Password validation
passwordField.addEventListener('input', () => {
  const error = validateField(PasswordSchema, passwordField.value);
  passwordField.error = !!error;
  passwordField.errorText = error ?? '';
  // Re-validate confirm field when password changes
  if (confirmField.value) {
    const confirmError =
      confirmField.value !== passwordField.value ? 'Passwords do not match' : null;
    confirmField.error = !!confirmError;
    confirmField.errorText = confirmError ?? '';
  }
  updateButtonState();
});

// Confirm password validation
confirmField.addEventListener('input', () => {
  const error =
    confirmField.value !== passwordField.value ? 'Passwords do not match' : null;
  confirmField.error = !!error;
  confirmField.errorText = error ?? '';
  updateButtonState();
});
`;

export const RegistrationForm: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: sourceCode,
        language: 'typescript',
      },
    },
  },
  render: () => {
    const containerId = 'registration-form-' + Math.random().toString(36).slice(2, 9);

    requestAnimationFrame(() => {
      const container = document.getElementById(containerId);
      if (!container || container.dataset.validationSetup) return;
      container.dataset.validationSetup = 'true';

      const emailField = container.querySelector<TextField>('#email-field');
      const passwordField = container.querySelector<TextField>('#password-field');
      const confirmField = container.querySelector<TextField>('#confirm-field');
      const submitButton = container.querySelector<HTMLButtonElement>('#submit-button');
      const resultDiv = container.querySelector<HTMLElement>('#result');

      if (!emailField || !passwordField || !confirmField || !submitButton || !resultDiv) return;

      const updateButtonState = () => {
        const hasErrors =
          emailField.error ||
          passwordField.error ||
          confirmField.error ||
          !emailField.value ||
          !passwordField.value ||
          !confirmField.value;
        submitButton.disabled = hasErrors;
      };

      // Stop keydown events from propagating to Storybook (prevents shortcut conflicts)
      const stopPropagation = (e: Event) => e.stopPropagation();
      emailField.addEventListener('keydown', stopPropagation);
      passwordField.addEventListener('keydown', stopPropagation);
      confirmField.addEventListener('keydown', stopPropagation);

      emailField.addEventListener('input', () => {
        const error = validateField(EmailSchema, emailField.value);
        emailField.error = !!error;
        emailField.errorText = error ?? '';
        updateButtonState();
      });

      passwordField.addEventListener('input', () => {
        const error = validateField(PasswordSchema, passwordField.value);
        passwordField.error = !!error;
        passwordField.errorText = error ?? '';
        if (confirmField.value) {
          const confirmError =
            confirmField.value !== passwordField.value ? 'Passwords do not match' : null;
          confirmField.error = !!confirmError;
          confirmField.errorText = confirmError ?? '';
        }
        updateButtonState();
      });

      confirmField.addEventListener('input', () => {
        const error =
          confirmField.value !== passwordField.value ? 'Passwords do not match' : null;
        confirmField.error = !!error;
        confirmField.errorText = error ?? '';
        updateButtonState();
      });

      submitButton.addEventListener('click', () => {
        resultDiv.textContent = `Registration successful for: ${emailField.value}`;
        resultDiv.style.display = 'block';
      });
    });

    return html`
      <div
        id=${containerId}
        style="display: flex; flex-direction: column; gap: 16px; max-width: 360px;"
      >
        <h3 style="margin: 0;">Registration Form</h3>
        <md-text-field
          id="email-field"
          label="Email"
          type="email"
        ></md-text-field>
        <md-text-field
          id="password-field"
          label="Password"
          type="password"
          supporting-text="At least 8 characters"
        ></md-text-field>
        <md-text-field
          id="confirm-field"
          label="Confirm Password"
          type="password"
        ></md-text-field>
        <md-button
          id="submit-button"
          variant="filled"
          disabled
        >
          Register
        </md-button>
        <div
          id="result"
          style="display: none; padding: 12px; border-radius: 8px; background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container);"
        ></div>
      </div>
    `;
  },
};
