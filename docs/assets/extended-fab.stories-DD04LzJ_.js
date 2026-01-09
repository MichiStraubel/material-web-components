import{b as a}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const z={title:"MD3 Components/Buttons/Extended FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
## Wann verwenden?

Der Extended FAB erweitert den Standard-FAB um ein **Text-Label**. Er ist ideal wenn:
- **Die Aktion unklar ist** - Wenn nur ein Icon nicht ausreicht, um die Aktion zu erklären
- **Mehr Kontext benötigt wird** - "Neue E-Mail" statt nur "+"
- **Branding wichtig ist** - Das Label kann die Markensprache widerspiegeln

## Extended FAB vs. Standard FAB

| Aspekt | Standard FAB | Extended FAB |
|--------|--------------|--------------|
| **Größe** | Kompakt (56dp) | Breiter (variabel) |
| **Klarheit** | Icon muss selbsterklärend sein | Label erklärt die Aktion |
| **Verwendung** | Etablierte Aktionen (z.B. "+") | Spezifische Aktionen |

## Typische Verwendungen

- **E-Mail Apps:** "Verfassen" mit Stift-Icon
- **Notizen Apps:** "Neue Notiz" mit Plus-Icon
- **Kalender:** "Neuer Termin" mit Kalender-Icon
- **Chat:** "Neue Nachricht" mit Chat-Icon

## Best Practices

- **Kurze Labels:** 1-2 Wörter, aktionsorientiert ("Erstellen", "Hinzufügen")
- **Icon + Label:** Verwende beide für maximale Klarheit
- **Konsistente Position:** Wie der Standard-FAB, typischerweise unten rechts
- **Responsive:** Kann bei wenig Platz zum Standard-FAB kollabieren
        `}}},argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Whether the FAB is disabled",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text"},showIcon:{control:"boolean",description:"Whether to show an icon",table:{defaultValue:{summary:"true"}}}},args:{variant:"primary",disabled:!1,lowered:!1,label:"Compose",showIcon:!0},render:e=>a`
    <md-fab
      extended
      variant=${e.variant}
      ?disabled=${e.disabled}
      ?lowered=${e.lowered}
      aria-label=${e.label}
    >
      ${e.showIcon?a`<span slot="icon" class="material-symbols-outlined">edit</span>`:""}
      ${e.label}
    </md-fab>
  `},n={},t={args:{showIcon:!1,label:"New Message"}},s={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-fab variant="surface" extended aria-label="Navigate">
        <span slot="icon" class="material-symbols-outlined">navigation</span>
        Navigate
      </md-fab>
      <md-fab variant="primary" extended aria-label="Compose">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
      <md-fab variant="secondary" extended aria-label="Share">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-fab>
      <md-fab variant="tertiary" extended aria-label="Download">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},r={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; font-size: 14px; color: #666;">
        Extended FABs can optionally omit the icon (unique to extended variant)
      </p>
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <md-fab extended aria-label="With icon">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <md-fab extended aria-label="Without icon">
          New Message
        </md-fab>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},o={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
      <md-fab extended lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},i={args:{disabled:!0}},l={render:()=>a`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        extended
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Compose email"
      >
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}};var d,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,b,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    label: 'New Message'
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-fab variant="surface" extended aria-label="Navigate">
        <span slot="icon" class="material-symbols-outlined">navigation</span>
        Navigate
      </md-fab>
      <md-fab variant="primary" extended aria-label="Compose">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
      <md-fab variant="secondary" extended aria-label="Share">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-fab>
      <md-fab variant="tertiary" extended aria-label="Download">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,v,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; font-size: 14px; color: #666;">
        Extended FABs can optionally omit the icon (unique to extended variant)
      </p>
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <md-fab extended aria-label="With icon">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <md-fab extended aria-label="Without icon">
          New Message
        </md-fab>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,A,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
      <md-fab extended lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var C,S,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var N,W,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        extended
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Compose email"
      >
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const V=["Default","WithoutIcon","AllVariants","WithAndWithoutIcon","Lowered","Disabled","PositionedExample"];export{s as AllVariants,n as Default,i as Disabled,o as Lowered,l as PositionedExample,r as WithAndWithoutIcon,t as WithoutIcon,V as __namedExportsOrder,z as default};
