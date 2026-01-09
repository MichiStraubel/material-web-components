import{b as a}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const na={title:"MD3 Components/Buttons/Icon Button",component:"md-icon-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
  `},t={args:{variant:"standard"}},n={args:{variant:"filled",selected:!0}},i={args:{variant:"tonal",selected:!0}},l={args:{variant:"outlined"}},s={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},o={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},r={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},m={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},c={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},p={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},u={args:{disabled:!0}},b={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}};var v,g,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'standard'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    selected: true
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var z,S,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'tonal',
    selected: true
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,T,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var F,X,M;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(X=s.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var W,I,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var q,_,A;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(_=r.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,V,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,R,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var U,$,P;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=($=c.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var C,G,K;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Z,H,j;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(H=u.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var J,Q,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ia=["Standard","Filled","Tonal","Outlined","AllVariants","AllSizes","AllShapes","AllWidths","Toggle","ToggleWithDifferentIcons","SelectedStates","Disabled","CommonIcons"];export{r as AllShapes,o as AllSizes,s as AllVariants,d as AllWidths,b as CommonIcons,u as Disabled,n as Filled,l as Outlined,p as SelectedStates,t as Standard,m as Toggle,c as ToggleWithDifferentIcons,i as Tonal,ia as __namedExportsOrder,na as default};
