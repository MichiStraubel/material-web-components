import{b as t}from"./iframe-B1C9tN0v.js";import"./segmented-button-set-C1yuADMH.js";import"./preload-helper-Dp1pzeXC.js";const ut={title:"MD3 Components/Buttons/Button",component:"md-button",tags:["autodocs","new"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:"select",options:["filled","outlined","text","elevated","tonal"],description:"The visual style variant of the button",table:{defaultValue:{summary:"filled"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button takes the full width",table:{defaultValue:{summary:"false"}}},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to the text",table:{defaultValue:{summary:"start"}}},label:{control:"text",description:"The text content of the button"}},args:{variant:"filled",size:"medium",disabled:!1,fullWidth:!1,iconPosition:"start",label:"Button"},render:e=>t`
    <md-button
      variant=${e.variant}
      size=${e.size}
      ?disabled=${e.disabled}
      ?full-width=${e.fullWidth}
    >
      ${e.label}
    </md-button>
  `},n={args:{variant:"filled",label:"Filled Button"},parameters:{docs:{description:{story:'**Höchste Priorität.** Für die wichtigste Aktion auf einer Seite oder in einem Abschnitt. Beispiele: "Kaufen", "Speichern", "Senden".'}}}},a={args:{variant:"outlined",label:"Outlined Button"},parameters:{docs:{description:{story:'**Mittlere Priorität.** Für sekundäre Aktionen, die eine Alternative zur primären Aktion darstellen. Beispiele: "Abbrechen", "Zurück", "Mehr Details".'}}}},i={args:{variant:"text",label:"Text Button"},parameters:{docs:{description:{story:'**Niedrigste Priorität.** Für tertiäre Aktionen oder Navigation. Weniger visuelles Gewicht, ideal für "Mehr erfahren", "Überspringen", Links in Texten.'}}}},r={args:{variant:"elevated",label:"Elevated Button"},parameters:{docs:{description:{story:"**Für Kontrast.** Wenn der Button vom Hintergrund abgehoben werden muss, z.B. auf Bildern, farbigen Flächen oder in Karten mit wenig Kontrast."}}}},l={args:{variant:"tonal",label:"Tonal Button"},parameters:{docs:{description:{story:"**Mittlere Priorität, sanfter.** Alternative zu Filled für weniger dominante primäre Aktionen. Gut für UI mit vielen Aktionen, wo Filled zu dominant wäre."}}}},o={args:{variant:"filled",label:"Disabled Button",disabled:!0}},s={render:()=>t`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">Filled</md-button>
      <md-button variant="outlined">Outlined</md-button>
      <md-button variant="text">Text</md-button>
      <md-button variant="elevated">Elevated</md-button>
      <md-button variant="tonal">Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},d={render:()=>t`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button size="small">Small</md-button>
      <md-button size="medium">Medium</md-button>
      <md-button size="large">Large</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},m={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},u={render:()=>t`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" disabled>Filled</md-button>
      <md-button variant="outlined" disabled>Outlined</md-button>
      <md-button variant="text" disabled>Text</md-button>
      <md-button variant="elevated" disabled>Elevated</md-button>
      <md-button variant="tonal" disabled>Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},p={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <md-button variant="filled" full-width>Full Width Filled</md-button>
      <md-button variant="outlined" full-width>Full Width Outlined</md-button>
      <md-button variant="tonal" full-width>Full Width Tonal</md-button>
    </div>
  `,parameters:{controls:{disable:!0}}},c={render:()=>t`
    <md-button href="https://material.io" target="_blank">
      Visit Material Design
    </md-button>
  `,parameters:{controls:{disable:!0}}},b={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},v={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}},f={render:()=>t`
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
  `,parameters:{controls:{disable:!0}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,w,z;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,A,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(A=i.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var F,B,T;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(B=r.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,D,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,P,O;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Disabled Button',
    disabled: true
  }
}`,...(O=(P=o.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,E,L;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var K,_,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var H,$,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=($=m.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var U,Z,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var C,q,J;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,R,X;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(R=c.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,tt,et;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(et=(tt=b.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,at,it;v.parameters={...v.parameters,docs:{...(nt=v.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(at=v.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var rt,lt,ot;f.parameters={...f.parameters,docs:{...(rt=f.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(lt=f.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};const pt=["Filled","Outlined","Text","Elevated","Tonal","Disabled","AllVariants","AllSizes","SizesWithVariants","DisabledStates","FullWidth","AsLink","WithIcon","WithIconVariants","IconPosition"];export{d as AllSizes,s as AllVariants,c as AsLink,o as Disabled,u as DisabledStates,r as Elevated,n as Filled,p as FullWidth,f as IconPosition,a as Outlined,m as SizesWithVariants,i as Text,l as Tonal,b as WithIcon,v as WithIconVariants,pt as __namedExportsOrder,ut as default};
