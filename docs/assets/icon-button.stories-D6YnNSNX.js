import{b as t}from"./iframe-f7ju8_8X.js";import{n as ue,e as be}from"./ref-BIZ_3_sH.js";import"./button-B8Ka1pL1.js";import"./segmented-button-set-ByK4bwXe.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-em8Hxg-n.js";const ke={title:"MD3 Components/Buttons/Icon Button",component:"md-icon-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |
| \`toggle\` | \`{ originalEvent: MouseEvent, value: string, selected: boolean }\` | Wird ausgelöst, wenn ein Toggle-Button seinen Zustand ändert |
        `}}},argTypes:{variant:{control:"select",options:["standard","filled","tonal","outlined"],description:"The visual style variant of the icon button",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"The size of the icon button (MD3 Expressive)",table:{defaultValue:{summary:"small"}}},shape:{control:"select",options:["round","square"],description:"The shape of the icon button",table:{defaultValue:{summary:"round"}}},width:{control:"select",options:["narrow","default","wide"],description:"The width variant of the icon button",table:{defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the button is in a selected state",table:{defaultValue:{summary:"false"}}},toggle:{control:"boolean",description:"Whether the button acts as a toggle",table:{defaultValue:{summary:"false"}}}},args:{variant:"standard",size:"small",shape:"round",width:"default",disabled:!1,selected:!1,toggle:!1},render:e=>t`
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
  `},o={args:{variant:"standard"}},r={args:{variant:"filled",selected:!0}},d={args:{variant:"tonal",selected:!0}},c={args:{variant:"outlined"}},m={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},p={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},u={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},b={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},v={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},g={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},f={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},y={args:{disabled:!0}},x={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},h={render:()=>{const e=be();return queueMicrotask(()=>{const l=e.value;if(l&&!l._listenerAttached){l._listenerAttached=!0;const z=(i,a,n)=>{var S;const s=(S=l.closest(".event-demo-container"))==null?void 0:S.querySelector(".event-output");if(s){const pe=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${a}; font-weight: 600;">${i}</span>${n?`
${n}`:""}</div>`,k=s.querySelector(".placeholder");k&&k.remove(),s.insertAdjacentHTML("afterbegin",pe)}};l.addEventListener("click",i=>{var n;const a=i;if(((n=a.detail)==null?void 0:n.value)!==void 0){const s=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${a.detail.value}"</span> }`;z("click","#4fc3f7",s),console.log("click:",a.detail)}}),l.addEventListener("toggle",i=>{const a=i,n=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${a.detail.value}"</span>, <span style="color: #90caf9;">selected</span>: <span style="color: #ce9178;">${a.detail.selected}</span> }`;z("toggle","#ffb74d",n),console.log("toggle:",a.detail)})}}),t`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Toggle-Button, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button
              ${ue(e)}
              variant="filled"
              toggle
              value="favorite"
              aria-label="Toggle Button"
            >
              <span class="material-symbols-outlined">favorite</span>
              <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Toggle</div>
          </div>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Button, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite"&gt;
  &lt;span class="material-symbols-outlined"&gt;favorite&lt;/span&gt;
  &lt;span slot="selected"&gt;...&lt;/span&gt;
&lt;/md-icon-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const iconButton = document.querySelector('#fav-btn');
iconButton.addEventListener('toggle', (e) =&gt; {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |
| \`toggle\` | \`{ originalEvent: MouseEvent, value: string, selected: boolean }\` | Wird bei Toggle-Buttons ausgelöst, wenn der Zustand wechselt |

### Beispiel-Code

\`\`\`html
<md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite">
  <span class="material-symbols-outlined">favorite</span>
  <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
</md-icon-button>
\`\`\`

\`\`\`javascript
const iconButton = document.querySelector('#fav-btn');

// Click Event
iconButton.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
});

// Toggle Event (für Toggle-Buttons)
iconButton.addEventListener('toggle', (e) => {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
});
\`\`\`
        `}}}};var w,L,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'standard'
  }
}`,...(E=(L=o.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var T,B,M;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    selected: true
  }
}`,...(M=(B=r.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var F,D,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'tonal',
    selected: true
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var q,A,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var X,_,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var V,N,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var O,C,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(C=u.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var P,U,K;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(U=b.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Z,j,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=(j=v.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,Q,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,oe,re;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var de,ce,me;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        el.addEventListener('click', (e: Event) => {
          const customEvent = e as CustomEvent<{
            originalEvent: MouseEvent;
            value: string;
          }>;
          if (customEvent.detail?.value !== undefined) {
            const details = \`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"\${customEvent.detail.value}"</span> }\`;
            addEvent('click', '#4fc3f7', details);
            console.log('click:', customEvent.detail);
          }
        });
        el.addEventListener('toggle', (event: Event) => {
          const customEvent = event as CustomEvent<{
            selected: boolean;
            value: string;
          }>;
          const details = \`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"\${customEvent.detail.value}"</span>, <span style="color: #90caf9;">selected</span>: <span style="color: #ce9178;">\${customEvent.detail.selected}</span> }\`;
          addEvent('toggle', '#ffb74d', details);
          console.log('toggle:', customEvent.detail);
        });
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Toggle-Button, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button
              \${ref(buttonRef)}
              variant="filled"
              toggle
              value="favorite"
              aria-label="Toggle Button"
            >
              <span class="material-symbols-outlined">favorite</span>
              <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Toggle</div>
          </div>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Button, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite"&gt;
  &lt;span class="material-symbols-outlined"&gt;favorite&lt;/span&gt;
  &lt;span slot="selected"&gt;...&lt;/span&gt;
&lt;/md-icon-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const iconButton = document.querySelector('#fav-btn');
iconButton.addEventListener('toggle', (e) =&gt; {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
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
| \\\`click\\\` | \\\`{ originalEvent: MouseEvent, value: string }\\\` | Wird ausgelöst, wenn der Button geklickt wird |
| \\\`toggle\\\` | \\\`{ originalEvent: MouseEvent, value: string, selected: boolean }\\\` | Wird bei Toggle-Buttons ausgelöst, wenn der Zustand wechselt |

### Beispiel-Code

\\\`\\\`\\\`html
<md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite">
  <span class="material-symbols-outlined">favorite</span>
  <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
</md-icon-button>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const iconButton = document.querySelector('#fav-btn');

// Click Event
iconButton.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
});

// Toggle Event (für Toggle-Buttons)
iconButton.addEventListener('toggle', (e) => {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(me=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const we=["Standard","Filled","Tonal","Outlined","AllVariants","AllSizes","AllShapes","AllWidths","Toggle","ToggleWithDifferentIcons","SelectedStates","Disabled","CommonIcons","EventHandling"];export{u as AllShapes,p as AllSizes,m as AllVariants,b as AllWidths,x as CommonIcons,y as Disabled,h as EventHandling,r as Filled,c as Outlined,f as SelectedStates,o as Standard,v as Toggle,g as ToggleWithDifferentIcons,d as Tonal,we as __namedExportsOrder,ke as default};
