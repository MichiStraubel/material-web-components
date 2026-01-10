import{b as e}from"./iframe-D8vMWjEe.js";import{n as be,e as ce}from"./ref-8gr5vN3U.js";import"./segmented-button-set-GdGoS1Sl.js";import"./preload-helper-BmHEkTjc.js";const ye={title:"MD3 Components/Buttons/Button Group",component:"md-button-group",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
| \`md-change\` | \`{ selected: string[], previousSelected: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |
        `}}},argTypes:{selectionMode:{control:"select",options:["single","multi"],description:"Selection mode: single (radio) or multi (checkbox)",table:{defaultValue:{summary:"single"}}},disabled:{control:"boolean",description:"Whether all buttons are disabled",table:{defaultValue:{summary:"false"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"Size of all buttons in the group (MD3 Expressive)",table:{defaultValue:{summary:"medium"}}}},args:{selectionMode:"single",disabled:!1,size:"medium"},render:t=>e`
    <md-button-group
      selection-mode=${t.selectionMode}
      ?disabled=${t.disabled}
      size=${t.size}
      aria-label="View options"
    >
      <md-button toggle value="day" selected>Day</md-button>
      <md-button toggle value="week">Week</md-button>
      <md-button toggle value="month">Month</md-button>
    </md-button-group>
  `},o={args:{selectionMode:"single"}},l={args:{selectionMode:"multi"},render:t=>e`
    <md-button-group
      selection-mode=${t.selectionMode}
      ?disabled=${t.disabled}
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
  `},a={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},s={render:()=>e`
    <md-button-group aria-label="Price range">
      <md-button toggle value="cheap" selected>$</md-button>
      <md-button toggle value="moderate">$$</md-button>
      <md-button toggle value="expensive">$$$</md-button>
      <md-button toggle value="luxury">$$$$</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},i={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},r={render:()=>e`
    <md-button-group aria-label="Rating">
      <md-button toggle value="1" selected>1</md-button>
      <md-button toggle value="2">2</md-button>
      <md-button toggle value="3">3</md-button>
      <md-button toggle value="4">4</md-button>
      <md-button toggle value="5">5</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},u={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},m={args:{disabled:!0}},g={render:()=>e`
    <md-button-group aria-label="Options">
      <md-button toggle value="a" selected>Option A</md-button>
      <md-button toggle value="b" disabled>Option B (disabled)</md-button>
      <md-button toggle value="c">Option C</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},b={render:()=>e`
    <md-button-group aria-label="Single option">
      <md-button toggle value="only" selected>Only Option</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},c={render:()=>{const t=ce();return queueMicrotask(()=>{const n=t.value;n&&!n._listenerAttached&&(n._listenerAttached=!0,n.addEventListener("md-change",ge=>{var y;const x=ge,f=(y=n.closest(".event-demo-container"))==null?void 0:y.querySelector(".event-output");f&&(f.textContent=`md-change:
Selected: ${x.detail.selected.join(", ")||"none"}
Previous: ${x.detail.previousSelected.join(", ")||"none"}`),console.log("md-change:",x.detail)}))}),e`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um das <code>md-change</code> Event zu testen.
          </p>
        </div>
        <md-button-group ${be(t)} aria-label="Interactive example">
          <md-button toggle value="option1" selected>Option 1</md-button>
          <md-button toggle value="option2">Option 2</md-button>
          <md-button toggle value="option3">Option 3</md-button>
        </md-button-group>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 60px; margin: 0; white-space: pre-wrap;">Klicke die Buttons...</pre>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-change\` | \`{ selected: string[], previousSelected: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |

Das Event enthält sowohl die neue Auswahl als auch die vorherige Auswahl, um Änderungen nachvollziehen zu können.
        `}}}},p={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},v={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},h={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}};var z,S,M;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var k,_,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,D,B;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(D=a.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var L,$,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var A,W,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var T,X,K;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(X=i.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var C,R,U;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(U=(R=r.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,F,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var G,H,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var q,N,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(N=g.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var Z,Q,Y;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,ne;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
        el.addEventListener('md-change', (event: Event) => {
          const customEvent = event as CustomEvent<{
            selected: string[];
            previousSelected: string[];
          }>;
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            output.textContent = \`md-change:\\nSelected: \${customEvent.detail.selected.join(', ') || 'none'}\\nPrevious: \${customEvent.detail.previousSelected.join(', ') || 'none'}\`;
          }
          console.log('md-change:', customEvent.detail);
        });
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um das <code>md-change</code> Event zu testen.
          </p>
        </div>
        <md-button-group \${ref(groupRef)} aria-label="Interactive example">
          <md-button toggle value="option1" selected>Option 1</md-button>
          <md-button toggle value="option2">Option 2</md-button>
          <md-button toggle value="option3">Option 3</md-button>
        </md-button-group>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 60px; margin: 0; white-space: pre-wrap;">Klicke die Buttons...</pre>
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
| \\\`md-change\\\` | \\\`{ selected: string[], previousSelected: string[] }\\\` | Wird ausgelöst, wenn sich die Auswahl ändert |

Das Event enthält sowohl die neue Auswahl als auch die vorherige Auswahl, um Änderungen nachvollziehen zu können.
        \`
      }
    }
  }
}`,...(ne=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,le,ae;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,se,ie;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ue,me;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(me=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const ze=["SingleSelect","MultiSelect","WithIcons","IconOnly","TextOnly","TwoButtons","FiveButtons","ConnectedShapes","Disabled","DisabledButton","SingleButton","EventHandling","Sizes","SizesWithIcons","MigrationFromSegmentedButton"];export{u as ConnectedShapes,m as Disabled,g as DisabledButton,c as EventHandling,r as FiveButtons,d as IconOnly,h as MigrationFromSegmentedButton,l as MultiSelect,b as SingleButton,o as SingleSelect,p as Sizes,v as SizesWithIcons,s as TextOnly,i as TwoButtons,a as WithIcons,ze as __namedExportsOrder,ye as default};
