import{b as a}from"./iframe-D8vMWjEe.js";import{n as de,e as ce}from"./ref-8gr5vN3U.js";import"./segmented-button-set-GdGoS1Sl.js";import"./preload-helper-BmHEkTjc.js";const ge={title:"MD3 Components/Buttons/Icon Button",component:"md-icon-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
## Wann verwenden?

Icon Buttons sind kompakte Buttons, die nur ein Icon ohne Label anzeigen. Sie eignen sich für:
- **Toolbars und App Bars** - Navigation, Suche, Menü
- **Inline-Aktionen** - Löschen, Bearbeiten, Teilen in Listen oder Karten
- **Toggle-Zustände** - Favoriten, Lesezeichen, Sichtbarkeit

## Varianten-Auswahl

| Variante | Verwendung | Beispiele |
|----------|------------|-----------|
| **Standard** | Niedrige Priorität, häufig wiederholte Aktionen | Navigation Icons, Toolbar-Aktionen |
| **Filled** | Höchste Priorität, wichtige Toggle-Aktionen | Favorit aktiv, Wichtig markiert |
| **Tonal** | Mittlere Priorität, sanfter als Filled | Sekundäre Toggle-Aktionen |
| **Outlined** | Wenn visueller Kontrast benötigt wird | Toggle-Aktionen mit klarer Grenze |

## Best Practices

- **Immer aria-label verwenden:** Icon Buttons haben kein sichtbares Label, daher ist ein beschreibendes aria-label für Barrierefreiheit erforderlich
- **Toggle für Zustände:** Verwende das \`toggle\` Attribut für An/Aus-Zustände wie Favoriten oder Lesezeichen
- **Konsistente Größen:** Verwende einheitliche Größen innerhalb einer Toolbar oder Liste
- **Erkennbare Icons:** Nutze etablierte Icons, die Benutzer sofort verstehen (z.B. Herz für Favorit)

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | Native MouseEvent | Standard-Klick-Event des Buttons |
| \`md-toggle\` | \`{ selected: boolean }\` | Wird ausgelöst, wenn ein Toggle-Button seinen Zustand ändert |
        `}}},argTypes:{variant:{control:"select",options:["standard","filled","tonal","outlined"],description:"The visual style variant of the icon button",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"The size of the icon button (MD3 Expressive)",table:{defaultValue:{summary:"small"}}},shape:{control:"select",options:["round","square"],description:"The shape of the icon button",table:{defaultValue:{summary:"round"}}},width:{control:"select",options:["narrow","default","wide"],description:"The width variant of the icon button",table:{defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the button is in a selected state",table:{defaultValue:{summary:"false"}}},toggle:{control:"boolean",description:"Whether the button acts as a toggle",table:{defaultValue:{summary:"false"}}}},args:{variant:"standard",size:"small",shape:"round",width:"default",disabled:!1,selected:!1,toggle:!1},render:e=>a`
    <md-icon-button
      variant=${e.variant}
      size=${e.size}
      shape=${e.shape}
      width=${e.width}
      ?disabled=${e.disabled}
      ?selected=${e.selected}
      ?toggle=${e.toggle}
      aria-label="Favorite"
    >
      <span class="material-symbols-outlined">favorite</span>
    </md-icon-button>
  `},s={args:{variant:"standard"}},o={args:{variant:"filled",selected:!0}},r={args:{variant:"tonal",selected:!0}},d={args:{variant:"outlined"}},c={render:()=>a`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" aria-label="Standard">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" selected aria-label="Filled">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="tonal" selected aria-label="Tonal">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="outlined" aria-label="Outlined">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
    </div>
  `,parameters:{controls:{disable:!0}}},m={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 5 Sizes (XSmall to XLarge)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button size="xsmall" aria-label="XSmall">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XSmall (32dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="small" aria-label="Small">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Small (36dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="medium" aria-label="Medium">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Medium (40dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="large" aria-label="Large">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Large (48dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="xlarge" aria-label="XLarge">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XLarge (56dp)</div>
          </div>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 2 Shapes (Round & Square)</h4>
        <div style="display: flex; gap: 32px;">
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Round Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="round" variant="standard" aria-label="Round Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="filled" selected aria-label="Round Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="tonal" selected aria-label="Round Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="outlined" aria-label="Round Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Square Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="square" variant="standard" aria-label="Square Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="filled" selected aria-label="Square Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="tonal" selected aria-label="Square Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="outlined" aria-label="Square Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},u={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 3 Widths (Narrow, Default, Wide)</h4>
        <div style="display: flex; gap: 32px;">
          <div style="text-align: center;">
            <md-icon-button width="narrow" variant="filled" selected aria-label="Narrow">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Narrow</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="default" variant="filled" selected aria-label="Default">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Default</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="wide" variant="filled" selected aria-label="Wide">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Wide</div>
          </div>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Widths across all sizes</h5>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XSmall:</span>
            <md-icon-button size="xsmall" width="narrow" variant="tonal" aria-label="XSmall Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="default" variant="tonal" aria-label="XSmall Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="wide" variant="tonal" aria-label="XSmall Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">Medium:</span>
            <md-icon-button size="medium" width="narrow" variant="tonal" aria-label="Medium Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="default" variant="tonal" aria-label="Medium Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="wide" variant="tonal" aria-label="Medium Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XLarge:</span>
            <md-icon-button size="xlarge" width="narrow" variant="tonal" aria-label="XLarge Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="default" variant="tonal" aria-label="XLarge Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="wide" variant="tonal" aria-label="XLarge Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},b={render:()=>a`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
        <span class="material-symbols-outlined">favorite</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" toggle aria-label="Toggle star">
        <span class="material-symbols-outlined">star</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
      </md-icon-button>
      <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
        <span class="material-symbols-outlined">bookmark</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">bookmark</span>
      </md-icon-button>
    </div>
  `,parameters:{controls:{disable:!0}}},v={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Favorite (outline -> filled)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Bookmark (add -> check)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Visibility (off -> on)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},g={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Unselected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" aria-label="Unselected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" aria-label="Unselected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" aria-label="Unselected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Selected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" selected aria-label="Selected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" selected aria-label="Selected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" selected aria-label="Selected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},y={args:{disabled:!0}},f={render:()=>a`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button aria-label="Menu">
        <span class="material-symbols-outlined">menu</span>
      </md-icon-button>
      <md-icon-button aria-label="Search">
        <span class="material-symbols-outlined">search</span>
      </md-icon-button>
      <md-icon-button aria-label="Settings">
        <span class="material-symbols-outlined">settings</span>
      </md-icon-button>
      <md-icon-button aria-label="Share">
        <span class="material-symbols-outlined">share</span>
      </md-icon-button>
      <md-icon-button aria-label="More options">
        <span class="material-symbols-outlined">more_vert</span>
      </md-icon-button>
    </div>
  `,parameters:{controls:{disable:!0}}},x={render:()=>{const e=ce();return queueMicrotask(()=>{const t=e.value;t&&!t._listenerAttached&&(t._listenerAttached=!0,t.addEventListener("md-toggle",h=>{var l;const n=h,i=(l=t.closest(".event-demo-container"))==null?void 0:l.querySelector(".event-output");i&&(i.textContent=`md-toggle: ${JSON.stringify(n.detail)}`),console.log("md-toggle:",n.detail)}),t.addEventListener("md-click",h=>{var l;const n=h,i=(l=t.closest(".event-demo-container"))==null?void 0:l.querySelector(".event-output");i&&(i.textContent=`md-click: ${JSON.stringify(n.detail)}`),console.log("md-click:",n.detail)}))}),a`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Toggle-Button, um die Events zu testen.
          </p>
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button
              ${de(e)}
              variant="filled"
              toggle
              aria-label="Toggle Button"
            >
              <span class="material-symbols-outlined">favorite</span>
              <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Toggle</div>
          </div>
        </div>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0; white-space: pre-wrap;">Klicke den Button...</pre>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:"\n### Events\n\n| Event | Detail | Beschreibung |\n|-------|--------|--------------|\n| `md-click` | `{ originalEvent: MouseEvent }` | Wird ausgelöst, wenn der Button geklickt wird |\n| `md-toggle` | `{ selected: boolean, originalEvent: MouseEvent }` | Wird bei Toggle-Buttons ausgelöst, wenn der Zustand wechselt |\n        "}}}};var z,S,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'standard'
  }
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,T,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    selected: true
  }
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var E,M,F;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'tonal',
    selected: true
  }
}`,...(F=(M=r.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var W,B,D;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var X,q,I;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" aria-label="Standard">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" selected aria-label="Filled">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="tonal" selected aria-label="Tonal">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="outlined" aria-label="Outlined">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var _,A,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 5 Sizes (XSmall to XLarge)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button size="xsmall" aria-label="XSmall">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XSmall (32dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="small" aria-label="Small">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Small (36dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="medium" aria-label="Medium">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Medium (40dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="large" aria-label="Large">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Large (48dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="xlarge" aria-label="XLarge">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XLarge (56dp)</div>
          </div>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,R,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 2 Shapes (Round & Square)</h4>
        <div style="display: flex; gap: 32px;">
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Round Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="round" variant="standard" aria-label="Round Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="filled" selected aria-label="Round Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="tonal" selected aria-label="Round Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="outlined" aria-label="Round Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Square Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="square" variant="standard" aria-label="Square Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="filled" selected aria-label="Square Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="tonal" selected aria-label="Square Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="outlined" aria-label="Square Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var $,C,K;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 3 Widths (Narrow, Default, Wide)</h4>
        <div style="display: flex; gap: 32px;">
          <div style="text-align: center;">
            <md-icon-button width="narrow" variant="filled" selected aria-label="Narrow">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Narrow</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="default" variant="filled" selected aria-label="Default">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Default</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="wide" variant="filled" selected aria-label="Wide">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Wide</div>
          </div>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Widths across all sizes</h5>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XSmall:</span>
            <md-icon-button size="xsmall" width="narrow" variant="tonal" aria-label="XSmall Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="default" variant="tonal" aria-label="XSmall Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="wide" variant="tonal" aria-label="XSmall Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">Medium:</span>
            <md-icon-button size="medium" width="narrow" variant="tonal" aria-label="Medium Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="default" variant="tonal" aria-label="Medium Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="wide" variant="tonal" aria-label="Medium Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XLarge:</span>
            <md-icon-button size="xlarge" width="narrow" variant="tonal" aria-label="XLarge Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="default" variant="tonal" aria-label="XLarge Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="wide" variant="tonal" aria-label="XLarge Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(C=u.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var U,H,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
        <span class="material-symbols-outlined">favorite</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" toggle aria-label="Toggle star">
        <span class="material-symbols-outlined">star</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
      </md-icon-button>
      <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
        <span class="material-symbols-outlined">bookmark</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">bookmark</span>
      </md-icon-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var J,P,G;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Favorite (outline -> filled)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Bookmark (add -> check)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Visibility (off -> on)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(P=v.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var j,Q,Y;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Unselected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" aria-label="Unselected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" aria-label="Unselected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" aria-label="Unselected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Selected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" selected aria-label="Selected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" selected aria-label="Selected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" selected aria-label="Selected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,ie,le;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button aria-label="Menu">
        <span class="material-symbols-outlined">menu</span>
      </md-icon-button>
      <md-icon-button aria-label="Search">
        <span class="material-symbols-outlined">search</span>
      </md-icon-button>
      <md-icon-button aria-label="Settings">
        <span class="material-symbols-outlined">settings</span>
      </md-icon-button>
      <md-icon-button aria-label="Share">
        <span class="material-symbols-outlined">share</span>
      </md-icon-button>
      <md-icon-button aria-label="More options">
        <span class="material-symbols-outlined">more_vert</span>
      </md-icon-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,oe,re;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = createRef<Element>();
    const setupListener = () => {
      const el = buttonRef.value as HTMLElement | undefined;
      if (el && !(el as HTMLElement & {
        _listenerAttached?: boolean;
      })._listenerAttached) {
        (el as HTMLElement & {
          _listenerAttached?: boolean;
        })._listenerAttached = true;
        el.addEventListener('md-toggle', (event: Event) => {
          const customEvent = event as CustomEvent;
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            output.textContent = \`md-toggle: \${JSON.stringify(customEvent.detail)}\`;
          }
          console.log('md-toggle:', customEvent.detail);
        });
        el.addEventListener('md-click', (event: Event) => {
          const customEvent = event as CustomEvent;
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            output.textContent = \`md-click: \${JSON.stringify(customEvent.detail)}\`;
          }
          console.log('md-click:', customEvent.detail);
        });
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Toggle-Button, um die Events zu testen.
          </p>
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button
              \${ref(buttonRef)}
              variant="filled"
              toggle
              aria-label="Toggle Button"
            >
              <span class="material-symbols-outlined">favorite</span>
              <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Toggle</div>
          </div>
        </div>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0; white-space: pre-wrap;">Klicke den Button...</pre>
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
| \\\`md-click\\\` | \\\`{ originalEvent: MouseEvent }\\\` | Wird ausgelöst, wenn der Button geklickt wird |
| \\\`md-toggle\\\` | \\\`{ selected: boolean, originalEvent: MouseEvent }\\\` | Wird bei Toggle-Buttons ausgelöst, wenn der Zustand wechselt |
        \`
      }
    }
  }
}`,...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const ye=["Standard","Filled","Tonal","Outlined","AllVariants","AllSizes","AllShapes","AllWidths","Toggle","ToggleWithDifferentIcons","SelectedStates","Disabled","CommonIcons","EventHandling"];export{p as AllShapes,m as AllSizes,c as AllVariants,u as AllWidths,f as CommonIcons,y as Disabled,x as EventHandling,o as Filled,d as Outlined,g as SelectedStates,s as Standard,b as Toggle,v as ToggleWithDifferentIcons,r as Tonal,ye as __namedExportsOrder,ge as default};
