import type { Preview } from '@storybook/web-components';
import { tokensCSS } from '@material-wc/core';

// Inject MD3 tokens globally
const style = document.createElement('style');
style.textContent = tokensCSS;
document.head.appendChild(style);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#fffbfe' },
        { name: 'surface-variant', value: '#e7e0ec' },
        { name: 'dark', value: '#1c1b1f' },
      ],
    },
  },
};

export default preview;
