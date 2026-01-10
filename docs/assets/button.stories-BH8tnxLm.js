import{b as e}from"./iframe-D8vMWjEe.js";import{n as ge,e as xe}from"./ref-8gr5vN3U.js";import"./segmented-button-set-GdGoS1Sl.js";import"./preload-helper-BmHEkTjc.js";const Se={title:"MD3 Components/Buttons/Button",component:"md-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
## Wann verwenden?

Buttons kommunizieren Aktionen, die Benutzer ausführen können. Sie werden typischerweise in der gesamten UI platziert, in Bereichen wie:
- Dialoge
- Formulare
- Karten
- Toolbars

## Varianten-Auswahl (nach Priorität)

| Variante | Verwendung | Beispiele |
|----------|------------|-----------|
| **Filled** | Höchste Priorität, primäre Aktionen | "Speichern", "Senden", "Bestätigen" |
| **Tonal** | Mittlere Priorität, sekundäre Aktionen | "Bearbeiten", "Teilen" |
| **Elevated** | Wenn Abhebung vom Hintergrund nötig | Aktionen auf Bildern oder farbigen Flächen |
| **Outlined** | Niedrigere Priorität, alternative Aktionen | "Abbrechen", "Zurück" |
| **Text** | Niedrigste Priorität, tertiäre Aktionen | "Mehr erfahren", "Details anzeigen" |

## Best Practices

- **Eine primäre Aktion pro Ansicht:** Verwende nur einen Filled Button pro logischen Bereich
- **Klare Labels:** Beschreibe die Aktion, nicht das Objekt ("Speichern" statt "Dokument")
- **Konsistente Hierarchie:** Kombiniere Varianten sinnvoll (Filled + Outlined, nicht zwei Filled)

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der Button geklickt wird |
        `}}},argTypes:{variant:{control:"select",options:["filled","outlined","text","elevated","tonal"],description:"The visual style variant of the button",table:{defaultValue:{summary:"filled"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button takes the full width",table:{defaultValue:{summary:"false"}}},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to the text",table:{defaultValue:{summary:"start"}}},label:{control:"text",description:"The text content of the button"}},args:{variant:"filled",size:"medium",disabled:!1,fullWidth:!1,iconPosition:"start",label:"Button"},render:t=>e`
    <md-button
      variant=${t.variant}
      size=${t.size}
      ?disabled=${t.disabled}
      ?full-width=${t.fullWidth}
    >
      ${t.label}
    </md-button>
  `},a={args:{variant:"filled",label:"Filled Button"},parameters:{docs:{description:{story:'**Höchste Priorität.** Für die wichtigste Aktion auf einer Seite oder in einem Abschnitt. Beispiele: "Kaufen", "Speichern", "Senden".'}}}},i={args:{variant:"outlined",label:"Outlined Button"},parameters:{docs:{description:{story:'**Mittlere Priorität.** Für sekundäre Aktionen, die eine Alternative zur primären Aktion darstellen. Beispiele: "Abbrechen", "Zurück", "Mehr Details".'}}}},o={args:{variant:"text",label:"Text Button"},parameters:{docs:{description:{story:'**Niedrigste Priorität.** Für tertiäre Aktionen oder Navigation. Weniger visuelles Gewicht, ideal für "Mehr erfahren", "Überspringen", Links in Texten.'}}}},r={args:{variant:"elevated",label:"Elevated Button"},parameters:{docs:{description:{story:"**Für Kontrast.** Wenn der Button vom Hintergrund abgehoben werden muss, z.B. auf Bildern, farbigen Flächen oder in Karten mit wenig Kontrast."}}}},l={args:{variant:"tonal",label:"Tonal Button"},parameters:{docs:{description:{story:"**Mittlere Priorität, sanfter.** Alternative zu Filled für weniger dominante primäre Aktionen. Gut für UI mit vielen Aktionen, wo Filled zu dominant wäre."}}}},s={args:{variant:"filled",label:"Disabled Button",disabled:!0}},d={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">Filled</md-button>
      <md-button variant="outlined">Outlined</md-button>
      <md-button variant="text">Text</md-button>
      <md-button variant="elevated">Elevated</md-button>
      <md-button variant="tonal">Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},m={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button size="small">Small</md-button>
      <md-button size="medium">Medium</md-button>
      <md-button size="large">Large</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},u={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Filled</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" size="small">Small</md-button>
          <md-button variant="filled" size="medium">Medium</md-button>
          <md-button variant="filled" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Outlined</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="outlined" size="small">Small</md-button>
          <md-button variant="outlined" size="medium">Medium</md-button>
          <md-button variant="outlined" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Tonal</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="tonal" size="small">Small</md-button>
          <md-button variant="tonal" size="medium">Medium</md-button>
          <md-button variant="tonal" size="large">Large</md-button>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},c={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" disabled>Filled</md-button>
      <md-button variant="outlined" disabled>Outlined</md-button>
      <md-button variant="text" disabled>Text</md-button>
      <md-button variant="elevated" disabled>Elevated</md-button>
      <md-button variant="tonal" disabled>Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <md-button variant="filled" full-width>Full Width Filled</md-button>
      <md-button variant="outlined" full-width>Full Width Outlined</md-button>
      <md-button variant="tonal" full-width>Full Width Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},b={render:()=>e`
    <md-button href="https://material.io" target="_blank">
      Visit Material Design
    </md-button>
  `,parameters:{controls:{disable:!0}}},v={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" size="small">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add
      </md-button>
      <md-button variant="filled" size="medium">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add Item
      </md-button>
      <md-button variant="filled" size="large">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add New Item
      </md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},f={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">
        <span slot="icon" class="material-symbols-outlined">send</span>
        Send
      </md-button>
      <md-button variant="outlined">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-button>
      <md-button variant="tonal">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-button>
      <md-button variant="elevated">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-button>
      <md-button variant="text">
        <span slot="icon" class="material-symbols-outlined">delete</span>
        Delete
      </md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},g={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon Start (Default)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled">
            <span slot="icon" class="material-symbols-outlined">arrow_back</span>
            Back
          </md-button>
          <md-button variant="outlined">
            <span slot="icon" class="material-symbols-outlined">add</span>
            Add Item
          </md-button>
          <md-button variant="tonal">
            <span slot="icon" class="material-symbols-outlined">download</span>
            Download
          </md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon End</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">arrow_forward</span>
            Next
          </md-button>
          <md-button variant="outlined" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">open_in_new</span>
            Open Link
          </md-button>
          <md-button variant="tonal" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">send</span>
            Send
          </md-button>
        </div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},x={render:()=>{const t=xe();return queueMicrotask(()=>{const n=t.value;n&&!n._listenerAttached&&(n._listenerAttached=!0,n.addEventListener("md-click",fe=>{var w;const h=fe,y=(w=n.closest(".event-demo-container"))==null?void 0:w.querySelector(".event-output");y&&(y.textContent=`md-click: ${JSON.stringify(h.detail)}`),console.log("md-click:",h.detail)}))}),e`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Button, um das Event zu testen.
          </p>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button
            ${ge(t)}
            variant="filled"
          >
            <span slot="icon" class="material-symbols-outlined">send</span>
            Klick mich
          </md-button>
        </div>
        <pre class="event-output" style="font-size: 14px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den Button...</pre>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der Button geklickt wird |
        `}}}};var k,z,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Filled Button'
  },
  parameters: {
    docs: {
      description: {
        story: '**Höchste Priorität.** Für die wichtigste Aktion auf einer Seite oder in einem Abschnitt. Beispiele: "Kaufen", "Speichern", "Senden".'
      }
    }
  }
}`,...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var A,B,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    label: 'Outlined Button'
  },
  parameters: {
    docs: {
      description: {
        story: '**Mittlere Priorität.** Für sekundäre Aktionen, die eine Alternative zur primären Aktion darstellen. Beispiele: "Abbrechen", "Zurück", "Mehr Details".'
      }
    }
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,T,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    label: 'Text Button'
  },
  parameters: {
    docs: {
      description: {
        story: '**Niedrigste Priorität.** Für tertiäre Aktionen oder Navigation. Weniger visuelles Gewicht, ideal für "Mehr erfahren", "Überspringen", Links in Texten.'
      }
    }
  }
}`,...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var W,D,L;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    label: 'Elevated Button'
  },
  parameters: {
    docs: {
      description: {
        story: '**Für Kontrast.** Wenn der Button vom Hintergrund abgehoben werden muss, z.B. auf Bildern, farbigen Flächen oder in Karten mit wenig Kontrast.'
      }
    }
  }
}`,...(L=(D=r.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var O,I,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'tonal',
    label: 'Tonal Button'
  },
  parameters: {
    docs: {
      description: {
        story: '**Mittlere Priorität, sanfter.** Alternative zu Filled für weniger dominante primäre Aktionen. Gut für UI mit vielen Aktionen, wo Filled zu dominant wäre.'
      }
    }
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var K,V,_;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Disabled Button',
    disabled: true
  }
}`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,N,$;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">Filled</md-button>
      <md-button variant="outlined">Outlined</md-button>
      <md-button variant="text">Text</md-button>
      <md-button variant="elevated">Elevated</md-button>
      <md-button variant="tonal">Tonal</md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(N=d.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var R,q,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button size="small">Small</md-button>
      <md-button size="medium">Medium</md-button>
      <md-button size="large">Large</md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(q=m.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var G,U,Z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Filled</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" size="small">Small</md-button>
          <md-button variant="filled" size="medium">Medium</md-button>
          <md-button variant="filled" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Outlined</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="outlined" size="small">Small</md-button>
          <md-button variant="outlined" size="medium">Medium</md-button>
          <md-button variant="outlined" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Tonal</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="tonal" size="small">Small</md-button>
          <md-button variant="tonal" size="medium">Medium</md-button>
          <md-button variant="tonal" size="large">Large</md-button>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,j,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" disabled>Filled</md-button>
      <md-button variant="outlined" disabled>Outlined</md-button>
      <md-button variant="text" disabled>Text</md-button>
      <md-button variant="elevated" disabled>Elevated</md-button>
      <md-button variant="tonal" disabled>Tonal</md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:Q.source}}};var X,Y,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <md-button variant="filled" full-width>Full Width Filled</md-button>
      <md-button variant="outlined" full-width>Full Width Outlined</md-button>
      <md-button variant="tonal" full-width>Full Width Tonal</md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ne,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => html\`
    <md-button href="https://material.io" target="_blank">
      Visit Material Design
    </md-button>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,oe,re;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" size="small">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add
      </md-button>
      <md-button variant="filled" size="medium">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add Item
      </md-button>
      <md-button variant="filled" size="large">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add New Item
      </md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,se,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">
        <span slot="icon" class="material-symbols-outlined">send</span>
        Send
      </md-button>
      <md-button variant="outlined">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-button>
      <md-button variant="tonal">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-button>
      <md-button variant="elevated">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-button>
      <md-button variant="text">
        <span slot="icon" class="material-symbols-outlined">delete</span>
        Delete
      </md-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(se=f.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var me,ue,ce;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon Start (Default)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled">
            <span slot="icon" class="material-symbols-outlined">arrow_back</span>
            Back
          </md-button>
          <md-button variant="outlined">
            <span slot="icon" class="material-symbols-outlined">add</span>
            Add Item
          </md-button>
          <md-button variant="tonal">
            <span slot="icon" class="material-symbols-outlined">download</span>
            Download
          </md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon End</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">arrow_forward</span>
            Next
          </md-button>
          <md-button variant="outlined" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">open_in_new</span>
            Open Link
          </md-button>
          <md-button variant="tonal" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">send</span>
            Send
          </md-button>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,be,ve;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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

    // Setup listener after a microtask
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Button, um das Event zu testen.
          </p>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button
            \${ref(buttonRef)}
            variant="filled"
          >
            <span slot="icon" class="material-symbols-outlined">send</span>
            Klick mich
          </md-button>
        </div>
        <pre class="event-output" style="font-size: 14px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den Button...</pre>
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
        \`
      }
    }
  }
}`,...(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const Ae=["Filled","Outlined","Text","Elevated","Tonal","Disabled","AllVariants","AllSizes","SizesWithVariants","DisabledStates","FullWidth","AsLink","WithIcon","WithIconVariants","IconPosition","EventHandling"];export{m as AllSizes,d as AllVariants,b as AsLink,s as Disabled,c as DisabledStates,r as Elevated,x as EventHandling,a as Filled,p as FullWidth,g as IconPosition,i as Outlined,u as SizesWithVariants,o as Text,l as Tonal,v as WithIcon,f as WithIconVariants,Ae as __namedExportsOrder,Se as default};
