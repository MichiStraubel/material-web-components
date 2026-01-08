import{b as n}from"./iframe-DS-FJ8Sb.js";import"./preload-helper-BmHEkTjc.js";const V={title:"Components/Icon",component:"md-icon",tags:["autodocs","new"],argTypes:{name:{control:"text",description:"The icon name from Material Symbols",table:{defaultValue:{summary:"home"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the icon",table:{defaultValue:{summary:"medium"}}},filled:{control:"boolean",description:"Whether to use the filled variant",table:{defaultValue:{summary:"false"}}}},args:{name:"home",size:"medium",filled:!1},render:e=>n`
    <md-icon size=${e.size} ?filled=${e.filled}>${e.name}</md-icon>
  `},o={args:{name:"home"}},i={args:{name:"favorite",filled:!0}},r={render:()=>n`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon size="small">home</md-icon>
      <md-icon size="medium">home</md-icon>
      <md-icon size="large">home</md-icon>
    </div>
  `,parameters:{controls:{disable:!0}}},a={render:()=>n`
    <div style="display: flex; gap: 24px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon>favorite</md-icon>
        <span style="font-size: 12px;">Outlined</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon filled>favorite</md-icon>
        <span style="font-size: 12px;">Filled</span>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},s={render:()=>n`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      ${["add","edit","delete","search","settings","home","person","favorite","star","check","close","menu","more_vert","share","download","upload"].map(e=>n`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
            <md-icon>${e}</md-icon>
            <span style="font-size: 11px; text-align: center;">${e}</span>
          </div>
        `)}
    </div>
  `,parameters:{controls:{disable:!0}}},l={render:()=>n`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon style="color: var(--color-primary);">palette</md-icon>
      <md-icon style="color: #e91e63;">favorite</md-icon>
      <md-icon style="color: #4caf50;">check_circle</md-icon>
      <md-icon style="color: #ff9800;">warning</md-icon>
      <md-icon style="color: #f44336;">error</md-icon>
    </div>
  `,parameters:{controls:{disable:!0}}};var t,d,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'favorite',
    filled: true
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,y,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon size="small">home</md-icon>
      <md-icon size="medium">home</md-icon>
      <md-icon size="large">home</md-icon>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon>favorite</md-icon>
        <span style="font-size: 12px;">Outlined</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon filled>favorite</md-icon>
        <span style="font-size: 12px;">Filled</span>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var z,b,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      \${['add', 'edit', 'delete', 'search', 'settings', 'home', 'person', 'favorite', 'star', 'check', 'close', 'menu', 'more_vert', 'share', 'download', 'upload'].map(icon => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
            <md-icon>\${icon}</md-icon>
            <span style="font-size: 11px; text-align: center;">\${icon}</span>
          </div>
        \`)}
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,$,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon style="color: var(--color-primary);">palette</md-icon>
      <md-icon style="color: #e91e63;">favorite</md-icon>
      <md-icon style="color: #4caf50;">check_circle</md-icon>
      <md-icon style="color: #ff9800;">warning</md-icon>
      <md-icon style="color: #f44336;">error</md-icon>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=($=l.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const k=["Default","Filled","AllSizes","FilledVariant","CommonIcons","WithColor"];export{r as AllSizes,s as CommonIcons,o as Default,i as Filled,a as FilledVariant,l as WithColor,k as __namedExportsOrder,V as default};
