import{b as n}from"./iframe-D8vMWjEe.js";import{n as T,e as _}from"./ref-8gr5vN3U.js";import"./segmented-button-set-GdGoS1Sl.js";import"./preload-helper-BmHEkTjc.js";const J={title:"MD3 Components/Buttons/Extended FAB",component:"md-fab",tags:["autodocs"],parameters:{docs:{description:{component:`
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
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |
        `}}},argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Whether the FAB is disabled",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text"},showIcon:{control:"boolean",description:"Whether to show an icon",table:{defaultValue:{summary:"true"}}}},args:{variant:"primary",disabled:!1,lowered:!1,label:"Compose",showIcon:!0},render:e=>n`
    <md-fab
      extended
      variant=${e.variant}
      ?disabled=${e.disabled}
      ?lowered=${e.lowered}
      aria-label=${e.label}
    >
      ${e.showIcon?n`<span slot="icon" class="material-symbols-outlined">edit</span>`:""}
      ${e.label}
    </md-fab>
  `},t={},s={args:{showIcon:!1,label:"New Message"}},o={render:()=>n`
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
  `,parameters:{controls:{disable:!0}}},r={render:()=>n`
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
  `,parameters:{controls:{disable:!0}}},i={render:()=>n`
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
  `,parameters:{controls:{disable:!0}}},l={args:{disabled:!0}},d={render:()=>n`
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
  `,parameters:{controls:{disable:!0}}},c={render:()=>{const e=_();return queueMicrotask(()=>{const a=e.value;a&&!a._listenerAttached&&(a._listenerAttached=!0,a.addEventListener("md-click",$=>{var u;const m=$,p=(u=a.closest(".event-demo-container"))==null?void 0:u.querySelector(".event-output");p&&(p.textContent=`md-click: ${JSON.stringify(m.detail)}`),console.log("md-click:",m.detail)}))}),n`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Extended FAB, um das Event zu testen.
          </p>
        </div>
        <md-fab ${T(e)} extended aria-label="Compose">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den Extended FAB...</pre>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |
        `}}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,g,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    label: 'New Message'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,E,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var k,A,B;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(A=r.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var C,S,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var W,z,N;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(z=l.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var L,D,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,K,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
            Klicke den Extended FAB, um das Event zu testen.
          </p>
        </div>
        <md-fab \${ref(fabRef)} extended aria-label="Compose">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den Extended FAB...</pre>
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
| \\\`md-click\\\` | \\\`{ originalEvent: MouseEvent }\\\` | Wird ausgelöst, wenn der Extended FAB geklickt wird |
        \`
      }
    }
  }
}`,...(V=(K=c.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const G=["Default","WithoutIcon","AllVariants","WithAndWithoutIcon","Lowered","Disabled","PositionedExample","EventHandling"];export{o as AllVariants,t as Default,l as Disabled,c as EventHandling,i as Lowered,d as PositionedExample,r as WithAndWithoutIcon,s as WithoutIcon,G as __namedExportsOrder,J as default};
