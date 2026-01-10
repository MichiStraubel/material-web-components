import{b as a}from"./iframe-D8vMWjEe.js";import{n as J,e as U}from"./ref-8gr5vN3U.js";import"./segmented-button-set-GdGoS1Sl.js";import"./preload-helper-BmHEkTjc.js";const ee={title:"MD3 Components/Buttons/FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
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

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der FAB geklickt wird |
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
  `},r={args:{variant:"primary"}},s={args:{variant:"surface"}},t={args:{variant:"secondary"}},i={args:{variant:"tertiary"}},o={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},c={args:{disabled:!0}},m={render:()=>a`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>{const e=U();return queueMicrotask(()=>{const n=e.value;n&&!n._listenerAttached&&(n._listenerAttached=!0,n.addEventListener("md-click",I=>{var f;const u=I,b=(f=n.closest(".event-demo-container"))==null?void 0:f.querySelector(".event-output");b&&(b.textContent=`md-click: ${JSON.stringify(u.detail)}`),console.log("md-click:",u.detail)}))}),a`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den FAB, um das Event zu testen.
          </p>
        </div>
        <md-fab ${J(e)} aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den FAB...</pre>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der FAB geklickt wird |
        `}}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,A,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'surface'
  }
}`,...(x=(A=s.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var B,k,F;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(F=(k=t.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var E,w,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var z,L,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,T,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var V,N,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var $,H,K;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(K=(H=c.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var W,R,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var C,O,G;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const fabRef = createRef<Element>();
    const setupListener = () => {
      const el = fabRef.value as HTMLElement | undefined;
      if (el && !(el as HTMLElement & {
        _listenerAttached?: boolean;
      })._listenerAttached) {
        (el as HTMLElement & {
          _listenerAttached?: boolean;
        })._listenerAttached = true;
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
            Klicke den FAB, um das Event zu testen.
          </p>
        </div>
        <md-fab \${ref(fabRef)} aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den FAB...</pre>
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
| \\\`md-click\\\` | \\\`{ originalEvent: MouseEvent }\\\` | Wird ausgelöst, wenn der FAB geklickt wird |
        \`
      }
    }
  }
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const ae=["Primary","Surface","Secondary","Tertiary","AllVariants","AllSizes","Lowered","Disabled","PositionedExample","EventHandling"];export{l as AllSizes,o as AllVariants,c as Disabled,p as EventHandling,d as Lowered,m as PositionedExample,r as Primary,t as Secondary,s as Surface,i as Tertiary,ae as __namedExportsOrder,ee as default};
