import type { BaseEditor } from "slate";
import type { HistoryEditor } from "slate-history";
import type { ReactEditor } from "slate-react";

export type ElementTypes =
  | "quote"
  | "bulleted-list"
  | "heading-one"
  | "heading-two"
  | "list-item"
  | "numbered-list"
  | "paragraph";

export type EmphasisTypes = "bold" | "italic" | "underline" | "code";

export type CustomElement = { type: ElementTypes; children: CustomText[] };

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
};

declare module "#types/slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
