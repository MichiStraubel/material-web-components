import{b as a}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const I={title:"MD3 Components/Buttons/FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
## Wann verwenden?

Der Floating Action Button (FAB) repräsentiert die **wichtigste Aktion** auf einem Bildschirm. Er sollte sparsam eingesetzt werden:
- **Eine FAB pro Bildschirm** - Der FAB hebt die primäre Aktion hervor
- **Konstruktive Aktionen** - Erstellen, Hinzufügen, Teilen, Erkunden
- **Nicht für destruktive Aktionen** - Löschen, Archivieren gehören nicht in einen FAB

## Varianten-Auswahl

| Variante | Verwendung |
|----------|------------|
| **Primary** | Standard für die wichtigste Aktion (Markenfarbe) |
| **Surface** | Neutraler Hintergrund, wenn Primary zu dominant |
| **Secondary** | Alternative Farbakzentuierung |
| **Tertiary** | Dritte Farbvariante für spezielle Designs |

## Größen

| Größe | Maße | Verwendung |
|-------|------|------------|
| **Small** | 40dp | Kompakte UIs, sekundäre FABs |
| **Medium** | 56dp | Standard, empfohlen für die meisten Fälle |
| **Large** | 96dp | Besonders wichtige Aktionen, große Bildschirme |

## Positionierung

Der FAB wird typischerweise **unten rechts** positioniert:
\`\`\`css
position: fixed;
bottom: 16px;
right: 16px;
\`\`\`

## Best Practices

- **Nur eine primäre Aktion:** Ein FAB pro Bildschirm, für die wichtigste Aktion
- **Konsistente Position:** Immer an der gleichen Stelle im Layout
- **Nicht bei Scroll verstecken:** Der FAB sollte immer sichtbar bleiben
- **Lowered für weniger Dominanz:** Verwende \`lowered\` wenn der FAB weniger hervorstechen soll
        `}}},argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the FAB",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the FAB is disabled",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}}},args:{variant:"primary",size:"medium",disabled:!1,lowered:!1},render:e=>a`
    <md-fab
      variant=${e.variant}
      size=${e.size}
      ?disabled=${e.disabled}
      ?lowered=${e.lowered}
      aria-label="Add"
    >
      <span slot="icon" class="material-symbols-outlined">add</span>
    </md-fab>
  `},r={args:{variant:"primary"}},s={args:{variant:"surface"}},n={args:{variant:"secondary"}},i={args:{variant:"tertiary"}},t={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab variant="surface" aria-label="Surface FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="primary" aria-label="Primary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="secondary" aria-label="Secondary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="tertiary" aria-label="Tertiary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},l={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab size="small" aria-label="Small FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="medium" aria-label="Medium FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="large" aria-label="Large FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},o={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},d={args:{disabled:!0}},m={render:()=>a`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,f,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'surface'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var A,B,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var w,S,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab variant="surface" aria-label="Surface FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="primary" aria-label="Primary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="secondary" aria-label="Secondary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="tertiary" aria-label="Tertiary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,k,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab size="small" aria-label="Small FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="medium" aria-label="Medium FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="large" aria-label="Large FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var V,D,L;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var T,E,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,$,K;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=($=m.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const _=["Primary","Surface","Secondary","Tertiary","AllVariants","AllSizes","Lowered","Disabled","PositionedExample"];export{l as AllSizes,t as AllVariants,d as Disabled,o as Lowered,m as PositionedExample,r as Primary,n as Secondary,s as Surface,i as Tertiary,_ as __namedExportsOrder,I as default};
