import tokensCSS from './tokens.css?inline';
import { adoptStyles } from '../styles/style-manager.js';

export const tokensStyleSheet = adoptStyles(tokensCSS);
export { tokensCSS };
