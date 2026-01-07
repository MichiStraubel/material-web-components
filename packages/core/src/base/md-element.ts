import { LitElement } from 'lit';

/**
 * Base class for all Material Web Components.
 * Provides closed Shadow DOM by default with test mode support.
 */
export abstract class MdElement extends LitElement {
  /**
   * Shadow DOM options.
   * Uses 'closed' mode in production, 'open' in test mode for testing access.
   */
  static override shadowRootOptions: ShadowRootInit = {
    mode: import.meta.env.MODE === 'test' ? 'open' : 'closed',
    delegatesFocus: true,
  };

  /** Reference to the shadow root for internal use */
  protected _shadowRoot: ShadowRoot | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this._shadowRoot = this.shadowRoot;
  }

  /**
   * Emits a custom event with standard options.
   * Events are bubbling, composed (cross shadow boundaries), and cancelable.
   */
  protected emit<T>(name: string, detail?: T): boolean {
    const event = new CustomEvent(name, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail,
    });
    return this.dispatchEvent(event);
  }

  /**
   * Helper to query an element in the shadow root.
   * Works with closed shadow DOM by using the stored reference.
   */
  protected query<T extends Element>(selector: string): T | null {
    return this._shadowRoot?.querySelector<T>(selector) ?? null;
  }

  /**
   * Helper to query all elements in the shadow root.
   */
  protected queryAll<T extends Element>(selector: string): NodeListOf<T> | null {
    return this._shadowRoot?.querySelectorAll<T>(selector) ?? null;
  }
}
