import '@testing-library/jest-dom/vitest';

// Polyfill for Adopted StyleSheets in jsdom
if (typeof CSSStyleSheet !== 'undefined' && !('replaceSync' in CSSStyleSheet.prototype)) {
  CSSStyleSheet.prototype.replaceSync = function (cssText: string) {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);
    return this;
  };
}

// Polyfill adoptedStyleSheets for jsdom
if (typeof document !== 'undefined' && !('adoptedStyleSheets' in document)) {
  Object.defineProperty(document, 'adoptedStyleSheets', {
    value: [],
    writable: true,
  });
}

// Polyfill for ShadowRoot adoptedStyleSheets
const originalAttachShadow = Element.prototype.attachShadow;
Element.prototype.attachShadow = function (init: ShadowRootInit): ShadowRoot {
  const shadowRoot = originalAttachShadow.call(this, init);
  if (!('adoptedStyleSheets' in shadowRoot)) {
    Object.defineProperty(shadowRoot, 'adoptedStyleSheets', {
      value: [],
      writable: true,
    });
  }
  return shadowRoot;
};

// Clean up DOM after each test
afterEach(() => {
  document.body.innerHTML = '';
});
