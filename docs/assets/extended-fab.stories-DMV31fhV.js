import{b as a}from"./iframe-CVRBFitm.js";import"./segmented-button-set-CefuNUAU.js";import"./preload-helper-Dp1pzeXC.js";const $={title:"Buttons/Extended FAB",component:"md-fab",tags:["autodocs"],argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Whether the FAB is disabled",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text"},showIcon:{control:"boolean",description:"Whether to show an icon",table:{defaultValue:{summary:"true"}}}},args:{variant:"primary",disabled:!1,lowered:!1,label:"Compose",showIcon:!0},render:e=>a`
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
  `},n={},s={args:{showIcon:!1,label:"New Message"}},o={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},t={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},r={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},l={args:{disabled:!0}},i={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,b,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    label: 'New Message'
  }
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,v,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,C,W;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(C=r.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var S,A,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var I,D,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const L=["Default","WithoutIcon","AllVariants","WithAndWithoutIcon","Lowered","Disabled","PositionedExample"];export{o as AllVariants,n as Default,l as Disabled,r as Lowered,i as PositionedExample,t as WithAndWithoutIcon,s as WithoutIcon,L as __namedExportsOrder,$ as default};
