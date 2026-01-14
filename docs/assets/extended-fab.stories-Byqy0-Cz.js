import{b as a}from"./iframe-B-rN3J9a.js";import{n as _,e as R}from"./ref-DmaIIY40.js";import"./segmented-button-set-AWCoOK3b.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-BemFOqvn.js";const Y={title:"MD3 Components/Buttons/Extended FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
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

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |
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
  `},i={},l={args:{showIcon:!1,label:"New Message"}},r={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},c={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},p={args:{disabled:!0}},m={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},u={render:()=>{const e=R();return queueMicrotask(()=>{const t=e.value;if(t&&!t._listenerAttached){t._listenerAttached=!0;const H=(b,n,o)=>{var f;const s=(f=t.closest(".event-demo-container"))==null?void 0:f.querySelector(".event-output");if(s){const P=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${n}; font-weight: 600;">${b}</span>${o?`
${o}`:""}</div>`,v=s.querySelector(".placeholder");v&&v.remove(),s.insertAdjacentHTML("afterbegin",P)}};t.addEventListener("click",b=>{var o;const n=b;if(((o=n.detail)==null?void 0:o.value)!==void 0){const s=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${n.detail.value}"</span> }`;H("click","#4fc3f7",s),console.log("click:",n.detail)}})}}),a`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Extended FAB, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-fab ${_(e)} extended value="compose" aria-label="Compose">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Extended FAB, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab id="compose-fab" extended value="compose" aria-label="Compose"&gt;
  &lt;span slot="icon" class="material-symbols-outlined"&gt;edit&lt;/span&gt;
  Compose
&lt;/md-fab&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fab = document.querySelector('#compose-fab');
fab.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "compose"
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |

### Beispiel-Code

\`\`\`html
<md-fab id="compose-fab" extended value="compose" aria-label="Compose">
  <span slot="icon" class="material-symbols-outlined">edit</span>
  Compose
</md-fab>
\`\`\`

\`\`\`javascript
const fab = document.querySelector('#compose-fab');
fab.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "compose"
});
\`\`\`
        `}}}};var g,x,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,E,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    label: 'New Message'
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var k,A,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(A=r.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var B,S,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var L,M,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,N,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var $,I,V;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var K,T,q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
            Klicke den Extended FAB, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-fab \${ref(fabRef)} extended value="compose" aria-label="Compose">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Extended FAB, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab id="compose-fab" extended value="compose" aria-label="Compose"&gt;
  &lt;span slot="icon" class="material-symbols-outlined"&gt;edit&lt;/span&gt;
  Compose
&lt;/md-fab&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fab = document.querySelector('#compose-fab');
fab.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "compose"
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
| \\\`click\\\` | \\\`{ originalEvent: MouseEvent, value: string }\\\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |

### Beispiel-Code

\\\`\\\`\\\`html
<md-fab id="compose-fab" extended value="compose" aria-label="Compose">
  <span slot="icon" class="material-symbols-outlined">edit</span>
  Compose
</md-fab>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const fab = document.querySelector('#compose-fab');
fab.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "compose"
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const Z=["Default","WithoutIcon","AllVariants","WithAndWithoutIcon","Lowered","Disabled","PositionedExample","EventHandling"];export{r as AllVariants,i as Default,p as Disabled,u as EventHandling,c as Lowered,m as PositionedExample,d as WithAndWithoutIcon,l as WithoutIcon,Z as __namedExportsOrder,Y as default};
