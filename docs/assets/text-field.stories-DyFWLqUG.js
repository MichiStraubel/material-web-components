import{b as t}from"./iframe-f7ju8_8X.js";import"./text-field-ptm-6TKg.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-em8Hxg-n.js";const ne={title:"MD3 Components/Text Fields/Text Field",tags:["autodocs"],parameters:{docs:{description:{component:`
# MD3 Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Varianten

- **Filled:** Hat einen gefüllten Hintergrund mit Bottom-Indicator
- **Outlined:** Hat einen Rahmen ohne Hintergrundfüllung

## Features

- Floating Label Animation
- Leading/Trailing Icons
- Prefix/Suffix Text
- Supporting Text & Error Messages
- Character Counter
- Validation (pattern, minlength, maxlength, required)
- Multiple Input Types (text, email, password, number, textarea)

## Events

| Event | Beschreibung |
|-------|--------------|
| \`input\` | Bei jeder Wertänderung während der Eingabe |
| \`change\` | Wenn der Wert bestätigt wird (blur) |
| \`focus\` | Wenn das Feld Fokus erhält |
| \`blur\` | Wenn das Feld den Fokus verliert |

## Spezifikation

Detaillierte MD3-Spezifikation: [packages/textfields/SPEC.md](../packages/textfields/SPEC.md)
        `}}},argTypes:{variant:{control:"select",options:["filled","outlined"],description:"Die Variante des Text Fields",table:{defaultValue:{summary:"filled"}}},label:{control:"text",description:"Das Floating Label"},placeholder:{control:"text",description:"Placeholder-Text"},value:{control:"text",description:"Aktueller Wert"},type:{control:"select",options:["text","email","password","number","tel","url","search","textarea"],description:"Input-Typ",table:{defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"Deaktiviert das Feld"},required:{control:"boolean",description:"Markiert das Feld als Pflichtfeld"},readonly:{control:"boolean",description:"Macht das Feld schreibgeschützt"},error:{control:"boolean",description:"Zeigt den Fehlerzustand an"},errorText:{control:"text",description:"Fehlermeldung"},supportingText:{control:"text",description:"Hilfetext unter dem Feld"},prefixText:{control:"text",description:"Text vor dem Input"},suffixText:{control:"text",description:"Text nach dem Input"},maxLength:{control:"number",description:"Maximale Zeichenanzahl (zeigt Counter)"},hasLeadingIcon:{control:"boolean",description:"Zeigt Leading Icon"},hasTrailingIcon:{control:"boolean",description:"Zeigt Trailing Icon"}},args:{variant:"filled",label:"Label",placeholder:"",value:"",type:"text",disabled:!1,required:!1,readonly:!1,error:!1,errorText:"",supportingText:"",prefixText:"",suffixText:"",maxLength:0,hasLeadingIcon:!1,hasTrailingIcon:!1}},X=e=>{const J=e.hasLeadingIcon?t`<span slot="leading-icon" class="material-symbols-outlined">search</span>`:"",Q=e.hasTrailingIcon?t`<span slot="trailing-icon" class="material-symbols-outlined">cancel</span>`:"";return t`
    <md-text-field
      variant=${e.variant}
      label=${e.label}
      placeholder=${e.placeholder}
      value=${e.value}
      type=${e.type}
      ?disabled=${e.disabled}
      ?required=${e.required}
      ?readonly=${e.readonly}
      ?error=${e.error}
      error-text=${e.errorText}
      supporting-text=${e.supportingText}
      prefix-text=${e.prefixText}
      suffix-text=${e.suffixText}
      maxlength=${e.maxLength>0?e.maxLength:""}
    >
      ${J}
      ${Q}
    </md-text-field>
  `},l={render:X,args:{label:"Name",supportingText:"Enter your full name"}},n={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Name"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" supporting-text="We'll never share your email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Filled Text Fields haben einen gefüllten Hintergrund und einen Bottom-Indicator für den Fokus-Zustand."}}}},i={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="outlined" label="Username"></md-text-field>
      <md-text-field variant="outlined" label="Email" type="email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Phone" type="tel">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Outlined Text Fields haben einen Rahmen und kein Hintergrundfüllung. Das Label schwebt beim Fokus in den Rahmen."}}}},a={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Search">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
        <span slot="trailing-icon" class="material-symbols-outlined">mic</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Password" type="password">
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Text Fields können Leading und Trailing Icons haben. Icons sind 24dp groß."}}}},d={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Price" type="number" prefix-text="$" suffix-text=".00"></md-text-field>
      <md-text-field variant="outlined" label="Weight" type="number" suffix-text="kg"></md-text-field>
      <md-text-field variant="filled" label="Website" prefix-text="https://"></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Prefix und Suffix Text erscheinen direkt vor bzw. nach dem Input-Wert."}}}},r={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Username"
        supporting-text="Choose a unique username"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        supporting-text="Tell us about yourself"
        maxlength="200"
        value="I'm a software developer..."
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Supporting Text bietet zusätzliche Informationen oder Hinweise. Mit `maxlength` wird ein Character Counter angezeigt."}}}},s={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Email"
        type="email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      >
        <span slot="trailing-icon" class="material-symbols-outlined">error</span>
      </md-text-field>
      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        value="123"
        error
        error-text="Password must be at least 8 characters"
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Der Error-Zustand zeigt Validierungsfehler an. Die `error-text` ersetzt die `supporting-text` im Fehlerfall."}}}},o={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Disabled"
        value="Cannot edit"
        disabled
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Readonly"
        value="Read only value"
        readonly
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Disabled Fields sind nicht interaktiv. Readonly Fields zeigen einen Wert an, der nicht bearbeitet werden kann."}}}},m={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Text" type="text" value="Hello World"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" placeholder="user@example.com">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password" value="secret123">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
      <md-text-field variant="filled" label="Number" type="number" min="0" max="100" step="5" value="50"></md-text-field>
      <md-text-field variant="filled" label="Phone" type="tel" placeholder="+49 123 456789">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
      <md-text-field variant="filled" label="Search" type="search" placeholder="Search...">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
      </md-text-field>
    </div>
  `,parameters:{docs:{description:{story:"Text Fields unterstützen verschiedene Input-Typen: text, email, password, number, tel, url, search."}}}},p={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <md-text-field
        variant="filled"
        label="Description"
        type="textarea"
        rows="4"
        supporting-text="Describe your project in detail"
        maxlength="500"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Comments"
        type="textarea"
        rows="3"
        placeholder="Leave a comment..."
      ></md-text-field>
    </div>
  `,parameters:{docs:{description:{story:'Mit `type="textarea"` wird ein mehrzeiliges Textfeld gerendert. Die Höhe kann mit `rows` gesteuert werden.'}}}},x={render:()=>t`
    <form style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: var(--color-surface); border-radius: 12px;">
      <h3 style="margin: 0; color: var(--color-on-surface);">Create Account</h3>

      <md-text-field
        variant="outlined"
        label="Full Name"
        required
        supporting-text="As it appears on your ID"
      >
        <span slot="leading-icon" class="material-symbols-outlined">person</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Email"
        type="email"
        required
      >
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        required
        supporting-text="At least 8 characters"
        minlength="8"
      >
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Phone"
        type="tel"
        prefix-text="+49"
      >
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        rows="3"
        maxlength="200"
        supporting-text="Tell us about yourself"
      ></md-text-field>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px;">
        <md-button variant="text">Cancel</md-button>
        <md-button variant="filled">Create Account</md-button>
      </div>
    </form>
  `,parameters:{docs:{description:{story:"Ein vollständiges Formular-Beispiel mit verschiedenen Text Field Konfigurationen."}}}},c={render:()=>t`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Filled</h4>
        <md-text-field variant="filled" label="Default"></md-text-field>
        <md-text-field variant="filled" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="filled" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="filled" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="filled" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Outlined</h4>
        <md-text-field variant="outlined" label="Default"></md-text-field>
        <md-text-field variant="outlined" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="outlined" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="outlined" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="outlined" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Direkter Vergleich zwischen Filled und Outlined Varianten in verschiedenen Zuständen."}}}};var u,f,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: renderTextField,
  args: {
    label: 'Name',
    supportingText: 'Enter your full name'
  }
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,v,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Name"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" supporting-text="We'll never share your email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Filled Text Fields haben einen gefüllten Hintergrund und einen Bottom-Indicator für den Fokus-Zustand.'
      }
    }
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,w,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="outlined" label="Username"></md-text-field>
      <md-text-field variant="outlined" label="Email" type="email">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Phone" type="tel">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Outlined Text Fields haben einen Rahmen und kein Hintergrundfüllung. Das Label schwebt beim Fokus in den Rahmen.'
      }
    }
  }
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var F,I,D;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Search">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
        <span slot="trailing-icon" class="material-symbols-outlined">mic</span>
      </md-text-field>
      <md-text-field variant="outlined" label="Password" type="password">
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields können Leading und Trailing Icons haben. Icons sind 24dp groß.'
      }
    }
  }
}`,...(D=(I=a.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,S,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Price" type="number" prefix-text="$" suffix-text=".00"></md-text-field>
      <md-text-field variant="outlined" label="Weight" type="number" suffix-text="kg"></md-text-field>
      <md-text-field variant="filled" label="Website" prefix-text="https://"></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Prefix und Suffix Text erscheinen direkt vor bzw. nach dem Input-Wert.'
      }
    }
  }
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var P,W,z;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Username"
        supporting-text="Choose a unique username"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        supporting-text="Tell us about yourself"
        maxlength="200"
        value="I'm a software developer..."
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Supporting Text bietet zusätzliche Informationen oder Hinweise. Mit \`maxlength\` wird ein Character Counter angezeigt.'
      }
    }
  }
}`,...(z=(W=r.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var C,H,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Email"
        type="email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      >
        <span slot="trailing-icon" class="material-symbols-outlined">error</span>
      </md-text-field>
      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        value="123"
        error
        error-text="Password must be at least 8 characters"
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Der Error-Zustand zeigt Validierungsfehler an. Die \`error-text\` ersetzt die \`supporting-text\` im Fehlerfall.'
      }
    }
  }
}`,...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var $,V,A;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field
        variant="filled"
        label="Disabled"
        value="Cannot edit"
        disabled
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Readonly"
        value="Read only value"
        readonly
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Disabled Fields sind nicht interaktiv. Readonly Fields zeigen einen Wert an, der nicht bearbeitet werden kann.'
      }
    }
  }
}`,...(A=(V=o.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var q,R,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 320px;">
      <md-text-field variant="filled" label="Text" type="text" value="Hello World"></md-text-field>
      <md-text-field variant="filled" label="Email" type="email" placeholder="user@example.com">
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>
      <md-text-field variant="filled" label="Password" type="password" value="secret123">
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>
      <md-text-field variant="filled" label="Number" type="number" min="0" max="100" step="5" value="50"></md-text-field>
      <md-text-field variant="filled" label="Phone" type="tel" placeholder="+49 123 456789">
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>
      <md-text-field variant="filled" label="Search" type="search" placeholder="Search...">
        <span slot="leading-icon" class="material-symbols-outlined">search</span>
      </md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Text Fields unterstützen verschiedene Input-Typen: text, email, password, number, tel, url, search.'
      }
    }
  }
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var B,O,Z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <md-text-field
        variant="filled"
        label="Description"
        type="textarea"
        rows="4"
        supporting-text="Describe your project in detail"
        maxlength="500"
      ></md-text-field>
      <md-text-field
        variant="outlined"
        label="Comments"
        type="textarea"
        rows="3"
        placeholder="Leave a comment..."
      ></md-text-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Mit \`type="textarea"\` wird ein mehrzeiliges Textfeld gerendert. Die Höhe kann mit \`rows\` gesteuert werden.'
      }
    }
  }
}`,...(Z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var N,j,U;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <form style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: var(--color-surface); border-radius: 12px;">
      <h3 style="margin: 0; color: var(--color-on-surface);">Create Account</h3>

      <md-text-field
        variant="outlined"
        label="Full Name"
        required
        supporting-text="As it appears on your ID"
      >
        <span slot="leading-icon" class="material-symbols-outlined">person</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Email"
        type="email"
        required
      >
        <span slot="leading-icon" class="material-symbols-outlined">email</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Password"
        type="password"
        required
        supporting-text="At least 8 characters"
        minlength="8"
      >
        <span slot="leading-icon" class="material-symbols-outlined">lock</span>
        <span slot="trailing-icon" class="material-symbols-outlined">visibility</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Phone"
        type="tel"
        prefix-text="+49"
      >
        <span slot="leading-icon" class="material-symbols-outlined">phone</span>
      </md-text-field>

      <md-text-field
        variant="outlined"
        label="Bio"
        type="textarea"
        rows="3"
        maxlength="200"
        supporting-text="Tell us about yourself"
      ></md-text-field>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px;">
        <md-button variant="text">Cancel</md-button>
        <md-button variant="filled">Create Account</md-button>
      </div>
    </form>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Ein vollständiges Formular-Beispiel mit verschiedenen Text Field Konfigurationen.'
      }
    }
  }
}`,...(U=(j=x.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var K,_,G;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Filled</h4>
        <md-text-field variant="filled" label="Default"></md-text-field>
        <md-text-field variant="filled" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="filled" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="filled" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="filled" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h4 style="margin: 0 0 8px; color: var(--color-on-surface);">Outlined</h4>
        <md-text-field variant="outlined" label="Default"></md-text-field>
        <md-text-field variant="outlined" label="With Value" value="Hello"></md-text-field>
        <md-text-field variant="outlined" label="With Icon">
          <span slot="leading-icon" class="material-symbols-outlined">search</span>
        </md-text-field>
        <md-text-field variant="outlined" label="Error" error error-text="Invalid input"></md-text-field>
        <md-text-field variant="outlined" label="Disabled" disabled value="Disabled"></md-text-field>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Direkter Vergleich zwischen Filled und Outlined Varianten in verschiedenen Zuständen.'
      }
    }
  }
}`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const ie=["Default","Filled","Outlined","WithIcons","PrefixAndSuffix","SupportingText","ErrorState","DisabledAndReadonly","InputTypes","Textarea","FormExample","Comparison"];export{c as Comparison,l as Default,o as DisabledAndReadonly,s as ErrorState,n as Filled,x as FormExample,m as InputTypes,i as Outlined,d as PrefixAndSuffix,r as SupportingText,p as Textarea,a as WithIcons,ie as __namedExportsOrder,ne as default};
