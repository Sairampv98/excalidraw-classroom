/**
 * Which chart the script editor is open on.
 *
 * Like the animation's state it is a jotai atom and not part of the document:
 * nothing here is saved with the drawing. The text of a chart's script is kept
 * as a **draft** while the panel is closed, so that closing it asks nothing and
 * loses nothing.
 */

import { atom, editorJotaiStore } from "../editor-jotai";

import type { ComponentType } from "react";

import type { FlowFitMode } from "../scene/flowChart";
import type { FlowChartShape } from "../scene/flowPresets";

export type FlowScriptDraft = {
  script: string;
  /** a built-in preset's id, or a custom preset's */
  presetId: string;
  fit: FlowFitMode;
  shape: FlowChartShape;
  /** whether arrows are drawn between the shapes */
  arrows: "own" | "none";
};

type FlowScriptEditorState = {
  /** an element of the chart that is edited; `null` while the panel is closed */
  anchorId: string | null;
};

export const flowScriptEditorAtom = atom<FlowScriptEditorState>({
  anchorId: null,
});

/**
 * What the host app adds to the panel: a section the library knows
 * nothing about, drawn under the node's shape. The picture of a node is one.
 */
export const flowEditorExtraAtom = atom<ComponentType | null>(null);

export const setFlowEditorExtra = (component: ComponentType | null) => {
  // a function given to `set` is an updater, so the component is returned by one
  editorJotaiStore.set(flowEditorExtraAtom, () => component);
};

/** opens the panel on the chart an element belongs to */
export const openFlowScriptEditor = (anchorId: string) => {
  editorJotaiStore.set(flowScriptEditorAtom, { anchorId });
};

export const closeFlowScriptEditor = () => {
  editorJotaiStore.set(flowScriptEditorAtom, { anchorId: null });
};

export const isFlowScriptEditorOpen = () =>
  editorJotaiStore.get(flowScriptEditorAtom).anchorId !== null;

/** what was typed for each chart, kept while the panel is closed */
const drafts = new Map<string, FlowScriptDraft>();

export const getFlowScriptDraft = (key: string) => drafts.get(key);

export const setFlowScriptDraft = (key: string, draft: FlowScriptDraft) => {
  drafts.set(key, draft);
};

export const clearFlowScriptDraft = (key: string) => {
  drafts.delete(key);
};
