import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import navSectionStyles from './nav-section.css?inline';

/**
 * Material Design 3 Navigation Section Component
 *
 * Groups navigation items with an optional label.
 * Use this component inside md-app-layout's nav slot for static section-based navigation.
 *
 * @element md-nav-section
 *
 * @slot - Default slot for md-nav-item elements
 *
 * @csspart section - The section container
 * @csspart label - The section label
 *
 * @example
 * ```html
 * <md-app-layout>
 *   <md-nav-item slot="nav" value="home" label="Home" icon="home"></md-nav-item>
 *   <md-nav-section slot="nav" label="Library">
 *     <md-nav-item value="music" label="Music" icon="music_note"></md-nav-item>
 *     <md-nav-item value="videos" label="Videos" icon="video_library"></md-nav-item>
 *   </md-nav-section>
 * </md-app-layout>
 * ```
 */
@customElement('md-nav-section')
export class MdNavSection extends MdElement {
  static override styles = [adoptStyles(navSectionStyles)];

  /**
   * Optional label displayed above the section items.
   */
  @property({ type: String })
  label?: string;

  protected override render(): TemplateResult {
    return html`
      <div class="nav-section" part="section">
        ${this.label ? html`
          <div class="nav-section__label" part="label">${this.label}</div>
        ` : null}
        <div class="nav-section__items">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-nav-section': MdNavSection;
  }
}
