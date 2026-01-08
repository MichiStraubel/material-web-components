import{b as a}from"./iframe-DN5iL-vM.js";import"./segmented-button-set-DZ-RQz1P.js";import"./preload-helper-BmHEkTjc.js";const R={title:"Buttons/FAB",component:"md-fab",tags:["autodocs","new"],argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the FAB",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the FAB is disabled",table:{defaultValue:{summary:"false"}}},extended:{control:"boolean",description:"Whether the FAB shows a label",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text (for extended FAB)"}},args:{variant:"primary",size:"medium",disabled:!1,extended:!1,lowered:!1,label:""},render:e=>a`
    <md-fab
      variant=${e.variant}
      size=${e.size}
      ?disabled=${e.disabled}
      ?extended=${e.extended}
      ?lowered=${e.lowered}
      aria-label="Add"
    >
      <span slot="icon" class="material-symbols-outlined">add</span>
      ${e.label}
    </md-fab>
  `},s={args:{variant:"primary"}},r={args:{variant:"surface"}},n={args:{variant:"secondary"}},l={args:{variant:"tertiary"}},t={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},d={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},i={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended size="small" aria-label="Small Extended FAB">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-fab>
      <md-fab extended size="medium" aria-label="Medium Extended FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create New
      </md-fab>
      <md-fab extended size="large" aria-label="Large Extended FAB">
        <span slot="icon" class="material-symbols-outlined">mail</span>
        Compose Message
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},o={render:()=>a`
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
  `,parameters:{controls:{disable:!0}}},m={render:()=>a`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}},c={args:{disabled:!0}},p={render:()=>a`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,parameters:{controls:{disable:!0}}};var b,u,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'surface'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,h,A;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var S,B,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var w,z,E;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(z=t.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var V,C,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var N,T,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended size="small" aria-label="Small Extended FAB">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-fab>
      <md-fab extended size="medium" aria-label="Medium Extended FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create New
      </md-fab>
      <md-fab extended size="large" aria-label="Large Extended FAB">
        <span slot="icon" class="material-symbols-outlined">mail</span>
        Compose Message
      </md-fab>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,P,$;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(P=o.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var W,k,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var O,j,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,H,I;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const U=["Primary","Surface","Secondary","Tertiary","AllVariants","AllSizes","Extended","ExtendedVariants","Lowered","Disabled","PositionedExample"];export{d as AllSizes,t as AllVariants,c as Disabled,i as Extended,o as ExtendedVariants,m as Lowered,p as PositionedExample,s as Primary,n as Secondary,r as Surface,l as Tertiary,U as __namedExportsOrder,R as default};
