import type { Preview } from '@storybook/web-components-vite';
import { tokensCSS } from '@material-wc/core';

// Load Material Symbols font
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';
document.head.appendChild(fontLink);

// Inject MD3 tokens globally
const style = document.createElement('style');
style.textContent = tokensCSS;
document.head.appendChild(style);

// Add Material Symbols base styles
const symbolsStyle = document.createElement('style');
symbolsStyle.textContent = `
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';
}
`;
document.head.appendChild(symbolsStyle);

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
