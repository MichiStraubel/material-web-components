import{b as a}from"./iframe-f7ju8_8X.js";import{n as X,e as Y}from"./ref-BIZ_3_sH.js";import"./button-B8Ka1pL1.js";import"./segmented-button-set-ByK4bwXe.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-em8Hxg-n.js";const oe={title:"MD3 Components/Buttons/FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
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
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der FAB geklickt wird |
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
  `},i={args:{variant:"primary"}},o={args:{variant:"surface"}},l={args:{variant:"secondary"}},d={args:{variant:"tertiary"}},c={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},m={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},p={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},u={args:{disabled:!0}},b={render:()=>a`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},f={render:()=>{const e=Y();return queueMicrotask(()=>{const t=e.value;if(t&&!t._listenerAttached){t._listenerAttached=!0;const J=(g,r,s)=>{var v;const n=(v=t.closest(".event-demo-container"))==null?void 0:v.querySelector(".event-output");if(n){const Q=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${r}; font-weight: 600;">${g}</span>${s?`
${s}`:""}</div>`,y=n.querySelector(".placeholder");y&&y.remove(),n.insertAdjacentHTML("afterbegin",Q)}};t.addEventListener("click",g=>{var s;const r=g;if(((s=r.detail)==null?void 0:s.value)!==void 0){const n=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${r.detail.value}"</span> }`;J("click","#4fc3f7",n),console.log("click:",r.detail)}})}}),a`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den FAB, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-fab ${X(e)} value="add-item" aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den FAB, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab id="create-fab" value="create" aria-label="Create"&gt;
  &lt;span slot="icon" class="material-symbols-outlined"&gt;add&lt;/span&gt;
&lt;/md-fab&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "create"
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der FAB geklickt wird |

### Beispiel-Code

\`\`\`html
<md-fab id="create-fab" value="create" aria-label="Create">
  <span slot="icon" class="material-symbols-outlined">add</span>
</md-fab>
\`\`\`

\`\`\`javascript
const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "create"
});
\`\`\`
        `}}}};var h,x,A;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var E,k,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'surface'
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var B,S,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var z,L,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,$,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=($=c.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,P,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var q,N,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var _,K,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(K=u.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var O,R,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(R=b.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var G,I,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den FAB, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-fab \${ref(fabRef)} value="add-item" aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den FAB, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab id="create-fab" value="create" aria-label="Create"&gt;
  &lt;span slot="icon" class="material-symbols-outlined"&gt;add&lt;/span&gt;
&lt;/md-fab&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "create"
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
| \\\`click\\\` | \\\`{ originalEvent: MouseEvent, value: string }\\\` | Wird ausgelöst, wenn der FAB geklickt wird |

### Beispiel-Code

\\\`\\\`\\\`html
<md-fab id="create-fab" value="create" aria-label="Create">
  <span slot="icon" class="material-symbols-outlined">add</span>
</md-fab>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "create"
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(U=(I=f.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const le=["Primary","Surface","Secondary","Tertiary","AllVariants","AllSizes","Lowered","Disabled","PositionedExample","EventHandling"];export{m as AllSizes,c as AllVariants,u as Disabled,f as EventHandling,p as Lowered,b as PositionedExample,i as Primary,l as Secondary,o as Surface,d as Tertiary,le as __namedExportsOrder,oe as default};
