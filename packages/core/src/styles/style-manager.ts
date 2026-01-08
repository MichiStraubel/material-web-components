/**
 * Cache for CSSStyleSheets, keyed by CSS string.
 * Module-level constant - created once when module is loaded.
 */
const styleSheetCache = new Map<string, CSSStyleSheet>();

/**
 * Converts a CSS string to a CSSStyleSheet with caching.
 * Since CSS strings come from static module imports, the same
 * string reference is reused, making lookups fast.
 */
export function adoptStyles(css: string): CSSStyleSheet {
  let sheet = styleSheetCache.get(css);

  if (!sheet) {
    sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    styleSheetCache.set(css, sheet);
  }

  return sheet;
}

/**
 * Clears the stylesheet cache. Useful for testing or HMR.
 */
export function clearStyleCache(): void {
  styleSheetCache.clear();
}
