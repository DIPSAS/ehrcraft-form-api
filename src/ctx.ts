/**
 * The currently supported mime types for rendering content
 */
export type ViewMimeType = "text/markdown" | "text/html";
export interface FormViewContent {
  mimeType: ViewMimeType;
  content: string;
}

/**
 * Typed definition of the callback
 */
export type FormViewCallback = () => FormViewContent;
/**
 * The supported callback types for context
 */
export type CtxCallBackEvent = "OnRender";
export interface CTX {
  isReadonly(): boolean;
  isNew(): boolean;
  formMode(): FormMode;
  preferredLanguage(): string;
  /**
   * Callback/EventListener on Form Context. Added to support the possibility to add a custom view type for the content
   * @param event the event type to register for
   * @param callback the callback function to be implemented
   */
  addCallback(event: CtxCallBackEvent, callback: FormViewCallback): void;
}


export enum FormMode {
  Default = 0,
  InfieldTopAlignedLabels = 1,
}
