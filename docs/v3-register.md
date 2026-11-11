# Version 3 feature register

This register describes usable entry points. Assistant tool names below are proposals for the assistant task, not tools implemented here.

## v3b-0-flow-panel

| Word or control | Row | File | Clip idea | Proposed assistant tool |
| --- | --- | --- | --- | --- |
| Look tab: layout, selection, shape, fit and colours | | packages/excalidraw/components/FlowAnimationBar.tsx | Select one node and change the chart look | set_flow_look |
| Look tab table: a colour chip and a neon switch for Shape, Text, Animation and Arrow, one shared swatch pad (the colour presets are removed) | | packages/excalidraw/components/FlowAnimationBar.tsx | Colour every part of a chart from one table | set_flow_colours |
| Hex code box under the colour pad of the Look tab (3 or 6 digits, empty is the default) | | packages/excalidraw/components/flowPanel/FlowHexInput.tsx | Type a brand colour for a part | set_flow_colours |
| Chart choice as a tab-like button at the start of the tabs | | packages/excalidraw/components/FlowAnimationBar.tsx | Choose which chart of a combo the tabs act on | select_flow_target |
| Animation tab: nodes, arrows, speed, step and loop | | packages/excalidraw/components/FlowAnimationBar.tsx | Combine a node highlight with arrow tokens | set_flow_animation |
| Script tab: preset, script, validation, Apply and examples | | packages/excalidraw/components/FlowScriptEditor.tsx | Correct a script line and apply once | edit_flow_chart |
| Present in class tab: show in class and preview class loop | | packages/excalidraw/components/FlowAnimationBar.tsx | Compare editor preview with class visibility | set_flow_class_visibility |
| Save as preset tab | | packages/excalidraw/components/flowPanel/FlowPresetSave.tsx | Name a script template and find it in Flow | save_flow_preset |
| Camera tab: Fly the view to each step | | packages/excalidraw/components/FlowAnimationBar.tsx | Switch between a still view and flying steps | set_flow_camera |
| Export tab: GIF, WebP, MP4, options, progress and Stop | | packages/excalidraw/components/FlowExportPanel.tsx | Export an animation and cancel another | export_animation |
| This chart dropdown | | packages/excalidraw/components/FlowAnimationBar.tsx | Locate the chart target before changing options | select_flow_target |
| Add a chart to a combo: single-chart explanation | | packages/excalidraw/components/FlowAnimationBar.tsx | Show what the plus means before combos are available | describe_flow_combo |
| Four-dot grip: move, edge dock, arrow-key movement, double-click follow | | packages/excalidraw/components/FlowAnimationBar.tsx | Put the panel beside the chart using mouse and keyboard | place_flow_panel |
| Close into pill; Enter or Space to reopen | | packages/excalidraw/components/FlowAnimationBar.tsx | Collapse during a lesson and reopen without stopping | collapse_flow_panel |
| Last tab and panel place remembered locally | | packages/excalidraw/components/flowPanel/FlowPanelTabs.tsx | Reopen and continue from the previous tab | select_flow_tab |
| More animation options | | packages/excalidraw/components/flowPanel/FlowAnimationOptions.tsx | Change a draft while the board stays unchanged | preview_flow_animation |
| Nodes and Arrow expanded sub-tabs | | packages/excalidraw/components/flowPanel/FlowAnimationOptions.tsx | Compare colours, timing and mark styles in the preview | preview_flow_animation |
| Meta node, Connect / remove arrows and Background information | | packages/excalidraw/components/flowPanel/FlowAnimationOptions.tsx | Inspect the chart's parts, connections and current background | describe_flow_chart |
| Apply once; undo and redo the option draft | | packages/excalidraw/components/flowPanel/FlowAnimationOptions.tsx | Apply several changes, then undo once | apply_flow_options |
| Close or Escape discards the option draft and restores focus | | packages/excalidraw/components/flowPanel/FlowExpandedWindow.tsx | Try an animation, cancel, and continue by keyboard | discard_flow_options |
| Shared chart preview with its own camera and animation loop | | packages/excalidraw/components/flowPanel/FlowChartPreview.tsx | Preview a large chart without moving the board | preview_flow_chart |
| Script and Save as preset tabs keep the panel on its chart after Apply | | packages/excalidraw/components/FlowAnimationBar.tsx | Apply a long script and keep editing the same chart | pin_flow_panel |
| Generic expanded window with data-driven sub-tabs | | packages/excalidraw/components/flowPanel/FlowExpandedWindow.tsx | Reuse the same window for the next option engine | open_flow_options |

