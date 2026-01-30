import{b as e}from"./iframe-f7ju8_8X.js";import{n as le,e as se}from"./ref-BIZ_3_sH.js";import"./button-B8Ka1pL1.js";import"./segmented-button-set-ByK4bwXe.js";import"./preload-helper-Dp1pzeXC.js";import"./if-defined-em8Hxg-n.js";const fe={title:"MD3 Components/Buttons/FAB Menu",component:"md-fab-menu",tags:["autodocs","new"],parameters:{docs:{description:{component:`
## Wann verwenden?

Das FAB Menu erweitert den Standard-FAB um ein **Menü mit verwandten Aktionen**. Es ersetzt das "Speed Dial"-Pattern und gestapelte kleine FABs durch eine einheitliche, expressive Komponente.

Ideal für:
- **Primäre Aktion mit Varianten** - "Erstellen" mit Optionen für Dokument, Foto, Notiz
- **Kontextuelle Aktionen** - Verschiedene Arten von Inhalten hinzufügen
- **Gruppierte Funktionen** - Zusammengehörige Aktionen an einem Ort

## MD3 Expressive Spezifikationen

| Aspekt | Spezifikation |
|--------|---------------|
| **Menü-Items** | 2-6 Items (MD3-Empfehlung) |
| **FAB-Größen** | Small (40dp), Medium (56dp), Large (96dp) |
| **Icon-Animation** | + morpht zu × beim Öffnen |
| **Touch Target** | 48dp Minimum pro Item |
| **Ausrichtung** | Start, Center, End |

## Struktur

\`\`\`html
<md-fab-menu variant="primary" size="medium">
  <md-fab-menu-item value="photo" label="Foto">
    <span slot="icon">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="document" label="Dokument">
    <span slot="icon">description</span>
  </md-fab-menu-item>
</md-fab-menu>
\`\`\`

## Best Practices

- **2-6 Items:** Mehr als 6 Items → verwende ein anderes Pattern (z.B. Bottom Sheet)
- **Verwandte Aktionen:** Alle Menü-Items sollten thematisch zusammengehören
- **Klare Labels:** Kurze, aktionsorientierte Labels verwenden
- **Konsistente Position:** Typischerweise unten rechts positioniert

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`open\` | \`{ originalEvent }\` | Wird ausgelöst, wenn das Menü geöffnet wird |
| \`close\` | \`{ originalEvent }\` | Wird ausgelöst, wenn das Menü geschlossen wird |
| \`select\` | \`{ originalEvent, value, label }\` | Wird ausgelöst, wenn ein Menü-Item geklickt wird |
        `}}},argTypes:{variant:{control:"select",options:["surface","primary","secondary","tertiary"],description:"The color variant of the FAB",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the FAB",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the FAB menu is disabled",table:{defaultValue:{summary:"false"}}},lowered:{control:"boolean",description:"Whether the FAB has lowered elevation",table:{defaultValue:{summary:"false"}}},alignment:{control:"select",options:["start","center","end"],description:"Menu alignment relative to the FAB",table:{defaultValue:{summary:"end"}}}},args:{variant:"primary",size:"medium",disabled:!1,lowered:!1,alignment:"end"},render:a=>e`
    <div style="height: 300px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu
        variant=${a.variant}
        size=${a.size}
        ?disabled=${a.disabled}
        ?lowered=${a.lowered}
        alignment=${a.alignment}
        aria-label="Create menu"
      >
        <md-fab-menu-item value="photo" label="Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="note" label="Note">
          <span class="material-symbols-outlined">note_add</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `},m={},o={render:()=>e`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 280px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu variant="surface" aria-label="Surface FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Surface</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="primary" aria-label="Primary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Primary</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="secondary" aria-label="Secondary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Secondary</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="tertiary" aria-label="Tertiary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Tertiary</div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},d={render:()=>e`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 300px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu size="small" aria-label="Small FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Small (40dp)</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu size="medium" aria-label="Medium FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Medium (56dp)</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu size="large" aria-label="Large FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Large (96dp)</div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},r={render:()=>e`
    <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 300px; padding: 24px 48px;">
      <div style="text-align: center;">
        <md-fab-menu alignment="start" aria-label="Start aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Start</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu alignment="center" aria-label="Center aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Center</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu alignment="end" aria-label="End aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">End</div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},u={render:()=>e`
    <div style="height: 280px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="Quick actions">
        <md-fab-menu-item value="photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="audio">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"Menü-Items können auch ohne Labels dargestellt werden, wenn die Icons selbsterklärend sind."}}}},p={render:()=>e`
    <div style="height: 350px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="Create content">
        <md-fab-menu-item value="photo" label="Take Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Record Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="New Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="folder" label="Create Folder">
          <span class="material-symbols-outlined">create_new_folder</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"Mit Labels versehene Menü-Items bieten mehr Kontext für die Aktionen."}}}},c={render:()=>e`
    <div style="height: 450px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="All actions">
        <md-fab-menu-item value="photo" label="Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="audio" label="Audio">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="folder" label="Folder">
          <span class="material-symbols-outlined">folder</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="link" label="Link">
          <span class="material-symbols-outlined">link</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"MD3 empfiehlt maximal 6 Menü-Items. Bei mehr Items sollte ein anderes Pattern verwendet werden."}}}},b={render:()=>e`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 280px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu aria-label="Normal elevation">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Normal</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu lowered aria-label="Lowered elevation">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Lowered</div>
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}},f={args:{disabled:!0}},v={render:()=>e`
    <div style="position: relative; width: 100%; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <md-fab-menu
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add content"
      >
        <md-fab-menu-item value="photo" label="Take Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Record Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="note" label="Add Note">
          <span class="material-symbols-outlined">note_add</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"Das FAB Menu wird typischerweise mit `position: fixed` unten rechts positioniert."}}}},g={render:()=>e`
    <div style="position: relative; width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; overflow: hidden;">
      <div style="padding: 24px; color: white;">
        <h2 style="margin: 0 0 8px; font-size: 24px; font-weight: 500;">My Notes</h2>
        <p style="margin: 0; opacity: 0.8;">Create new content</p>
      </div>
      <div style="padding: 16px;">
        <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 4px; font-size: 16px; color: #333;">Meeting Notes</h3>
          <p style="margin: 0; font-size: 14px; color: #666;">Project kickoff discussion...</p>
        </div>
        <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 4px; font-size: 16px; color: #333;">Shopping List</h3>
          <p style="margin: 0; font-size: 14px; color: #666;">Groceries for the week...</p>
        </div>
      </div>
      <md-fab-menu
        variant="tertiary"
        style="position: absolute; bottom: 24px; right: 24px;"
        aria-label="Create new"
      >
        <md-fab-menu-item value="note" label="Text Note">
          <span class="material-symbols-outlined">edit_note</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="checklist" label="Checklist">
          <span class="material-symbols-outlined">checklist</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="voice" label="Voice Note">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="photo" label="Photo Note">
          <span class="material-symbols-outlined">add_a_photo</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  `,parameters:{controls:{disable:!0},docs:{description:{story:"Ein realistisches Beispiel einer Notes-App mit FAB Menu für verschiedene Notiz-Typen."}}}},y={render:()=>{const a=se();return queueMicrotask(()=>{const n=a.value;if(n&&!n._listenerAttached){n._listenerAttached=!0;const h=(x,i,l)=>{var s;const t=(s=n.closest(".event-demo-container"))==null?void 0:s.querySelector(".event-output");if(t){const ie=`<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}</span> <span style="color: ${i}; font-weight: 600;">${x}</span>${l?`
${l}`:""}</div>`,w=t.querySelector(".placeholder");w&&w.remove(),t.insertAdjacentHTML("afterbegin",ie)}};n.addEventListener("open",()=>{h("open","#4fc3f7"),console.log("open")}),n.addEventListener("close",()=>{h("close","#ffb74d"),console.log("close")}),n.addEventListener("select",x=>{const i=x,{value:l,label:t}=i.detail,s=`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${l}"</span>, <span style="color: #90caf9;">label</span>: <span style="color: #ef9a9a;">"${t}"</span> }`;h("select","#81c784",s),console.log("select:",i.detail)})}}),e`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke das FAB Menu und die Menü-Items, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="height: 300px; display: flex; align-items: flex-end; justify-content: center;">
          <md-fab-menu ${le(a)} aria-label="Test menu">
            <md-fab-menu-item value="photo" label="Take Photo">
              <span class="material-symbols-outlined">photo_camera</span>
            </md-fab-menu-item>
            <md-fab-menu-item value="video" label="Record Video">
              <span class="material-symbols-outlined">videocam</span>
            </md-fab-menu-item>
            <md-fab-menu-item value="document" label="New Document">
              <span class="material-symbols-outlined">description</span>
            </md-fab-menu-item>
          </md-fab-menu>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 150px; max-height: 250px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke das FAB Menu, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab-menu id="action-menu" aria-label="Actions"&gt;
  &lt;md-fab-menu-item value="photo" label="Take Photo"&gt;
    &lt;span class="material-symbols-outlined"&gt;photo_camera&lt;/span&gt;
  &lt;/md-fab-menu-item&gt;
  &lt;md-fab-menu-item value="video" label="Record Video"&gt;
    &lt;span class="material-symbols-outlined"&gt;videocam&lt;/span&gt;
  &lt;/md-fab-menu-item&gt;
