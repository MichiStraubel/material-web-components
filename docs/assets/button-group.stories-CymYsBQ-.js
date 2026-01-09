import{b as t}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const bt={title:"MD3 Components/Buttons/Button Group",component:"md-button-group",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
  `},n={args:{selectionMode:"single"}},o={args:{selectionMode:"multi"},render:e=>t`
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
  `},l={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},a={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>t`
    <md-button-group aria-label="Price range">
      <md-button toggle value="cheap" selected>$</md-button>
      <md-button toggle value="moderate">$$</md-button>
      <md-button toggle value="expensive">$$$</md-button>
      <md-button toggle value="luxury">$$$$</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},s={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},i={render:()=>t`
    <md-button-group aria-label="Rating">
      <md-button toggle value="1" selected>1</md-button>
      <md-button toggle value="2">2</md-button>
      <md-button toggle value="3">3</md-button>
      <md-button toggle value="4">4</md-button>
      <md-button toggle value="5">5</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},r={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},u={args:{disabled:!0}},m={render:()=>t`
    <md-button-group aria-label="Options">
      <md-button toggle value="a" selected>Option A</md-button>
      <md-button toggle value="b" disabled>Option B (disabled)</md-button>
      <md-button toggle value="c">Option C</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},b={render:()=>t`
    <md-button-group aria-label="Single option">
      <md-button toggle value="only" selected>Only Option</md-button>
    </md-button-group>
  `,parameters:{controls:{disable:!0}}},g={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-button-group
        aria-label="Interactive example"
        @md-change=${e=>{const x=document.getElementById("button-group-event-output");x&&(x.textContent=`Selected: ${e.detail.selected.join(", ")||"none"}`)}}
      >
        <md-button toggle value="option1" selected>Option 1</md-button>
        <md-button toggle value="option2">Option 2</md-button>
        <md-button toggle value="option3">Option 3</md-button>
      </md-button-group>
      <div id="button-group-event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},c={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},v={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,z,M;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(z=o.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var _,k,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var B,w,O;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(w=a.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var $,E,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var W,I,A;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var X,T,C;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var U,V,F;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(V=r.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var K,G,j;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(G=u.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var R,H,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var N,J,Z;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Z=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var q,Q,Y;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-button-group
        aria-label="Interactive example"
        @md-change=\${(e: CustomEvent) => {
    const output = document.getElementById('button-group-event-output');
    if (output) {
      output.textContent = \`Selected: \${e.detail.selected.join(', ') || 'none'}\`;
    }
  }}
      >
        <md-button toggle value="option1" selected>Option 1</md-button>
        <md-button toggle value="option2">Option 2</md-button>
        <md-button toggle value="option3">Option 3</md-button>
      </md-button-group>
      <div id="button-group-event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var tt,et,nt;p.parameters={...p.parameters,docs:{...(tt=p.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(et=p.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var ot,lt,at;c.parameters={...c.parameters,docs:{...(ot=c.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(lt=c.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var dt,st,it;v.parameters={...v.parameters,docs:{...(dt=v.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(it=(st=v.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};const gt=["SingleSelect","MultiSelect","WithIcons","IconOnly","TextOnly","TwoButtons","FiveButtons","ConnectedShapes","Disabled","DisabledButton","SingleButton","EventHandling","Sizes","SizesWithIcons","MigrationFromSegmentedButton"];export{r as ConnectedShapes,u as Disabled,m as DisabledButton,g as EventHandling,i as FiveButtons,a as IconOnly,v as MigrationFromSegmentedButton,o as MultiSelect,b as SingleButton,n as SingleSelect,p as Sizes,c as SizesWithIcons,d as TextOnly,s as TwoButtons,l as WithIcons,gt as __namedExportsOrder,bt as default};
