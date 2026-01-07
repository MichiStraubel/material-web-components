/**
 * StyleManager handles the creation and caching of CSSStyleSheets
 * for use with Adopted StyleSheets in Shadow DOM.
 */
export class StyleManager {
  private static styleSheets = new Map<string, CSSStyleSheet>();

  /**
   * Gets or creates a CSSStyleSheet from CSS string.
   * Sheets are cached by a hash of the CSS content.
   */
  static getStyleSheet(css: string): CSSStyleSheet {
    const key = this.hashCode(css);

    if (!this.styleSheets.has(key)) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      this.styleSheets.set(key, sheet);
    }

    return this.styleSheets.get(key)!;
  }

  /**
   * Creates a simple hash code from a string for caching purposes.
   */
  private static hashCode(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString(36);
  }

  /**
   * Clears the style sheet cache.
   * Useful for testing or hot module replacement.
   */
  static clearCache(): void {
    this.styleSheets.clear();
  }
}

/**
 * Helper function to convert CSS string to a CSSStyleSheet.
 * Uses the StyleManager for caching.
 */
export function adoptStyles(css: string): CSSStyleSheet {
  return StyleManager.getStyleSheet(css);
}