&lt;/md-fab-menu&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fabMenu = document.querySelector('#action-menu');

fabMenu.addEventListener('open', () =&gt; {
  console.log('Menu opened');
});

fabMenu.addEventListener('close', () =&gt; {
  console.log('Menu closed');
});

fabMenu.addEventListener('select', (e) =&gt; {
  console.log('Selected:', e.detail.value, e.detail.label);
  // Output: "photo", "Take Photo"
});</code></pre>
        </div>
      </div>
    `},parameters:{controls:{disable:!0},docs:{description:{story:`
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`open\` | \`{ originalEvent }\` | Wird ausgelöst, wenn das Menü geöffnet wird |
| \`close\` | \`{ originalEvent }\` | Wird ausgelöst, wenn das Menü geschlossen wird |
| \`select\` | \`{ originalEvent, value, label }\` | Wird ausgelöst, wenn ein Menü-Item geklickt wird |

### Beispiel-Code

\`\`\`html
<md-fab-menu id="action-menu" aria-label="Actions">
  <md-fab-menu-item value="photo" label="Take Photo">
    <span class="material-symbols-outlined">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="video" label="Record Video">
    <span class="material-symbols-outlined">videocam</span>
  </md-fab-menu-item>
</md-fab-menu>
\`\`\`

\`\`\`javascript
const fabMenu = document.querySelector('#action-menu');

fabMenu.addEventListener('open', () => {
  console.log('Menu opened');
});

fabMenu.addEventListener('close', () => {
  console.log('Menu closed');
});

fabMenu.addEventListener('select', (e) => {
  console.log('Selected:', e.detail.value, e.detail.label);
  // Output: "photo", "Take Photo"
});
\`\`\`
        `}}}};var M,k,A;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,z,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 280px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu variant="surface" aria-label="Surface FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Surface</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="primary" aria-label="Primary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Primary</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="secondary" aria-label="Secondary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Secondary</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu variant="tertiary" aria-label="Tertiary FAB menu">
          <md-fab-menu-item value="edit" label="Edit">
            <span class="material-symbols-outlined">edit</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="share" label="Share">
            <span class="material-symbols-outlined">share</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Tertiary</div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var B,L,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 300px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu size="small" aria-label="Small FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Small (40dp)</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu size="medium" aria-label="Medium FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Medium (56dp)</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu size="large" aria-label="Large FAB menu">
          <md-fab-menu-item value="photo" label="Photo">
            <span class="material-symbols-outlined">photo_camera</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="video" label="Video">
            <span class="material-symbols-outlined">videocam</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Large (96dp)</div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,F,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 300px; padding: 24px 48px;">
      <div style="text-align: center;">
        <md-fab-menu alignment="start" aria-label="Start aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Start</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu alignment="center" aria-label="Center aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Center</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu alignment="end" aria-label="End aligned menu">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">End</div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(F=r.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var D,I,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 280px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="Quick actions">
        <md-fab-menu-item value="photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="audio">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Menü-Items können auch ohne Labels dargestellt werden, wenn die Icons selbsterklärend sind.'
      }
    }
  }
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,O,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 350px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="Create content">
        <md-fab-menu-item value="photo" label="Take Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Record Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="New Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="folder" label="Create Folder">
          <span class="material-symbols-outlined">create_new_folder</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Mit Labels versehene Menü-Items bieten mehr Kontext für die Aktionen.'
      }
    }
  }
}`,...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var $,j,R;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 450px; display: flex; align-items: flex-end; justify-content: center; padding: 24px;">
      <md-fab-menu aria-label="All actions">
        <md-fab-menu-item value="photo" label="Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="audio" label="Audio">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="document" label="Document">
          <span class="material-symbols-outlined">description</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="folder" label="Folder">
          <span class="material-symbols-outlined">folder</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="link" label="Link">
          <span class="material-symbols-outlined">link</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'MD3 empfiehlt maximal 6 Menü-Items. Bei mehr Items sollte ein anderes Pattern verwendet werden.'
      }
    }
  }
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var W,K,q;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 48px; align-items: flex-end; height: 280px; padding: 24px;">
      <div style="text-align: center;">
        <md-fab-menu aria-label="Normal elevation">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Normal</div>
      </div>
      <div style="text-align: center;">
        <md-fab-menu lowered aria-label="Lowered elevation">
          <md-fab-menu-item value="a" label="Option A">
            <span class="material-symbols-outlined">star</span>
          </md-fab-menu-item>
          <md-fab-menu-item value="b" label="Option B">
            <span class="material-symbols-outlined">favorite</span>
          </md-fab-menu-item>
        </md-fab-menu>
        <div style="font-size: 12px; color: #666; margin-top: 8px;">Lowered</div>
      </div>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var H,G,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,J,U;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position: relative; width: 100%; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <md-fab-menu
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add content"
      >
        <md-fab-menu-item value="photo" label="Take Photo">
          <span class="material-symbols-outlined">photo_camera</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="video" label="Record Video">
          <span class="material-symbols-outlined">videocam</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="note" label="Add Note">
          <span class="material-symbols-outlined">note_add</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Das FAB Menu wird typischerweise mit \`position: fixed\` unten rechts positioniert.'
      }
    }
  }
}`,...(U=(J=v.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var X,Y,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position: relative; width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; overflow: hidden;">
      <div style="padding: 24px; color: white;">
        <h2 style="margin: 0 0 8px; font-size: 24px; font-weight: 500;">My Notes</h2>
        <p style="margin: 0; opacity: 0.8;">Create new content</p>
      </div>
      <div style="padding: 16px;">
        <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 4px; font-size: 16px; color: #333;">Meeting Notes</h3>
          <p style="margin: 0; font-size: 14px; color: #666;">Project kickoff discussion...</p>
        </div>
        <div style="background: white; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 4px; font-size: 16px; color: #333;">Shopping List</h3>
          <p style="margin: 0; font-size: 14px; color: #666;">Groceries for the week...</p>
        </div>
      </div>
      <md-fab-menu
        variant="tertiary"
        style="position: absolute; bottom: 24px; right: 24px;"
        aria-label="Create new"
      >
        <md-fab-menu-item value="note" label="Text Note">
          <span class="material-symbols-outlined">edit_note</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="checklist" label="Checklist">
          <span class="material-symbols-outlined">checklist</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="voice" label="Voice Note">
          <span class="material-symbols-outlined">mic</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="photo" label="Photo Note">
          <span class="material-symbols-outlined">add_a_photo</span>
        </md-fab-menu-item>
      </md-fab-menu>
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Ein realistisches Beispiel einer Notes-App mit FAB Menu für verschiedene Notiz-Typen.'
      }
    }
  }
}`,...(ee=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,ne,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const menuRef = createRef<Element>();
    const setupListener = () => {
      const el = menuRef.value as HTMLElement | undefined;
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

            // Prepend new event at top
            const placeholder = output.querySelector('.placeholder');
            if (placeholder) {
              placeholder.remove();
            }
            output.insertAdjacentHTML('afterbegin', eventLine);
          }
        };
        el.addEventListener('open', () => {
          addEvent('open', '#4fc3f7');
          console.log('open');
        });
        el.addEventListener('close', () => {
          addEvent('close', '#ffb74d');
          console.log('close');
        });
        el.addEventListener('select', (event: Event) => {
          const customEvent = event as CustomEvent;
          const {
            value,
            label
          } = customEvent.detail;
          const details = \`<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"\${value}"</span>, <span style="color: #90caf9;">label</span>: <span style="color: #ef9a9a;">"\${label}"</span> }\`;
          addEvent('select', '#81c784', details);
          console.log('select:', customEvent.detail);
        });
      }
    };
    queueMicrotask(setupListener);
    return html\`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke das FAB Menu und die Menü-Items, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="height: 300px; display: flex; align-items: flex-end; justify-content: center;">
          <md-fab-menu \${ref(menuRef)} aria-label="Test menu">
            <md-fab-menu-item value="photo" label="Take Photo">
              <span class="material-symbols-outlined">photo_camera</span>
            </md-fab-menu-item>
            <md-fab-menu-item value="video" label="Record Video">
              <span class="material-symbols-outlined">videocam</span>
            </md-fab-menu-item>
            <md-fab-menu-item value="document" label="New Document">
              <span class="material-symbols-outlined">description</span>
            </md-fab-menu-item>
          </md-fab-menu>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 150px; max-height: 250px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke das FAB Menu, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab-menu id="action-menu" aria-label="Actions"&gt;
  &lt;md-fab-menu-item value="photo" label="Take Photo"&gt;
    &lt;span class="material-symbols-outlined"&gt;photo_camera&lt;/span&gt;
  &lt;/md-fab-menu-item&gt;
  &lt;md-fab-menu-item value="video" label="Record Video"&gt;
    &lt;span class="material-symbols-outlined"&gt;videocam&lt;/span&gt;
  &lt;/md-fab-menu-item&gt;
&lt;/md-fab-menu&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fabMenu = document.querySelector('#action-menu');

fabMenu.addEventListener('open', () =&gt; {
  console.log('Menu opened');
});

fabMenu.addEventListener('close', () =&gt; {
  console.log('Menu closed');
});

fabMenu.addEventListener('select', (e) =&gt; {
  console.log('Selected:', e.detail.value, e.detail.label);
  // Output: "photo", "Take Photo"
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
| \\\`open\\\` | \\\`{ originalEvent }\\\` | Wird ausgelöst, wenn das Menü geöffnet wird |
| \\\`close\\\` | \\\`{ originalEvent }\\\` | Wird ausgelöst, wenn das Menü geschlossen wird |
| \\\`select\\\` | \\\`{ originalEvent, value, label }\\\` | Wird ausgelöst, wenn ein Menü-Item geklickt wird |

### Beispiel-Code

\\\`\\\`\\\`html
<md-fab-menu id="action-menu" aria-label="Actions">
  <md-fab-menu-item value="photo" label="Take Photo">
    <span class="material-symbols-outlined">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="video" label="Record Video">
    <span class="material-symbols-outlined">videocam</span>
  </md-fab-menu-item>
</md-fab-menu>
\\\`\\\`\\\`

\\\`\\\`\\\`javascript
const fabMenu = document.querySelector('#action-menu');

fabMenu.addEventListener('open', () => {
  console.log('Menu opened');
});

fabMenu.addEventListener('close', () => {
  console.log('Menu closed');
});

fabMenu.addEventListener('select', (e) => {
  console.log('Selected:', e.detail.value, e.detail.label);
  // Output: "photo", "Take Photo"
});
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ve=["Default","AllVariants","AllSizes","MenuAlignments","IconOnlyItems","WithLabels","MaxItems","Lowered","Disabled","PositionedExample","RealWorldExample","EventHandling"];export{d as AllSizes,o as AllVariants,m as Default,f as Disabled,y as EventHandling,u as IconOnlyItems,b as Lowered,c as MaxItems,r as MenuAlignments,v as PositionedExample,g as RealWorldExample,p as WithLabels,ve as __namedExportsOrder,fe as default};
