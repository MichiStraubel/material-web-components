import{e as me,i as fe,t as p,r as xe,E as x,A as ue,p as he,a as ge,n,M as be,b as i,c as f,d as ye}from"./iframe-B-rN3J9a.js";import{e as ve,r as I,o as l}from"./if-defined-BemFOqvn.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(e,r){return(o,d,s)=>{const c=m=>{var S;return((S=m.renderRoot)==null?void 0:S.querySelector(e))??null};return ve(o,d,{get(){return c(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=me(class extends fe{constructor(e){if(super(e),e.type!==p.PROPERTY&&e.type!==p.ATTRIBUTE&&e.type!==p.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===x||r===ue)return r;const o=e.element,d=e.name;if(e.type===p.PROPERTY){if(r===o[d])return x}else if(e.type===p.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(d))return x}else if(e.type===p.ATTRIBUTE&&o.getAttribute(d)===r+"")return x;return he(e),r}}),_e='@layer properties;@layer theme,base,components,utilities;@layer theme{:host,:root{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:1.33333;--text-sm:.875rem;--text-sm--line-height:1.42857;--text-base:1rem;--text-base--line-height:1.5;--text-lg:1.125rem;--text-lg--line-height:1.55556;--font-weight-medium:500;--radius-xs:4px;--radius-sm:8px;--radius-md:12px;--radius-lg:16px;--radius-xl:28px;--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:#6750a4;--color-on-primary:#fff;--color-primary-container:#eaddff;--color-on-primary-container:#21005d;--color-primary-hover:#7965af;--color-primary-pressed:#5c4799;--color-secondary:#625b71;--color-on-secondary:#fff;--color-secondary-container:#e8def8;--color-on-secondary-container:#1d192b;--color-tertiary:#7d5260;--color-on-tertiary:#fff;--color-tertiary-container:#ffd8e4;--color-on-tertiary-container:#31111d;--color-error:#b3261e;--color-on-error:#fff;--color-error-container:#f9dedc;--color-on-error-container:#410e0b;--color-surface:#fffbfe;--color-on-surface:#1c1b1f;--color-surface-variant:#e7e0ec;--color-on-surface-variant:#49454f;--color-surface-dim:#ded8e1;--color-surface-bright:#fffbfe;--color-surface-container-lowest:#fff;--color-surface-container-low:#f7f2fa;--color-surface-container:#f3edf7;--color-surface-container-high:#ece6f0;--color-surface-container-highest:#e6e0e9;--color-outline:#79747e;--color-outline-variant:#cac4d0;--color-inverse-surface:#313033;--color-inverse-on-surface:#f4eff4;--color-inverse-primary:#d0bcff;--color-scrim:#000;--color-shadow:#000;--shadow-elevation-1:0 1px 2px rgba(0,0,0,.3),0 1px 3px 1px rgba(0,0,0,.15);--shadow-elevation-2:0 1px 2px rgba(0,0,0,.3),0 2px 6px 2px rgba(0,0,0,.15);--shadow-elevation-3:0 4px 8px 3px rgba(0,0,0,.15),0 1px 3px rgba(0,0,0,.3);--shadow-elevation-4:0 6px 10px 4px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.3);--shadow-elevation-5:0 8px 12px 6px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.3);--radius-none:0;--radius-18:18px;--radius-20:20px;--radius-24:24px;--radius-full:9999px;--duration-short-1:50ms;--duration-short-2:.1s;--duration-short-3:.15s;--duration-short-4:.2s;--duration-medium-1:.25s;--duration-medium-2:.3s;--duration-medium-3:.35s;--duration-medium-4:.4s;--duration-long-1:.45s;--duration-long-2:.5s;--duration-long-3:.55s;--duration-long-4:.6s;--easing-standard:cubic-bezier(.2,0,0,1);--easing-standard-decelerate:cubic-bezier(0,0,0,1);--easing-standard-accelerate:cubic-bezier(.3,0,1,1);--easing-emphasized:cubic-bezier(.2,0,0,1);--easing-emphasized-decelerate:cubic-bezier(.05,.7,.1,1);--easing-emphasized-accelerate:cubic-bezier(.3,0,.8,.15);--font-family-brand:"Roboto",sans-serif;--font-family-plain:"Roboto",sans-serif;--text-display-lg:400 57px/64px var(--font-family-brand);--text-display-md:400 45px/52px var(--font-family-brand);--text-display-sm:400 36px/44px var(--font-family-brand);--text-headline-lg:400 32px/40px var(--font-family-brand);--text-headline-md:400 28px/36px var(--font-family-brand);--text-headline-sm:400 24px/32px var(--font-family-brand);--text-title-lg:400 22px/28px var(--font-family-brand);--text-title-md:500 16px/24px var(--font-family-brand);--text-title-sm:500 14px/20px var(--font-family-brand);--text-body-lg:400 16px/24px var(--font-family-plain);--text-body-md:400 14px/20px var(--font-family-plain);--text-body-sm:400 12px/16px var(--font-family-plain);--text-label-lg:500 14px/20px var(--font-family-plain);--text-label-md:500 12px/16px var(--font-family-plain);--text-label-sm:500 11px/16px var(--font-family-plain);--state-hover-opacity:.08;--state-focus-opacity:.12;--state-pressed-opacity:.12;--state-dragged-opacity:.16;--state-disabled-opacity:.38;--spacing-none:0;--spacing-xs:4px;--spacing-sm:8px;--spacing-md:12px;--spacing-lg:16px;--spacing-xl:24px;--spacing-2xl:32px;--spacing-3xl:48px;--size-icon-sm:18px;--size-icon-md:24px;--size-icon-lg:36px;--size-button-height-xs:32px;--size-button-height-sm:36px;--size-button-height-md:40px;--size-button-height-lg:48px;--size-button-height-xl:56px;--size-fab-sm:40px;--size-fab-md:56px;--size-fab-lg:96px;--size-tap-target:48px}}@layer base{*,::backdrop,::file-selector-button,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}::file-selector-button,button,input,optgroup,select,textarea{background-color:transparent;border-radius:0;color:inherit;font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentcolor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}::placeholder{color:currentcolor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}::file-selector-button,button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.isolate{isolation:isolate}.float-left{float:left}.float-right{float:right}.\\!container{width:100%!important}@media(min-width:40rem){.\\!container{max-width:40rem!important}}@media(min-width:48rem){.\\!container{max-width:48rem!important}}@media(min-width:64rem){.\\!container{max-width:64rem!important}}@media(min-width:80rem){.\\!container{max-width:80rem!important}}@media(min-width:96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.table{display:table}.table-row{display:table-row}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)!important}.resize{resize:both}.flex-wrap{flex-wrap:wrap}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.bg-transparent{background-color:transparent}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.text-wrap{text-wrap:wrap}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal}.ordinal,.tabular-nums{font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.ring,.shadow{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px)}.blur,.grayscale{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%)}.invert{--tw-invert:invert(100%)}.filter,.invert{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.transition{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-colors{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.select-all{-webkit-user-select:all;-moz-user-select:all;user-select:all}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}}:host{display:inline-flex;flex-direction:column;min-width:112px;width:280px}:host([disabled]){pointer-events:none}.md-text-field{align-items:center;cursor:text;display:flex;min-height:56px;position:relative}.md-text-field--textarea{align-items:flex-start;min-height:auto}.md-text-field__input{flex:1;height:100%;width:100%;--tw-border-style:none;background-color:transparent;border-style:none;--tw-outline-style:none;caret-color:var(--color-primary);color:var(--color-on-surface);font:var(--text-body-lg);outline-style:none;padding:0}.md-text-field__input::-moz-placeholder{color:var(--color-on-surface-variant);opacity:0;-moz-transition:opacity var(--duration-short-2) var(--easing-standard);transition:opacity var(--duration-short-2) var(--easing-standard)}.md-text-field__input::placeholder{color:var(--color-on-surface-variant);opacity:0;transition:opacity var(--duration-short-2) var(--easing-standard)}.md-text-field--focused .md-text-field__input::-moz-placeholder{opacity:1}.md-text-field--focused .md-text-field__input::placeholder{opacity:1}.md-text-field__input:disabled{color:color-mix(in srgb,#1c1b1f 38%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field__input:disabled{color:color-mix(in srgb,var(--color-on-surface) 38%,transparent)}}textarea.md-text-field__input{min-height:80px;resize:vertical}.md-text-field__input[type=number]::-webkit-inner-spin-button,.md-text-field__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.md-text-field__input[type=number]{-moz-appearance:textfield}.md-text-field__label{color:var(--color-on-surface-variant);font:var(--text-body-lg);pointer-events:none;position:absolute;transform-origin:left top;transition:all var(--duration-short-2) var(--easing-standard)}.md-text-field__label--floating{font:var(--text-body-sm)}.md-text-field__label--error{color:var(--color-error)}.md-text-field--focused .md-text-field__label{color:var(--color-primary)}.md-text-field--focused .md-text-field__label--error{color:var(--color-error)}.md-text-field__prefix,.md-text-field__suffix{color:var(--color-on-surface-variant);font:var(--text-body-lg);white-space:nowrap}.md-text-field__prefix{margin-right:var(--spacing-xs)}.md-text-field__suffix{margin-left:var(--spacing-xs)}.md-text-field__leading-icon,.md-text-field__trailing-icon{align-items:center;color:var(--color-on-surface-variant);display:flex;height:var(--size-icon-md);justify-content:center;width:var(--size-icon-md)}.md-text-field__leading-icon{margin-right:var(--spacing-lg)}.md-text-field__trailing-icon{margin-left:var(--spacing-lg)}.md-text-field__leading-icon[hidden],.md-text-field__trailing-icon[hidden]{display:none}.md-text-field__leading-icon ::slotted(*),.md-text-field__trailing-icon ::slotted(*){height:var(--size-icon-md);width:var(--size-icon-md)}.md-text-field--error .md-text-field__trailing-icon{color:var(--color-error)}.md-text-field__supporting{color:var(--color-on-surface-variant);display:flex;font:var(--text-body-sm);justify-content:space-between;padding:var(--spacing-xs) var(--spacing-lg) 0}.md-text-field__supporting--error{color:var(--color-error)}.md-text-field__supporting-text{flex:1}.md-text-field__counter{margin-left:var(--spacing-lg);white-space:nowrap}.md-text-field--disabled{pointer-events:none}.md-text-field--disabled .md-text-field__label{color:color-mix(in srgb,#1c1b1f 38%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--disabled .md-text-field__label{color:color-mix(in srgb,var(--color-on-surface) 38%,transparent)}}.md-text-field--disabled .md-text-field__prefix,.md-text-field--disabled .md-text-field__suffix{color:color-mix(in srgb,#1c1b1f 38%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--disabled .md-text-field__prefix,.md-text-field--disabled .md-text-field__suffix{color:color-mix(in srgb,var(--color-on-surface) 38%,transparent)}}.md-text-field--disabled .md-text-field__leading-icon,.md-text-field--disabled .md-text-field__trailing-icon{color:color-mix(in srgb,#1c1b1f 38%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--disabled .md-text-field__leading-icon,.md-text-field--disabled .md-text-field__trailing-icon{color:color-mix(in srgb,var(--color-on-surface) 38%,transparent)}}.md-text-field__input-wrapper{align-items:center;display:flex;flex:1;min-width:0}.md-text-field:focus-within{outline:none}.md-text-field--filled{background-color:var(--color-surface-container-highest);border-radius:var(--radius-xs) var(--radius-xs) 0 0;padding:0 var(--spacing-lg)}.md-text-field--filled.md-text-field--has-leading-icon{padding-left:var(--spacing-md)}.md-text-field--filled.md-text-field--has-trailing-icon{padding-right:var(--spacing-md)}.md-text-field--filled:after{background-color:var(--color-on-surface-variant);bottom:calc(var(--spacing)*0);content:"";height:1px;left:calc(var(--spacing)*0);position:absolute;right:calc(var(--spacing)*0);transition:all var(--duration-short-2) var(--easing-standard)}.md-text-field--filled.md-text-field--focused:after{background-color:var(--color-primary);height:2px}.md-text-field--filled.md-text-field--error:after{background-color:var(--color-error)}.md-text-field--filled.md-text-field--error.md-text-field--focused:after{background-color:var(--color-error);height:2px}.md-text-field--filled.md-text-field--disabled{background-color:color-mix(in srgb,#1c1b1f 4%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--filled.md-text-field--disabled{background-color:color-mix(in srgb,var(--color-on-surface) 4%,transparent)}}.md-text-field--filled.md-text-field--disabled:after{background-color:color-mix(in srgb,#1c1b1f 38%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--filled.md-text-field--disabled:after{background-color:color-mix(in srgb,var(--color-on-surface) 38%,transparent)}}.md-text-field--filled .md-text-field__label{left:var(--spacing-lg);top:50%;transform:translateY(-50%)}.md-text-field--filled.md-text-field--has-leading-icon .md-text-field__label{left:calc(var(--spacing-md) + var(--size-icon-md) + var(--spacing-lg))}.md-text-field--filled .md-text-field__label--floating{top:8px;transform:translateY(0)}.md-text-field--filled .md-text-field__input-wrapper{padding-bottom:8px;padding-top:24px}.md-text-field--filled.md-text-field--no-label .md-text-field__input-wrapper{padding-bottom:16px;padding-top:16px}.md-text-field--filled.md-text-field--textarea{padding-bottom:var(--spacing-sm);padding-top:var(--spacing-sm)}.md-text-field--filled.md-text-field--textarea .md-text-field__input-wrapper{padding-bottom:0;padding-top:20px}.md-text-field--filled.md-text-field--textarea .md-text-field__label{top:16px;transform:translateY(0)}.md-text-field--filled.md-text-field--textarea .md-text-field__label--floating{top:8px}.md-text-field--filled:before{background-color:var(--color-on-surface);border-radius:var(--radius-xs) var(--radius-xs) 0 0;content:"";inset:calc(var(--spacing)*0);opacity:0;pointer-events:none;position:absolute;transition:opacity var(--duration-short-2) var(--easing-standard)}.md-text-field--filled:hover:before{opacity:var(--state-hover-opacity)}.md-text-field--filled.md-text-field--disabled:before{opacity:0}.md-text-field--outlined{background-color:transparent;border:1px solid var(--color-outline);border-radius:var(--radius-xs);padding:0 var(--spacing-lg);transition:border-color var(--duration-short-2) var(--easing-standard)}.md-text-field--outlined.md-text-field--has-leading-icon{padding-left:var(--spacing-md)}.md-text-field--outlined.md-text-field--has-trailing-icon{padding-right:var(--spacing-md)}.md-text-field--outlined:hover{border-color:var(--color-on-surface)}.md-text-field--outlined.md-text-field--focused{border-color:var(--color-primary);border-width:2px;padding-left:calc(var(--spacing-lg) - 1px);padding-right:calc(var(--spacing-lg) - 1px)}.md-text-field--outlined.md-text-field--focused.md-text-field--has-leading-icon{padding-left:calc(var(--spacing-md) - 1px)}.md-text-field--outlined.md-text-field--focused.md-text-field--has-trailing-icon{padding-right:calc(var(--spacing-md) - 1px)}.md-text-field--outlined.md-text-field--error{border-color:var(--color-error)}.md-text-field--outlined.md-text-field--error:hover{border-color:var(--color-on-error-container)}.md-text-field--outlined.md-text-field--error.md-text-field--focused{border-color:var(--color-error);border-width:2px}.md-text-field--outlined.md-text-field--disabled{border-color:color-mix(in srgb,#1c1b1f 12%,transparent)}@supports (color:color-mix(in lab,red,red)){.md-text-field--outlined.md-text-field--disabled{border-color:color-mix(in srgb,var(--color-on-surface) 12%,transparent)}}.md-text-field--outlined .md-text-field__label{background-color:transparent;left:var(--spacing-lg);padding:0;top:50%;transform:translateY(-50%)}.md-text-field--outlined.md-text-field--has-leading-icon .md-text-field__label{left:calc(var(--spacing-md) + var(--size-icon-md) + var(--spacing-lg))}.md-text-field--outlined .md-text-field__label--floating{background-color:var(--color-surface);left:calc(var(--spacing-lg) - var(--spacing-xs));padding:0 var(--spacing-xs);top:0;transform:translateY(-50%)}.md-text-field--outlined.md-text-field--has-leading-icon .md-text-field__label--floating{left:calc(var(--spacing-lg) - var(--spacing-xs))}.md-text-field--outlined .md-text-field__input-wrapper{padding-bottom:16px;padding-top:16px}.md-text-field--outlined.md-text-field--textarea{padding-bottom:var(--spacing-lg);padding-top:var(--spacing-lg)}.md-text-field--outlined.md-text-field--textarea .md-text-field__input-wrapper{padding-bottom:0;padding-top:0}.md-text-field--outlined.md-text-field--textarea .md-text-field__label{top:16px;transform:translateY(0)}.md-text-field--outlined.md-text-field--textarea .md-text-field__label--floating{top:0;transform:translateY(-50%)}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-ease:initial}}}';var Te=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,a=(e,r,o,d)=>{for(var s=d>1?void 0:d?ke(r,o):r,c=e.length-1,m;c>=0;c--)(m=e[c])&&(s=(d?m(r,o,s):m(s))||s);return d&&s&&Te(r,o,s),s};let t=class extends be{constructor(){super(...arguments),this.variant="filled",this.value="",this.label="",this.placeholder="",this.disabled=!1,this.required=!1,this.readonly=!1,this.name="",this.type="text",this.error=!1,this.errorText="",this.minLength=-1,this.maxLength=-1,this.prefixText="",this.suffixText="",this.supportingText="",this.rows=2,this.cols=20,this.focused=!1,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1}updated(e){super.updated(e),e.has("value")&&this.inputElement&&(this.inputElement.value=this.value)}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}reportValidity(){var e;return((e=this.inputElement)==null?void 0:e.reportValidity())??!0}setCustomValidity(e){var r;(r=this.inputElement)==null||r.setCustomValidity(e)}get validity(){var e;return(e=this.inputElement)==null?void 0:e.validity}get validationMessage(){var e;return((e=this.inputElement)==null?void 0:e.validationMessage)??""}focus(){var e;(e=this.inputElement)==null||e.focus()}blur(){var e;(e=this.inputElement)==null||e.blur()}select(){var e;(e=this.inputElement)==null||e.select()}setSelectionRange(e,r,o){var d;(d=this.inputElement)==null||d.setSelectionRange(e,r,o)}get populated(){return this.value.length>0||this.focused}get displaySupportingText(){return this.error&&this.errorText?this.errorText:this.supportingText}get showCounter(){return this.maxLength>0}handleInput(e){const r=e.target;this.value=r.value}handleChange(){}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleContainerClick(){this.disabled||this.focus()}handleLeadingIconSlotChange(e){const r=e.target;this.hasLeadingIcon=r.assignedNodes().length>0}handleTrailingIconSlotChange(e){const r=e.target;this.hasTrailingIcon=r.assignedNodes().length>0}render(){return i`
      ${this.renderContainer()}
      ${this.renderSupportingText()}
    `}renderContainer(){const e={"md-text-field":!0,"md-text-field--filled":this.variant==="filled","md-text-field--outlined":this.variant==="outlined","md-text-field--focused":this.focused,"md-text-field--populated":this.populated,"md-text-field--error":this.error,"md-text-field--disabled":this.disabled,"md-text-field--has-leading-icon":this.hasLeadingIcon,"md-text-field--has-trailing-icon":this.hasTrailingIcon,"md-text-field--no-label":!this.label,"md-text-field--textarea":this.type==="textarea"};return i`
      <div
        class=${f(e)}
        part="container"
        @click=${this.handleContainerClick}
      >
        ${this.renderLeadingIcon()}
        <div class="md-text-field__input-wrapper">
          ${this.renderPrefix()}
          ${this.renderInput()}
          ${this.renderSuffix()}
        </div>
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </div>
    `}renderInput(){const e={"md-text-field__input":!0};return this.type==="textarea"?i`
        <textarea
          class=${f(e)}
          part="input"
          .value=${E(this.value)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          placeholder=${l(this.placeholder||void 0)}
          name=${l(this.name||void 0)}
          rows=${this.rows}
          cols=${this.cols}
          minlength=${l(this.minLength>0?this.minLength:void 0)}
          maxlength=${l(this.maxLength>0?this.maxLength:void 0)}
          aria-label=${l(this.label||void 0)}
          aria-invalid=${this.error?"true":"false"}
          aria-describedby=${l(this.displaySupportingText?"supporting-text":void 0)}
          @input=${this.handleInput}
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        ></textarea>
      `:i`
      <input
        class=${f(e)}
        part="input"
        type=${this.type==="textarea"?"text":this.type}
        .value=${E(this.value)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        placeholder=${l(this.placeholder||void 0)}
        name=${l(this.name||void 0)}
        inputmode=${l(this.inputmode)}
        autocomplete=${l(this.autocomplete)}
        pattern=${l(this.pattern)}
        minlength=${l(this.minLength>0?this.minLength:void 0)}
        maxlength=${l(this.maxLength>0?this.maxLength:void 0)}
        min=${l(this.min)}
        max=${l(this.max)}
        step=${l(this.step)}
        aria-label=${l(this.label||void 0)}
        aria-invalid=${this.error?"true":"false"}
        aria-describedby=${l(this.displaySupportingText?"supporting-text":void 0)}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      />
    `}renderLabel(){if(!this.label)return i``;const e={"md-text-field__label":!0,"md-text-field__label--floating":this.populated,"md-text-field__label--error":this.error};return i`
      <span class=${f(e)} part="label">${this.label}</span>
    `}renderPrefix(){return this.prefixText?i`
      <span class="md-text-field__prefix">${this.prefixText}</span>
    `:i``}renderSuffix(){return this.suffixText?i`
      <span class="md-text-field__suffix">${this.suffixText}</span>
    `:i``}renderLeadingIcon(){return i`
      <span class="md-text-field__leading-icon" ?hidden=${!this.hasLeadingIcon}>
        <slot name="leading-icon" @slotchange=${this.handleLeadingIconSlotChange}></slot>
      </span>
    `}renderTrailingIcon(){return i`
      <span class="md-text-field__trailing-icon" ?hidden=${!this.hasTrailingIcon}>
        <slot name="trailing-icon" @slotchange=${this.handleTrailingIconSlotChange}></slot>
      </span>
    `}renderSupportingText(){if(!(this.displaySupportingText||this.showCounter))return i``;const r={"md-text-field__supporting":!0,"md-text-field__supporting--error":this.error};return i`
      <div class=${f(r)}>
        <span id="supporting-text" class="md-text-field__supporting-text">
          ${this.displaySupportingText}
        </span>
        ${this.showCounter?i`
              <span class="md-text-field__counter">
                ${this.value.length} / ${this.maxLength}
              </span>
            `:""}
      </div>
    `}};t.styles=[ge(_e)];a([n({type:String,reflect:!0})],t.prototype,"variant",2);a([n({type:String})],t.prototype,"value",2);a([n({type:String})],t.prototype,"label",2);a([n({type:String})],t.prototype,"placeholder",2);a([n({type:Boolean,reflect:!0})],t.prototype,"disabled",2);a([n({type:Boolean,reflect:!0})],t.prototype,"required",2);a([n({type:Boolean,reflect:!0})],t.prototype,"readonly",2);a([n({type:String})],t.prototype,"name",2);a([n({type:String})],t.prototype,"type",2);a([n({type:String})],t.prototype,"inputmode",2);a([n({type:String})],t.prototype,"autocomplete",2);a([n({type:Boolean,reflect:!0})],t.prototype,"error",2);a([n({type:String,attribute:"error-text"})],t.prototype,"errorText",2);a([n({type:String})],t.prototype,"pattern",2);a([n({type:Number,attribute:"minlength"})],t.prototype,"minLength",2);a([n({type:Number,attribute:"maxlength"})],t.prototype,"maxLength",2);a([n({type:String})],t.prototype,"min",2);a([n({type:String})],t.prototype,"max",2);a([n({type:String})],t.prototype,"step",2);a([n({type:String,attribute:"prefix-text"})],t.prototype,"prefixText",2);a([n({type:String,attribute:"suffix-text"})],t.prototype,"suffixText",2);a([n({type:String,attribute:"supporting-text"})],t.prototype,"supportingText",2);a([n({type:Number})],t.prototype,"rows",2);a([n({type:Number})],t.prototype,"cols",2);a([I()],t.prototype,"focused",2);a([I()],t.prototype,"hasLeadingIcon",2);a([I()],t.prototype,"hasTrailingIcon",2);a([we("input, textarea")],t.prototype,"inputElement",2);t=a([ye("md-text-field")],t);const Ee={title:"MD3 Components/Text Fields/Text Field",tags:["autodocs"],parameters:{docs:{description:{component:`
# MD3 Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Varianten

- **Filled:** Hat einen gefüllten Hintergrund mit Bottom-Indicator
- **Outlined:** Hat einen Rahmen ohne Hintergrundfüllung

## Features

- Floating Label Animation
- Leading/Trailing Icons
- Prefix/Suffix Text
- Supporting Text & Error Messages
- Character Counter
- Validation (pattern, minlength, maxlength, required)
- Multiple Input Types (text, email, password, number, textarea)

## Events

| Event | Beschreibung |
|-------|--------------|
| \`input\` | Bei jeder Wertänderung während der Eingabe |
| \`change\` | Wenn der Wert bestätigt wird (blur) |
| \`focus\` | Wenn das Feld Fokus erhält |
| \`blur\` | Wenn das Feld den Fokus verliert |

## Spezifikation

Detaillierte MD3-Spezifikation: [packages/textfields/SPEC.md](../packages/textfields/SPEC.md)
        `}}},argTypes:{variant:{control:"select",options:["filled","outlined"],description:"Die Variante des Text Fields",table:{defaultValue:{summary:"filled"}}},label:{control:"text",description:"Das Floating Label"},placeholder:{control:"text",description:"Placeholder-Text"},value:{control:"text",description:"Aktueller Wert"},type:{control:"select",options:["text","email","password","number","tel","url","search","textarea"],description:"Input-Typ",table:{defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"Deaktiviert das Feld"},required:{control:"boolean",description:"Markiert das Feld als Pflichtfeld"},readonly:{control:"boolean",description:"Macht das Feld schreibgeschützt"},error:{control:"boolean",description:"Zeigt den Fehlerzustand an"},errorText:{control:"text",description:"Fehlermeldung"},supportingText:{control:"text",description:"Hilfetext unter dem Feld"},prefixText:{control:"text",description:"Text vor dem Input"},suffixText:{control:"text",description:"Text nach dem Input"},maxLength:{control:"number",description:"Maximale Zeichenanzahl (zeigt Counter)"},hasLeadingIcon:{control:"boolean",description:"Zeigt Leading Icon"},hasTrailingIcon:{control:"boolean",description:"Zeigt Trailing Icon"}},args:{variant:"filled",label:"Label",placeholder:"",value:"",type:"text",disabled:!1,required:!1,readonly:!1,error:!1,errorText:"",supportingText:"",prefixText:"",suffixText:"",maxLength:0,hasLeadingIcon:!1,hasTrailingIcon:!1}},ze=e=>{const r=e.hasLeadingIcon?i`<span slot="leading-icon" class="material-symbols-outlined">search</span>`:"",o=e.hasTrailingIcon?i`<span slot="trailing-icon" class="material-symbols-outlined">cancel</span>`:"";return i`
    <md-text-field
      variant=${e.variant}
      label=${e.label}
      placeholder=${e.placeholder}
      value=${e.value}
      type=${e.type}
      ?disabled=${e.disabled}
      ?required=${e.required}
      ?readonly=${e.readonly}
      ?error=${e.error}
      error-text=${e.errorText}
      supporting-text=${e.supportingText}
      prefix-text=${e.prefixText}
      suffix-text=${e.suffixText}
      maxlength=${e.maxLength>0?e.maxLength:""}
    >
      ${r}
      ${o}
    </md-text-field>
  `},u={render:ze,args:{label:"Name",supportingText:"Enter your full name"}},h={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Name"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" supporting-text="We'll never share your email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Filled Text Fields haben einen gefüllten Hintergrund und einen Bottom-Indicator für den Fokus-Zustand."}}}},g={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="outlined" label="Username"></md-text-field>
      <md-text-field variant="outlined" label="Email" type="email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Phone" type="tel">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Outlined Text Fields haben einen Rahmen und kein Hintergrundfüllung. Das Label schwebt beim Fokus in den Rahmen."}}}},b={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Search">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
        <span slot="trailing-icon" class="material-symbols-outlined">mic</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Password" type="password">
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Text Fields können Leading und Trailing Icons haben. Icons sind 24dp groß."}}}},y={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Price" type="number" prefix-text="$" suffix-text=".00"></md-text-field>
      <md-text-field variant="outlined" label="Weight" type="number" suffix-text="kg"></md-text-field>
      <md-text-field variant="filled" label="Website" prefix-text="https://"></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Prefix und Suffix Text erscheinen direkt vor bzw. nach dem Input-Wert."}}}},v={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Username"
        supporting-text="Choose a unique username"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        supporting-text="Tell us about yourself"
        maxlength="200"
        value="I'm a software developer..."
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Supporting Text bietet zusätzliche Informationen oder Hinweise. Mit `maxlength` wird ein Character Counter angezeigt."}}}},w={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Email"
        type="email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      >
        <span slot="trailing-icon" class="material-symbols-outlined">error</span>
      </md-text-field>
      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        value="123"
        error
        error-text="Password must be at least 8 characters"
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Der Error-Zustand zeigt Validierungsfehler an. Die `error-text` ersetzt die `supporting-text` im Fehlerfall."}}}},_={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Disabled"
        value="Cannot edit"
        disabled
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Readonly"
        value="Read only value"
        readonly
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Disabled Fields sind nicht interaktiv. Readonly Fields zeigen einen Wert an, der nicht bearbeitet werden kann."}}}},T={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Text" type="text" value="Hello World"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" placeholder="user@example.com">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password" value="secret123">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
      <md-text-field variant="filled" label="Number" type="number" min="0" max="100" step="5" value="50"></md-text-field>
      <md-text-field variant="filled" label="Phone" type="tel" placeholder="+49 123 456789">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
      <md-text-field variant="filled" label="Search" type="search" placeholder="Search...">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Text Fields unterstützen verschiedene Input-Typen: text, email, password, number, tel, url, search."}}}},k={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <md-text-field
        variant="filled"
        label="Description"
        type="textarea"
        rows="4"
        supporting-text="Describe your project in detail"
        maxlength="500"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Comments"
        type="textarea"
        rows="3"
        placeholder="Leave a comment..."
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:'Mit `type="textarea"` wird ein mehrzeiliges Textfeld gerendert. Die Höhe kann mit `rows` gesteuert werden.'}}}},z={render:()=>i`
    <form style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: var(--color-surface); border-radius: 12px;">
      <h3 style="margin: 0; color: var(--color-on-surface);">Create Account</h3>

      <md-text-field
        variant="outlined"
        label="Full Name"
        required
        supporting-text="As it appears on your ID"
      >
        <span slot="leading-icon" class="material-symbols-outlined">person</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Email"
        type="email"
        required
      >
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        required
        supporting-text="At least 8 characters"
        minlength="8"
      >
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Phone"
        type="tel"
        prefix-text="+49"
      >
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        rows="3"
        maxlength="200"
        supporting-text="Tell us about yourself"
      ></md-text-field>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px;">
        <md-button variant="text">Cancel</md-button>
        <md-button variant="filled">Create Account</md-button>
      </div>
    </form>
  `,parameters:{docs:{description:{story:"Ein vollständiges Formular-Beispiel mit verschiedenen Text Field Konfigurationen."}}}},$={render:()=>i`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Filled</h4>
        <md-text-field variant="filled" label="Default"></md-text-field>
        <md-text-field variant="filled" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="filled" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="filled" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="filled" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Outlined</h4>
        <md-text-field variant="outlined" label="Default"></md-text-field>
        <md-text-field variant="outlined" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="outlined" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="outlined" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="outlined" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Direkter Vergleich zwischen Filled und Outlined Varianten in verschiedenen Zuständen."}}}};var F,C,L;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: renderTextField,
  args: {
    label: 'Name',
    supportingText: 'Enter your full name'
  }
}`,...(L=(C=u.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var D,P,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Name"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" supporting-text="We'll never share your email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Filled Text Fields haben einen gefüllten Hintergrund und einen Bottom-Indicator für den Fokus-Zustand.'
      }
    }
  }
}`,...(R=(P=h.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,A,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="outlined" label="Username"></md-text-field>
      <md-text-field variant="outlined" label="Email" type="email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Phone" type="tel">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Outlined Text Fields haben einen Rahmen und kein Hintergrundfüllung. Das Label schwebt beim Fokus in den Rahmen.'
      }
    }
  }
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var B,V,q;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Search">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
        <span slot="trailing-icon" class="material-symbols-outlined">mic</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Password" type="password">
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields können Leading und Trailing Icons haben. Icons sind 24dp groß.'
      }
    }
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,O,H;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Price" type="number" prefix-text="$" suffix-text=".00"></md-text-field>
      <md-text-field variant="outlined" label="Weight" type="number" suffix-text="kg"></md-text-field>
      <md-text-field variant="filled" label="Website" prefix-text="https://"></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Prefix und Suffix Text erscheinen direkt vor bzw. nach dem Input-Wert.'
      }
    }
  }
}`,...(H=(O=y.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var j,U,Z;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Username"
        supporting-text="Choose a unique username"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        supporting-text="Tell us about yourself"
        maxlength="200"
        value="I'm a software developer..."
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Supporting Text bietet zusätzliche Informationen oder Hinweise. Mit \`maxlength\` wird ein Character Counter angezeigt.'
      }
    }
  }
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var Y,K,G;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Email"
        type="email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      >
        <span slot="trailing-icon" class="material-symbols-outlined">error</span>
      </md-text-field>
      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        value="123"
        error
        error-text="Password must be at least 8 characters"
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Der Error-Zustand zeigt Validierungsfehler an. Die \`error-text\` ersetzt die \`supporting-text\` im Fehlerfall.'
      }
    }
  }
}`,...(G=(K=w.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Disabled"
        value="Cannot edit"
        disabled
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Readonly"
        value="Read only value"
        readonly
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Disabled Fields sind nicht interaktiv. Readonly Fields zeigen einen Wert an, der nicht bearbeitet werden kann.'
      }
    }
  }
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ie;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Text" type="text" value="Hello World"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" placeholder="user@example.com">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password" value="secret123">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
      <md-text-field variant="filled" label="Number" type="number" min="0" max="100" step="5" value="50"></md-text-field>
      <md-text-field variant="filled" label="Phone" type="tel" placeholder="+49 123 456789">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
      <md-text-field variant="filled" label="Search" type="search" placeholder="Search...">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields unterstützen verschiedene Input-Typen: text, email, password, number, tel, url, search.'
      }
    }
  }
}`,...(ie=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,re,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <md-text-field
        variant="filled"
        label="Description"
        type="textarea"
        rows="4"
        supporting-text="Describe your project in detail"
        maxlength="500"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Comments"
        type="textarea"
        rows="3"
        placeholder="Leave a comment..."
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Mit \`type="textarea"\` wird ein mehrzeiliges Textfeld gerendert. Die Höhe kann mit \`rows\` gesteuert werden.'
      }
    }
  }
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,oe,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => html\`
    <form style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: var(--color-surface); border-radius: 12px;">
      <h3 style="margin: 0; color: var(--color-on-surface);">Create Account</h3>

      <md-text-field
        variant="outlined"
        label="Full Name"
        required
        supporting-text="As it appears on your ID"
      >
        <span slot="leading-icon" class="material-symbols-outlined">person</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Email"
        type="email"
        required
      >
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        required
        supporting-text="At least 8 characters"
        minlength="8"
      >
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Phone"
        type="tel"
        prefix-text="+49"
      >
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        rows="3"
        maxlength="200"
        supporting-text="Tell us about yourself"
      ></md-text-field>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px;">
        <md-button variant="text">Cancel</md-button>
        <md-button variant="filled">Create Account</md-button>
      </div>
    </form>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Ein vollständiges Formular-Beispiel mit verschiedenen Text Field Konfigurationen.'
      }
    }
  }
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,pe,ce;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Filled</h4>
        <md-text-field variant="filled" label="Default"></md-text-field>
        <md-text-field variant="filled" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="filled" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="filled" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="filled" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Outlined</h4>
        <md-text-field variant="outlined" label="Default"></md-text-field>
        <md-text-field variant="outlined" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="outlined" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="outlined" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="outlined" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Direkter Vergleich zwischen Filled und Outlined Varianten in verschiedenen Zuständen.'
      }
    }
  }
}`,...(ce=(pe=$.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const Fe=["Default","Filled","Outlined","WithIcons","PrefixAndSuffix","SupportingText","ErrorState","DisabledAndReadonly","InputTypes","Textarea","FormExample","Comparison"];export{$ as Comparison,u as Default,_ as DisabledAndReadonly,w as ErrorState,h as Filled,z as FormExample,T as InputTypes,g as Outlined,y as PrefixAndSuffix,v as SupportingText,k as Textarea,b as WithIcons,Fe as __namedExportsOrder,Ee as default};
