import{b as e}from"./iframe-CVRBFitm.js";import"./segmented-button-set-CefuNUAU.js";import"./preload-helper-Dp1pzeXC.js";const M={title:"Buttons/Split Button",component:"md-split-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","tonal","outlined","elevated"],description:"The color variant of the split button",table:{defaultValue:{summary:"filled"}}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"The size of the split button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the split button is disabled",table:{defaultValue:{summary:"false"}}},expanded:{control:"boolean",description:"Whether the trailing button is expanded",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"The label text"},showIcon:{control:"boolean",description:"Whether to show a leading icon",table:{defaultValue:{summary:"false"}}}},args:{variant:"filled",size:"medium",disabled:!1,expanded:!1,label:"Save",showIcon:!1},render:t=>e`
    <md-split-button
      variant=${t.variant}
      size=${t.size}
      ?disabled=${t.disabled}
      ?expanded=${t.expanded}
    >
      ${t.showIcon?e`<span slot="leading-icon" class="material-symbols-outlined">save</span>`:""}
      ${t.label}
      <button slot="menu" role="menuitem" data-value="option1">Option 1</button>
      <button slot="menu" role="menuitem" data-value="option2">Option 2</button>
      <button slot="menu" role="menuitem" data-value="option3">Option 3</button>
    </md-split-button>
  `},a={},n={args:{showIcon:!0}},l={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-split-button variant="filled">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Filled
      </md-split-button>
      <md-split-button variant="tonal">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Tonal
      </md-split-button>
      <md-split-button variant="outlined">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Outlined
      </md-split-button>
      <md-split-button variant="elevated">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Elevated
      </md-split-button>
    </div>
  `,parameters:{controls:{disable:!0}}},s={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <md-split-button size="xsmall">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XSmall (32dp)
      </md-split-button>
      <md-split-button size="small">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Small (36dp)
      </md-split-button>
      <md-split-button size="medium">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Medium (40dp)
      </md-split-button>
      <md-split-button size="large">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Large (48dp)
      </md-split-button>
      <md-split-button size="xlarge">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XLarge (56dp)
      </md-split-button>
    </div>
  `,parameters:{controls:{disable:!0}}},o={args:{disabled:!0}},i={args:{expanded:!0}},d={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Save with Options (fixed primary action)</h3>
        <md-split-button
          @md-leading-click=${()=>console.log("Save clicked")}
          @md-menu-item-click=${t=>console.log("Menu item:",t.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" data-value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" data-value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=${t=>console.log("Send option:",t.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" data-value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" data-value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" data-value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=${t=>console.log("Download format:",t.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" data-value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" data-value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" data-value="txt">Download as TXT</button>
        </md-split-button>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},m={render:()=>e`
    <md-split-button>
      <span slot="leading-icon" class="material-symbols-outlined">share</span>
      Share
      <span slot="trailing-icon" class="material-symbols-outlined">more_vert</span>
    </md-split-button>
  `,parameters:{controls:{disable:!0}}};var r,u,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,b,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showIcon: true
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-split-button variant="filled">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Filled
      </md-split-button>
      <md-split-button variant="tonal">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Tonal
      </md-split-button>
      <md-split-button variant="outlined">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Outlined
      </md-split-button>
      <md-split-button variant="elevated">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Elevated
      </md-split-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <md-split-button size="xsmall">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XSmall (32dp)
      </md-split-button>
      <md-split-button size="small">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Small (36dp)
      </md-split-button>
      <md-split-button size="medium">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Medium (40dp)
      </md-split-button>
      <md-split-button size="large">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Large (48dp)
      </md-split-button>
      <md-split-button size="xlarge">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XLarge (56dp)
      </md-split-button>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,z,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,$,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...(O=($=i.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var k,E,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Save with Options (fixed primary action)</h3>
        <md-split-button
          @md-leading-click=\${() => console.log('Save clicked')}
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Menu item:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" data-value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" data-value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Send option:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" data-value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" data-value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" data-value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=\${(e: CustomEvent) => console.log('Download format:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" data-value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" data-value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" data-value="txt">Download as TXT</button>
        </md-split-button>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var I,W,X;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <md-split-button>
      <span slot="leading-icon" class="material-symbols-outlined">share</span>
      Share
      <span slot="trailing-icon" class="material-symbols-outlined">more_vert</span>
    </md-split-button>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const L=["Default","WithIcon","AllVariants","AllSizes","Disabled","Expanded","WithMenu","WithCustomTrailingIcon"];export{s as AllSizes,l as AllVariants,a as Default,o as Disabled,i as Expanded,m as WithCustomTrailingIcon,n as WithIcon,d as WithMenu,L as __namedExportsOrder,M as default};
