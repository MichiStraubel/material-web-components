import{b as e}from"./iframe-DN5iL-vM.js";import"./segmented-button-set-DZ-RQz1P.js";import"./preload-helper-BmHEkTjc.js";const oe={title:"Deprecated/Segmented Button",component:"md-segmented-button-set",tags:["autodocs","deprecated"],argTypes:{selectionMode:{control:"select",options:["single","multi"],description:"Selection mode: single (radio) or multi (checkbox)",table:{defaultValue:{summary:"single"}}},disabled:{control:"boolean",description:"Whether all segments are disabled",table:{defaultValue:{summary:"false"}}},density:{control:"select",options:["default","compact"],description:"Density variant",table:{defaultValue:{summary:"default"}}}},args:{selectionMode:"single",disabled:!1,density:"default"},render:t=>e`
    <md-segmented-button-set
      selection-mode=${t.selectionMode}
      ?disabled=${t.disabled}
      density=${t.density}
      aria-label="View options"
    >
      <md-segmented-button value="day" selected>Day</md-segmented-button>
      <md-segmented-button value="week">Week</md-segmented-button>
      <md-segmented-button value="month">Month</md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{docs:{description:{component:`@deprecated Use md-button-group and md-toggle-button instead.
Segmented buttons are deprecated in MD3 Expressive in favor of connected button groups.`}}}},n={args:{selectionMode:"single"}},s={args:{selectionMode:"multi"},render:t=>e`
    <md-segmented-button-set
      selection-mode=${t.selectionMode}
      ?disabled=${t.disabled}
      density=${t.density}
      aria-label="Text formatting"
    >
      <md-segmented-button value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-segmented-button>
      <md-segmented-button value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-segmented-button>
      <md-segmented-button value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-segmented-button>
    </md-segmented-button-set>
  `},o={render:()=>e`
    <md-segmented-button-set aria-label="Calendar view">
      <md-segmented-button value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-segmented-button>
      <md-segmented-button value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-segmented-button>
      <md-segmented-button value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},d={render:()=>e`
    <md-segmented-button-set selection-mode="multi" aria-label="Text alignment">
      <md-segmented-button value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-segmented-button>
      <md-segmented-button value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-segmented-button>
      <md-segmented-button value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-segmented-button>
      <md-segmented-button value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},a={render:()=>e`
    <md-segmented-button-set aria-label="Price range">
      <md-segmented-button value="cheap" selected>$</md-segmented-button>
      <md-segmented-button value="moderate">$$</md-segmented-button>
      <md-segmented-button value="expensive">$$$</md-segmented-button>
      <md-segmented-button value="luxury">$$$$</md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},m={render:()=>e`
    <md-segmented-button-set aria-label="Mode">
      <md-segmented-button value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-segmented-button>
      <md-segmented-button value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},l={render:()=>e`
    <md-segmented-button-set aria-label="Rating">
      <md-segmented-button value="1" selected>1</md-segmented-button>
      <md-segmented-button value="2">2</md-segmented-button>
      <md-segmented-button value="3">3</md-segmented-button>
      <md-segmented-button value="4">4</md-segmented-button>
      <md-segmented-button value="5">5</md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},i={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">With checkmark (default)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc">
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Without checkmark (no-checkmark)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc" no-checkmark>
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},u={args:{disabled:!0}},r={render:()=>e`
    <md-segmented-button-set aria-label="Options">
      <md-segmented-button value="a" selected>Option A</md-segmented-button>
      <md-segmented-button value="b" disabled>Option B (disabled)</md-segmented-button>
      <md-segmented-button value="c">Option C</md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},c={args:{density:"compact"},render:t=>e`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Default density (40dp)</h4>
        <md-segmented-button-set density="default" aria-label="Default density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Compact density (32dp)</h4>
        <md-segmented-button-set density="compact" aria-label="Compact density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},b={render:()=>e`
    <md-segmented-button-set aria-label="Single option">
      <md-segmented-button value="only" selected>Only Option</md-segmented-button>
    </md-segmented-button-set>
  `,parameters:{controls:{disable:!0}}},g={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-segmented-button-set
        aria-label="Interactive example"
        @md-change=${t=>{const p=document.getElementById("event-output");p&&(p.textContent=`Selected: ${t.detail.selected.join(", ")||"none"}`)}}
      >
        <md-segmented-button value="option1" selected>Option 1</md-segmented-button>
        <md-segmented-button value="option2">Option 2</md-segmented-button>
        <md-segmented-button value="option3">Option 3</md-segmented-button>
      </md-segmented-button-set>
      <div id="event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,x,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multi'
  },
  render: args => html\`
    <md-segmented-button-set
      selection-mode=\${args.selectionMode}
      ?disabled=\${args.disabled}
      density=\${args.density}
      aria-label="Text formatting"
    >
      <md-segmented-button value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-segmented-button>
      <md-segmented-button value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-segmented-button>
      <md-segmented-button value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-segmented-button>
    </md-segmented-button-set>
  \`
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,O,$;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Calendar view">
      <md-segmented-button value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-segmented-button>
      <md-segmented-button value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-segmented-button>
      <md-segmented-button value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(O=o.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var _,C,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set selection-mode="multi" aria-label="Text alignment">
      <md-segmented-button value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-segmented-button>
      <md-segmented-button value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-segmented-button>
      <md-segmented-button value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-segmented-button>
      <md-segmented-button value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,D,W;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Price range">
      <md-segmented-button value="cheap" selected>$</md-segmented-button>
      <md-segmented-button value="moderate">$$</md-segmented-button>
      <md-segmented-button value="expensive">$$$</md-segmented-button>
      <md-segmented-button value="luxury">$$$$</md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(D=a.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var F,B,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Mode">
      <md-segmented-button value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-segmented-button>
      <md-segmented-button value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var z,T,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Rating">
      <md-segmented-button value="1" selected>1</md-segmented-button>
      <md-segmented-button value="2">2</md-segmented-button>
      <md-segmented-button value="3">3</md-segmented-button>
      <md-segmented-button value="4">4</md-segmented-button>
      <md-segmented-button value="5">5</md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,j,N;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">With checkmark (default)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc">
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Without checkmark (no-checkmark)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc" no-checkmark>
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var V,H,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,P,R;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Options">
      <md-segmented-button value="a" selected>Option A</md-segmented-button>
      <md-segmented-button value="b" disabled>Option B (disabled)</md-segmented-button>
      <md-segmented-button value="c">Option C</md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(P=r.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,q,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Default density (40dp)</h4>
        <md-segmented-button-set density="default" aria-label="Default density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Compact density (32dp)</h4>
        <md-segmented-button-set density="compact" aria-label="Compact density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => html\`
    <md-segmented-button-set aria-label="Single option">
      <md-segmented-button value="only" selected>Only Option</md-segmented-button>
    </md-segmented-button-set>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-segmented-button-set
        aria-label="Interactive example"
        @md-change=\${(e: CustomEvent) => {
    const output = document.getElementById('event-output');
    if (output) {
      output.textContent = \`Selected: \${e.detail.selected.join(', ') || 'none'}\`;
    }
  }}
      >
        <md-segmented-button value="option1" selected>Option 1</md-segmented-button>
        <md-segmented-button value="option2">Option 2</md-segmented-button>
        <md-segmented-button value="option3">Option 3</md-segmented-button>
      </md-segmented-button-set>
      <div id="event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const de=["SingleSelect","MultiSelect","WithIcons","IconOnly","TextOnly","TwoSegments","FiveSegments","WithCheckmarks","Disabled","DisabledSegment","Compact","SingleSegment","EventHandling"];export{c as Compact,u as Disabled,r as DisabledSegment,g as EventHandling,l as FiveSegments,d as IconOnly,s as MultiSelect,b as SingleSegment,n as SingleSelect,a as TextOnly,m as TwoSegments,i as WithCheckmarks,o as WithIcons,de as __namedExportsOrder,oe as default};
