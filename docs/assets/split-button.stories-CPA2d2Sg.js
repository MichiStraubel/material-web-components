import{b as t}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const B={title:"MD3 Components/Buttons/Split Button",component:"md-split-button",tags:["autodocs"],parameters:{docs:{description:{component:`
## Wann verwenden?

Der Split Button kombiniert eine **primäre Aktion** mit einem **Dropdown-Menü** für verwandte Optionen. Ideal für:
- **Aktionen mit Varianten** - "Speichern" + "Speichern unter...", "Kopie speichern"
- **Standard + Alternativen** - "Senden" + "Später senden", "Als Entwurf speichern"
- **Kontextuelle Optionen** - "Download" + verschiedene Formate (PDF, DOCX, etc.)

## Wann NICHT verwenden?

- **Unabhängige Aktionen:** Wenn die Menü-Optionen nichts mit der primären Aktion zu tun haben
- **Einfache Aktionen:** Wenn nur eine Aktion ohne Varianten existiert → normaler Button
- **Navigation:** Für reine Navigation → Text Button oder Link

## Struktur

\`\`\`
┌─────────────┬───┐
│   Speichern │ ▼ │  ← Leading Button + Trailing Button
└─────────────┴───┘
       │
       ▼
┌─────────────────┐
│ Speichern unter │  ← Dropdown-Menü
│ Kopie speichern │
│ Als Vorlage     │
└─────────────────┘
\`\`\`

## Best Practices

- **Klare Hierarchie:** Die primäre Aktion (Leading Button) sollte die häufigste Aktion sein
- **Verwandte Optionen:** Menü-Items sollten Varianten der primären Aktion sein
- **Konsistente Icons:** Verwende Icons in Menü-Items für bessere Erkennbarkeit
- **Beschreibende Labels:** Menü-Items sollten klar beschreiben, was passiert
        `}}},argTypes:{variant:{control:"select",options:["filled","tonal","outlined","elevated"],description:"The color variant of the split button",table:{defaultValue:{summary:"filled"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"The size of the split button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the split button is disabled",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text"},showIcon:{control:"boolean",description:"Whether to show a leading icon",table:{defaultValue:{summary:"false"}}}},args:{variant:"filled",size:"medium",disabled:!1,label:"Save",showIcon:!1},render:e=>t`
    <md-split-button
      variant=${e.variant}
      size=${e.size}
      ?disabled=${e.disabled}
    >
      ${e.showIcon?t`<span slot="leading-icon" class="material-symbols-outlined">save</span>`:""}
      ${e.label}
      <button slot="menu" role="menuitem" data-value="option1">Option 1</button>
      <button slot="menu" role="menuitem" data-value="option2">Option 2</button>
      <button slot="menu" role="menuitem" data-value="option3">Option 3</button>
    </md-split-button>
  `},n={},a={args:{showIcon:!0}},s={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-split-button variant="filled">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Filled
      </md-split-button>
      <md-split-button variant="tonal">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Tonal
      </md-split-button>
      <md-split-button variant="outlined">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Outlined
      </md-split-button>
      <md-split-button variant="elevated">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Elevated
      </md-split-button>
    </div>
  `,parameters:{controls:{disable:!0}}},l={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <md-split-button size="xsmall">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XSmall (32dp)
      </md-split-button>
      <md-split-button size="small">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Small (36dp)
      </md-split-button>
      <md-split-button size="medium">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Medium (40dp)
      </md-split-button>
      <md-split-button size="large">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Large (48dp)
      </md-split-button>
      <md-split-button size="xlarge">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XLarge (56dp)
      </md-split-button>
    </div>
  `,parameters:{controls:{disable:!0}}},o={args:{disabled:!0}},i={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Save with Options (fixed primary action)</h3>
        <md-split-button
          @md-leading-click=${()=>console.log("Save clicked")}
          @md-menu-item-click=${e=>console.log("Menu item:",e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" data-value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" data-value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=${e=>console.log("Send option:",e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" data-value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" data-value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" data-value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=${e=>console.log("Download format:",e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" data-value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" data-value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" data-value="txt">Download as TXT</button>
        </md-split-button>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},d={render:()=>t`
    <md-split-button>
      <span slot="leading-icon" class="material-symbols-outlined">share</span>
      Share
      <span slot="trailing-icon" class="material-symbols-outlined">more_vert</span>
    </md-split-button>
  `,parameters:{controls:{disable:!0}}},r={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">File Actions</h3>
        <md-split-button>
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">
            <span class="material-symbols-outlined">save_as</span>
            Save As...
          </button>
          <button slot="menu" role="menuitem" data-value="save-copy">
            <span class="material-symbols-outlined">file_copy</span>
            Save a Copy
          </button>
          <button slot="menu" role="menuitem" data-value="export">
            <span class="material-symbols-outlined">upload</span>
            Export
          </button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Share Options</h3>
        <md-split-button variant="tonal">
          <span slot="leading-icon" class="material-symbols-outlined">share</span>
          Share
          <button slot="menu" role="menuitem" data-value="email">
            <span class="material-symbols-outlined">mail</span>
            Email
          </button>
          <button slot="menu" role="menuitem" data-value="link">
            <span class="material-symbols-outlined">link</span>
            Copy Link
          </button>
          <button slot="menu" role="menuitem" data-value="qr">
            <span class="material-symbols-outlined">qr_code</span>
            QR Code
          </button>
        </md-split-button>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,b,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showIcon: true
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-split-button variant="filled">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Filled
      </md-split-button>
      <md-split-button variant="tonal">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Tonal
      </md-split-button>
      <md-split-button variant="outlined">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Outlined
      </md-split-button>
      <md-split-button variant="elevated">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Elevated
      </md-split-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,S,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <md-split-button size="xsmall">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XSmall (32dp)
      </md-split-button>
      <md-split-button size="small">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Small (36dp)
      </md-split-button>
      <md-split-button size="medium">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Medium (40dp)
      </md-split-button>
      <md-split-button size="large">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Large (48dp)
      </md-split-button>
      <md-split-button size="xlarge">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XLarge (56dp)
      </md-split-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,k,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,A,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Save with Options (fixed primary action)</h3>
        <md-split-button
          @md-leading-click=\${() => console.log('Save clicked')}
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Menu item:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" data-value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" data-value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Send option:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" data-value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" data-value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" data-value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Download format:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" data-value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" data-value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" data-value="txt">Download as TXT</button>
        </md-split-button>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,T,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <md-split-button>
      <span slot="leading-icon" class="material-symbols-outlined">share</span>
      Share
      <span slot="trailing-icon" class="material-symbols-outlined">more_vert</span>
    </md-split-button>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,M,W;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">File Actions</h3>
        <md-split-button>
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">
            <span class="material-symbols-outlined">save_as</span>
            Save As...
          </button>
          <button slot="menu" role="menuitem" data-value="save-copy">
            <span class="material-symbols-outlined">file_copy</span>
            Save a Copy
          </button>
          <button slot="menu" role="menuitem" data-value="export">
            <span class="material-symbols-outlined">upload</span>
            Export
          </button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Share Options</h3>
        <md-split-button variant="tonal">
          <span slot="leading-icon" class="material-symbols-outlined">share</span>
          Share
          <button slot="menu" role="menuitem" data-value="email">
            <span class="material-symbols-outlined">mail</span>
            Email
          </button>
          <button slot="menu" role="menuitem" data-value="link">
            <span class="material-symbols-outlined">link</span>
            Copy Link
          </button>
          <button slot="menu" role="menuitem" data-value="qr">
            <span class="material-symbols-outlined">qr_code</span>
            QR Code
          </button>
        </md-split-button>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const L=["Default","WithIcon","AllVariants","AllSizes","Disabled","WithMenu","WithCustomTrailingIcon","MenuItemsWithIcons"];export{l as AllSizes,s as AllVariants,n as Default,o as Disabled,r as MenuItemsWithIcons,d as WithCustomTrailingIcon,a as WithIcon,i as WithMenu,L as __namedExportsOrder,B as default};