The executable old-control inventory is in `excalidraw-app/tests/flowPanelTabs.test.tsx`; the existing bar, pill, script, appearance, preset and exporter suites retain the detailed behaviour checks. Combo operations, new meta nodes, connect/remove editing, chart backgrounds, composed camera, new animation engines, Mermaid and PowerPoint remain the tasks named by their SPEC rows.

## v3b-7a-win7-setup

| What | Row | File | Clip idea | Assistant tool name |
| --- | --- | --- | --- | --- |
| the status `SCREEN_COPY` (the VS Code mirror's picture on Windows 7 is a copy of the screen) | | `packages/vscode-bridge/extension/media/capture.ps1` | "The mirror on an old classroom computer": the note under the picture, the editor kept in front | `describe_mirror_state` (reads: live / screen copy / covered / not visible) |
| the note "Screen copy: keep VS Code's window visible and not covered" (teacher's view only) | | `packages/excalidraw/components/MirrorPanelSurface.tsx` | same clip | - (read-only note) |
| the state `SCREEN_COPY_COVERED` ("VS Code's window is covered by another window - bring it to the front and keep it uncovered") | | `packages/vscode-bridge/extension/src/windowCapture.ts` | same clip: cover the editor, see the picture stop | `describe_mirror_state` |
| the main menu entry **Set up my editor** | | `excalidraw-app/components/AppMainMenu.tsx` | "Set up VS Code for the board from the page": menu, ticks, the file, the plan window | `open_editor_setup` (opens the dialog; the person still presses Set up) |
| the button **Set up my editor** in the VS Code mirror's connection state | | `packages/excalidraw/components/MirrorPanelSurface.tsx` | same clip | `open_editor_setup` |
| the dialog: editor (auto / VS Code / VSCodium), language groups (Python, C and C++, Java, JavaScript and TypeScript), profile name | | `excalidraw-app/setup/EditorSetupDialog.tsx` | same clip | `build_editor_setup_link` (editor, profile, groups -> the link, the command; never installs) |
| the link `excalidraw-setup://install?editor=..&profile=..&groups=..&vsix=..` | | `excalidraw-app/setup/editorSetup.ts` (`buildSetupLink`) | same clip | `build_editor_setup_link` |
| the file **ExcalidrawSetup.cmd** (download) | | `excalidraw-app/setup/editorSetup.ts` (`buildCmdFile`) | same clip | `build_editor_setup_link` (also returns the file's text) |
| the PowerShell command to copy | | `excalidraw-app/setup/editorSetup.ts` (`buildPowerShellCommand`) | same clip | `build_editor_setup_link` |
| `/setup/Bootstrap.ps1`, `EditorSetup.ps1`, `Open-SetupLink.ps1`, `Register-SetupLink.ps1`, `excalidraw-bridge.vsix` served by the page | | `scripts/setup/publish-editor-setup.mjs` (`public/setup/`) | - | `list_editor_setup_files` (reads the folder; names and sizes) |
| the pairing question in VS Code: "Allow the whiteboard at 127.0.0.1:3061 to connect?" (button Allow) | | `packages/vscode-bridge/extension/src/pairing.ts`, `extension.ts` | "Connect without copying a token": press Connect with the field empty, answer in VS Code | `connect_editor` (presses Connect with no token; the person answers in VS Code) |
| the command **Excalidraw Bridge: Forget the whiteboards that were allowed to connect** | | `packages/vscode-bridge/extension/package.json` | same clip (the end) | - (VS Code command) |
| the message `bridge:pair` (first frame, no token) | | `packages/vscode-bridge/bridge/src/protocol.ts` | - | - |
| the host's check before a virtual machine is started: `installer/win7/vm/check-host-disk.ps1 -Path D:\Hyper-V -MinGB 15` | | `installer/win7/vm/check-host-disk.ps1` | - | - (developer tool) |
| the proof script `installer/win7/vm/ps2-editor.ps1 [-Software]` (now says how the picture came and its brightness) | | `installer/win7/vm/ps2-editor.ps1` | - | - (developer tool) |
| the editor choice in the setup window (the one installed / VS Code / VSCodium / Both), ticked as the page said | | `installer/editor-setup/Open-SetupLink.ps1` | same clip: setting up both editors at once | `build_editor_setup_link` (the `editor` option; `both` is a window choice) |
| `Open-SetupLink.ps1 -Link <link> -Layout` (prints where every control of the window is; for tests) | | `installer/editor-setup/Open-SetupLink.ps1` | - | - (developer tool) |
| the message "The bridge extension in VS Code is an old version ... press Set up my editor" | | `packages/vscode-bridge/bridge/src/client.ts` | same clip (what an old bridge shows) | `describe_mirror_state` |
