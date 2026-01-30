import{b as e}from"./iframe-f7ju8_8X.js";import{n as we,e as ze}from"./ref-BIZ_3_sH.js";import"./button-B8Ka1pL1.js";import"./segmented-button-set-ByK4bwXe.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-em8Hxg-n.js";const Me={title:"MD3 Components/Buttons/Button",component:"md-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |
        `}}},argTypes:{variant:{control:"select",options:["filled","outlined","text","elevated","tonal"],description:"The visual style variant of the button",table:{defaultValue:{summary:"filled"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button takes the full width",table:{defaultValue:{summary:"false"}}},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to the text",table:{defaultValue:{summary:"start"}}},label:{control:"text",description:"The text content of the button"}},args:{variant:"filled",size:"medium",disabled:!1,fullWidth:!1,iconPosition:"start",label:"Button"},render:t=>e`
    <md-button
      variant=${t.variant}
      size=${t.size}
      ?disabled=${t.disabled}
      ?full-width=${t.fullWidth}
    >
      ${t.label}
    </md-button>
  `},l={args:{variant:"filled",label:"Filled Button"},parameters:{docs:{description:{story:'**Höchste Priorität.** Für die wichtigste Aktion auf einer Seite oder in einem Abschnitt. Beispiele: "Kaufen", "Speichern", "Senden".'}}}},s={args:{variant:"outlined",label:"Outlined Button"},parameters:{docs:{description:{story:'**Mittlere Priorität.** Für sekundäre Aktionen, die eine Alternative zur primären Aktion darstellen. Beispiele: "Abbrechen", "Zurück", "Mehr Details".'}}}},r={args:{variant:"text",label:"Text Button"},parameters:{docs:{description:{story:'**Niedrigste Priorität.** Für tertiäre Aktionen oder Navigation. Weniger visuelles Gewicht, ideal für "Mehr erfahren", "Überspringen", Links in Texten.'}}}},d={args:{variant:"elevated",label:"Elevated Button"},parameters:{docs:{description:{story:"**Für Kontrast.** Wenn der Button vom Hintergrund abgehoben werden muss, z.B. auf Bildern, farbigen Flächen oder in Karten mit wenig Kontrast."}}}},u={args:{variant:"tonal",label:"Tonal Button"},parameters:{docs:{description:{story:"**Mittlere Priorität, sanfter.** Alternative zu Filled für weniger dominante primäre Aktionen. Gut für UI mit vielen Aktionen, wo Filled zu dominant wäre."}}}},m={args:{variant:"filled",label:"Disabled Button",disabled:!0}},c={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">Filled</md-button>
      <md-button variant="outlined">Outlined</md-button>
      <md-button variant="text">Text</md-button>
      <md-button variant="elevated">Elevated</md-button>
      <md-button variant="tonal">Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button size="small">Small</md-button>
      <md-button size="medium">Medium</md-button>
      <md-button size="large">Large</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},b={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},v={render:()=>e`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" disabled>Filled</md-button>
      <md-button variant="outlined" disabled>Outlined</md-button>
      <md-button variant="text" disabled>Text</md-button>
      <md-button variant="elevated" disabled>Elevated</md-button>
      <md-button variant="tonal" disabled>Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},g={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <md-button variant="filled" full-width>Full Width Filled</md-button>
      <md-button variant="outlined" full-width>Full Width Outlined</md-button>
      <md-button variant="tonal" full-width>Full Width Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},f={render:()=>e`
    <md-button href="https://material.io" target="_blank">
      Visit Material Design
    </md-button>
  `,parameters:{controls:{disable:!0}}},x={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},h={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},y={render:()=>e`
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
  `,parameters:{controls:{disable:!0}}},w={render:()=>{const t=ze();return queueMicrotask(()=>{const n=t.value;if(n&&!n._listenerAttached){n._listenerAttached=!0;const he=(z,a,i)=>{var k;const o=(k=n.closest(".event-demo-container"))==null?void 0:k.querySelector(".event-output");if(o){const ye=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${a}; font-weight: 600;">${z}</span>${i?`
${i}`:""}</div>`,S=o.querySelector(".placeholder");S&&S.remove(),o.insertAdjacentHTML("afterbegin",ye)}};n.addEventListener("click",z=>{var i;const a=z;if(((i=a.detail)==null?void 0:i.value)!==void 0){const o=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${a.detail.value}"</span> }`;he("click","#4fc3f7",o),console.log("click:",a.detail)}})}}),e`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Button, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button
            ${we(t)}
            variant="filled"
            value="send-action"
          >
            <span slot="icon" class="material-symbols-outlined">send</span>
            Klick mich
          </md-button>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Button, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-button id="save-btn" value="save-action"&gt;Save&lt;/md-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const button = document.querySelector('#save-btn');
button.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "save-action"
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |

### Beispiel-Code

\`\`\`html
<md-button id="save-btn" value="save-action">Save</md-button>
\`\`\`

\`\`\`javascript
const button = document.querySelector('#save-btn');
button.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "save-action"
});
\`\`\`
        `}}}};var E,A,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,L,T;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(L=s.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var M,D,W;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(D=r.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var O,V,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var I,$,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var _,H,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Disabled Button',
    disabled: true
  }
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var q,C,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,G,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Z,J,Q;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ne,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,oe,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,re,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(re=x.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ue,me,ce;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,be,ve;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ge,fe,xe;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Button, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button
            \${ref(buttonRef)}
            variant="filled"
            value="send-action"
          >
            <span slot="icon" class="material-symbols-outlined">send</span>
            Klick mich
          </md-button>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Button, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-button id="save-btn" value="save-action"&gt;Save&lt;/md-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const button = document.querySelector('#save-btn');
button.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "save-action"
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

### Beispiel-Code

\\\`\\\`\\\`html
<md-button id="save-btn" value="save-action">Save</md-button>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const button = document.querySelector('#save-btn');
button.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "save-action"
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(xe=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const De=["Filled","Outlined","Text","Elevated","Tonal","Disabled","AllVariants","AllSizes","SizesWithVariants","DisabledStates","FullWidth","AsLink","WithIcon","WithIconVariants","IconPosition","EventHandling"];export{p as AllSizes,c as AllVariants,f as AsLink,m as Disabled,v as DisabledStates,d as Elevated,w as EventHandling,l as Filled,g as FullWidth,y as IconPosition,s as Outlined,b as SizesWithVariants,r as Text,u as Tonal,x as WithIcon,h as WithIconVariants,De as __namedExportsOrder,Me as default};
