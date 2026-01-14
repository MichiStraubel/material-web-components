import{b as t}from"./iframe-B-rN3J9a.js";import{n as ht,e as xt}from"./ref-DmaIIY40.js";import"./segmented-button-set-AWCoOK3b.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-BemFOqvn.js";const Et={title:"MD3 Components/Buttons/Button Group",component:"md-button-group",tags:["autodocs","new"],parameters:{docs:{description:{component:`
## Wann verwenden?

Button Groups gruppieren zusammengehörige Optionen visuell und funktional. Sie eignen sich für:
- **Ansichtswechsel** - Tag/Woche/Monat, Liste/Grid, Karte/Satellit
- **Filter-Optionen** - Kategorien, Status-Filter, Sortierung
- **Text-Formatierung** - Fett/Kursiv/Unterstrichen (Multi-Select)
- **Ausrichtung** - Links/Zentriert/Rechts

## Auswahlmodi

| Modus | Verhalten | Verwendung |
|-------|-----------|------------|
| **Single** | Nur eine Option aktiv (wie Radio) | Ansichtswechsel, exklusive Optionen |
| **Multi** | Mehrere Optionen möglich (wie Checkbox) | Formatierung, Filter-Kombinationen |

## Accessibility

Die Button Group verwendet automatisch die korrekten ARIA-Rollen:
- **Single-Select:** \`role="radiogroup"\` mit \`role="radio"\` Kindern
- **Multi-Select:** \`role="group"\` mit \`role="checkbox"\` Kindern
- **Keyboard:** Pfeiltasten, Home/End, Space/Enter

## Best Practices

- **2-5 Optionen:** Zu viele Optionen verwirren, nutze ggf. ein Dropdown
- **Kurze Labels:** Halte die Button-Labels kurz und prägnant
- **Konsistente Länge:** Buttons sollten ähnlich lang sein für ein ausgewogenes Layout
- **Icons für Klarheit:** Bei Icon-only Buttons immer \`aria-label\` verwenden
- **Vorauswahl:** Bei Single-Select sollte immer eine Option vorausgewählt sein

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`change\` | \`{ originalEvent: Event, value: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |
        `}}},argTypes:{selectionMode:{control:"select",options:["single","multi"],description:"Selection mode: single (radio) or multi (checkbox)",table:{defaultValue:{summary:"single"}}},disabled:{control:"boolean",description:"Whether all buttons are disabled",table:{defaultValue:{summary:"false"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"Size of all buttons in the group (MD3 Expressive)",table:{defaultValue:{summary:"medium"}}}},args:{selectionMode:"single",disabled:!1,size:"medium"},render:e=>t`
    <md-button-group
      selection-mode=${e.selectionMode}
      ?disabled=${e.disabled}
      size=${e.size}
      aria-label="View options"
    >
      <md-button toggle value="day" selected>Day</md-button>
      <md-button toggle value="week">Week</md-button>
      <md-button toggle value="month">Month</md-button>
    </md-button-group>
  `},d={args:{selectionMode:"single"}},i={args:{selectionMode:"multi"},render:e=>t`
    <md-button-group
      selection-mode=${e.selectionMode}
      ?disabled=${e.disabled}
      aria-label="Text formatting"
    >
      <md-button toggle value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-button>
      <md-button toggle value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-button>
      <md-button toggle value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-button>
    </md-button-group>
  `},s={render:()=>t`
    <md-button-group aria-label="Calendar view">
      <md-button toggle value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-button>
      <md-button toggle value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-button>
      <md-button toggle value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},r={render:()=>t`
    <md-button-group selection-mode="multi" aria-label="Text alignment">
      <md-button toggle value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-button>
      <md-button toggle value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-button>
      <md-button toggle value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-button>
      <md-button toggle value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},u={render:()=>t`
    <md-button-group aria-label="Price range">
      <md-button toggle value="cheap" selected>$</md-button>
      <md-button toggle value="moderate">$$</md-button>
      <md-button toggle value="expensive">$$$</md-button>
      <md-button toggle value="luxury">$$$$</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},m={render:()=>t`
    <md-button-group aria-label="Mode">
      <md-button toggle value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-button>
      <md-button toggle value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},g={render:()=>t`
    <md-button-group aria-label="Rating">
      <md-button toggle value="1" selected>1</md-button>
      <md-button toggle value="2">2</md-button>
      <md-button toggle value="3">3</md-button>
      <md-button toggle value="4">4</md-button>
      <md-button toggle value="5">5</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},p={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: Connected Button Shapes</h4>
        <p style="margin: 0 0 16px; font-size: 12px; color: #999;">
          Unselected buttons have position-based shapes (leading, middle, trailing).<br/>
          Selected buttons always become fully rounded.
        </p>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on first button</h5>
        <md-button-group aria-label="Example 1">
          <md-button toggle value="a" selected>Selected</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on middle button</h5>
        <md-button-group aria-label="Example 2">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b" selected>Selected</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on last button</h5>
        <md-button-group aria-label="Example 3">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c" selected>Selected</md-button>
        </md-button-group>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},c={args:{disabled:!0}},b={render:()=>t`
    <md-button-group aria-label="Options">
      <md-button toggle value="a" selected>Option A</md-button>
      <md-button toggle value="b" disabled>Option B (disabled)</md-button>
      <md-button toggle value="c">Option C</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},v={render:()=>t`
    <md-button-group aria-label="Single option">
      <md-button toggle value="only" selected>Only Option</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},h={render:()=>{const e=xt();return queueMicrotask(()=>{const o=e.value;if(o&&!o._listenerAttached){o._listenerAttached=!0;const bt=(S,l,z)=>{var a;const n=(a=o.closest(".event-demo-container"))==null?void 0:a.querySelector(".event-output");if(n){const vt=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${l}; font-weight: 600;">${S}</span>${z?`
${z}`:""}</div>`,M=n.querySelector(".placeholder");M&&M.remove(),n.insertAdjacentHTML("afterbegin",vt)}};o.addEventListener("change",S=>{const l=S,n=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">[${l.detail.value.map(a=>`"${a}"`).join(", ")}]</span> }`;bt("change","#4fc3f7",n),console.log("change:",l.detail)})}}),t`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um das <code>change</code> Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-button-group ${ht(e)} aria-label="Interactive example">
          <md-button toggle value="option1" selected>Option 1</md-button>
          <md-button toggle value="option2">Option 2</md-button>
          <md-button toggle value="option3">Option 3</md-button>
        </md-button-group>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke die Buttons, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-button-group id="view-group" aria-label="View options"&gt;
  &lt;md-button toggle value="day" selected&gt;Day&lt;/md-button&gt;
  &lt;md-button toggle value="week"&gt;Week&lt;/md-button&gt;
  &lt;md-button toggle value="month"&gt;Month&lt;/md-button&gt;
&lt;/md-button-group&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const buttonGroup = document.querySelector('#view-group');
buttonGroup.addEventListener('change', (e) =&gt; {
  console.log('Selected:', e.detail.value);
  // Output: ["day"] or ["week"] etc.
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`change\` | \`{ originalEvent: Event, value: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |

### Beispiel-Code

\`\`\`html
<md-button-group id="view-group" aria-label="View options">
  <md-button toggle value="day" selected>Day</md-button>
  <md-button toggle value="week">Week</md-button>
  <md-button toggle value="month">Month</md-button>
</md-button-group>
\`\`\`

\`\`\`javascript
const buttonGroup = document.querySelector('#view-group');
buttonGroup.addEventListener('change', (e) => {
  console.log('Selected:', e.detail.value);
  // Output: ["day"] or ["week"] etc.
});
\`\`\`
        `}}}},x={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">MD3 Expressive: Size Variants</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall (32dp height)</h5>
        <md-button-group size="xsmall" aria-label="XSmall example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Small (36dp height)</h5>
        <md-button-group size="small" aria-label="Small example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (40dp height) - Default</h5>
        <md-button-group size="medium" aria-label="Medium example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Large (48dp height)</h5>
        <md-button-group size="large" aria-label="Large example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge (56dp height)</h5>
        <md-button-group size="xlarge" aria-label="XLarge example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},y={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">Size Variants with Icons</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall</h5>
        <md-button-group size="xsmall" selection-mode="multi" aria-label="XSmall icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (Default)</h5>
        <md-button-group size="medium" selection-mode="multi" aria-label="Medium icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge</h5>
        <md-button-group size="xlarge" selection-mode="multi" aria-label="XLarge icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},f={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="padding: 16px; background: #fff3cd; border-radius: 8px; border: 1px solid #ffc107;">
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #856404;">Migration Guide</h4>
        <p style="margin: 0 0 8px; font-size: 12px; color: #856404;">
          <code>md-segmented-button</code>, <code>md-segmented-button-set</code>, and <code>md-toggle-button</code> are deprecated.
        </p>
        <p style="margin: 0; font-size: 12px; color: #856404;">
          Use <code>md-button-group</code> with <code>md-button toggle</code> instead.
        </p>
      </div>
      <div style="display: flex; gap: 32px;">
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #dc3545;">Before (deprecated)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-toggle-button&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #28a745;">After (MD3 Expressive)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-button toggle&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #666;">New Button Group (MD3 Expressive)</h5>
        <md-button-group aria-label="Example">
          <md-button toggle value="day" selected>Day</md-button>
          <md-button toggle value="week">Week</md-button>
          <md-button toggle value="month">Month</md-button>
        </md-button-group>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var k,w,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var _,D,L;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multi'
  },
  render: args => html\`
    <md-button-group
      selection-mode=\${args.selectionMode}
      ?disabled=\${args.disabled}
      aria-label="Text formatting"
    >
      <md-button toggle value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-button>
      <md-button toggle value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-button>
      <md-button toggle value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-button>
    </md-button-group>
  \`
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var B,$,O;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Calendar view">
      <md-button toggle value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-button>
      <md-button toggle value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-button>
      <md-button toggle value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=($=s.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var A,W,T;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group selection-mode="multi" aria-label="Text alignment">
      <md-button toggle value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-button>
      <md-button toggle value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-button>
      <md-button toggle value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-button>
      <md-button toggle value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(W=r.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var I,C,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Price range">
      <md-button toggle value="cheap" selected>$</md-button>
      <md-button toggle value="moderate">$$</md-button>
      <md-button toggle value="expensive">$$$</md-button>
      <md-button toggle value="luxury">$$$$</md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(C=u.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var X,V,K;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Mode">
      <md-button toggle value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-button>
      <md-button toggle value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(V=m.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var F,R,U;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Rating">
      <md-button toggle value="1" selected>1</md-button>
      <md-button toggle value="2">2</md-button>
      <md-button toggle value="3">3</md-button>
      <md-button toggle value="4">4</md-button>
      <md-button toggle value="5">5</md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var j,q,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: Connected Button Shapes</h4>
        <p style="margin: 0 0 16px; font-size: 12px; color: #999;">
          Unselected buttons have position-based shapes (leading, middle, trailing).<br/>
          Selected buttons always become fully rounded.
        </p>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on first button</h5>
        <md-button-group aria-label="Example 1">
          <md-button toggle value="a" selected>Selected</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on middle button</h5>
        <md-button-group aria-label="Example 2">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b" selected>Selected</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on last button</h5>
        <md-button-group aria-label="Example 3">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c" selected>Selected</md-button>
        </md-button-group>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,P,J;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(J=(P=c.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var Z,Q,Y;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Options">
      <md-button toggle value="a" selected>Option A</md-button>
      <md-button toggle value="b" disabled>Option B (disabled)</md-button>
      <md-button toggle value="c">Option C</md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var tt,et,ot;v.parameters={...v.parameters,docs:{...(tt=v.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => html\`
    <md-button-group aria-label="Single option">
      <md-button toggle value="only" selected>Only Option</md-button>
    </md-button-group>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ot=(et=v.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var nt,lt,at;h.parameters={...h.parameters,docs:{...(nt=h.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => {
    const groupRef = createRef<Element>();
    const setupListener = () => {
      const el = groupRef.value as HTMLElement | undefined;
      if (el && !(el as HTMLElement & {
        _listenerAttached?: boolean;
      })._listenerAttached) {
        (el as HTMLElement & {
          _listenerAttached?: boolean;
        })._listenerAttached = true;
        const addEvent = (eventName: string, color: string, details?: string) => {
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            const timestamp = new Date().toLocaleTimeString('de-DE', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              fractionalSecondDigits: 3
            });
            const eventLine = \`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">\${timestamp}</span> <span style="color: \${color}; font-weight: 600;">\${eventName}</span>\${details ? \`\\n\${details}\` : ''}</div>\`;
            const placeholder = output.querySelector('.placeholder');
            if (placeholder) {
              placeholder.remove();
            }
            output.insertAdjacentHTML('afterbegin', eventLine);
          }
        };
        el.addEventListener('change', (event: Event) => {
          const customEvent = event as CustomEvent<{
            originalEvent: Event;
            value: string[];
          }>;
          const valueStr = customEvent.detail.value.map(v => \`"\${v}"\`).join(', ');
          const details = \`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">[\${valueStr}]</span> }\`;
          addEvent('change', '#4fc3f7', details);
          console.log('change:', customEvent.detail);
        });
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um das <code>change</code> Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-button-group \${ref(groupRef)} aria-label="Interactive example">
          <md-button toggle value="option1" selected>Option 1</md-button>
          <md-button toggle value="option2">Option 2</md-button>
          <md-button toggle value="option3">Option 3</md-button>
        </md-button-group>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke die Buttons, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-button-group id="view-group" aria-label="View options"&gt;
  &lt;md-button toggle value="day" selected&gt;Day&lt;/md-button&gt;
  &lt;md-button toggle value="week"&gt;Week&lt;/md-button&gt;
  &lt;md-button toggle value="month"&gt;Month&lt;/md-button&gt;
&lt;/md-button-group&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const buttonGroup = document.querySelector('#view-group');
buttonGroup.addEventListener('change', (e) =&gt; {
  console.log('Selected:', e.detail.value);
  // Output: ["day"] or ["week"] etc.
});</code></pre>
        </div>
      </div>
    \`;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \\\`change\\\` | \\\`{ originalEvent: Event, value: string[] }\\\` | Wird ausgelöst, wenn sich die Auswahl ändert |

### Beispiel-Code

\\\`\\\`\\\`html
<md-button-group id="view-group" aria-label="View options">
  <md-button toggle value="day" selected>Day</md-button>
  <md-button toggle value="week">Week</md-button>
  <md-button toggle value="month">Month</md-button>
</md-button-group>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const buttonGroup = document.querySelector('#view-group');
buttonGroup.addEventListener('change', (e) => {
  console.log('Selected:', e.detail.value);
  // Output: ["day"] or ["week"] etc.
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(at=(lt=h.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var dt,it,st;x.parameters={...x.parameters,docs:{...(dt=x.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">MD3 Expressive: Size Variants</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall (32dp height)</h5>
        <md-button-group size="xsmall" aria-label="XSmall example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Small (36dp height)</h5>
        <md-button-group size="small" aria-label="Small example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (40dp height) - Default</h5>
        <md-button-group size="medium" aria-label="Medium example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Large (48dp height)</h5>
        <md-button-group size="large" aria-label="Large example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge (56dp height)</h5>
        <md-button-group size="xlarge" aria-label="XLarge example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(st=(it=x.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var rt,ut,mt;y.parameters={...y.parameters,docs:{...(rt=y.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">Size Variants with Icons</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall</h5>
        <md-button-group size="xsmall" selection-mode="multi" aria-label="XSmall icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (Default)</h5>
        <md-button-group size="medium" selection-mode="multi" aria-label="Medium icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge</h5>
        <md-button-group size="xlarge" selection-mode="multi" aria-label="XLarge icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(mt=(ut=y.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var gt,pt,ct;f.parameters={...f.parameters,docs:{...(gt=f.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="padding: 16px; background: #fff3cd; border-radius: 8px; border: 1px solid #ffc107;">
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #856404;">Migration Guide</h4>
        <p style="margin: 0 0 8px; font-size: 12px; color: #856404;">
          <code>md-segmented-button</code>, <code>md-segmented-button-set</code>, and <code>md-toggle-button</code> are deprecated.
        </p>
        <p style="margin: 0; font-size: 12px; color: #856404;">
          Use <code>md-button-group</code> with <code>md-button toggle</code> instead.
        </p>
      </div>
      <div style="display: flex; gap: 32px;">
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #dc3545;">Before (deprecated)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-toggle-button&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #28a745;">After (MD3 Expressive)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-button toggle&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #666;">New Button Group (MD3 Expressive)</h5>
        <md-button-group aria-label="Example">
          <md-button toggle value="day" selected>Day</md-button>
          <md-button toggle value="week">Week</md-button>
          <md-button toggle value="month">Month</md-button>
        </md-button-group>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ct=(pt=f.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};const _t=["SingleSelect","MultiSelect","WithIcons","IconOnly","TextOnly","TwoButtons","FiveButtons","ConnectedShapes","Disabled","DisabledButton","SingleButton","EventHandling","Sizes","SizesWithIcons","MigrationFromSegmentedButton"];export{p as ConnectedShapes,c as Disabled,b as DisabledButton,h as EventHandling,g as FiveButtons,r as IconOnly,f as MigrationFromSegmentedButton,i as MultiSelect,v as SingleButton,d as SingleSelect,x as Sizes,y as SizesWithIcons,u as TextOnly,m as TwoButtons,s as WithIcons,_t as __namedExportsOrder,Et as default};
