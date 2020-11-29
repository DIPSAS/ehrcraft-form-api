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
export interface FormViewCallback {
  (): FormViewContent;
}
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
/**
 * @deprecated this is not used anymore and will be removed in a later version
 */
export class MockCTX implements CTX {
  constructor(
    private readonly: boolean = false,
    private newVersion: boolean = false,
    private myFormMode: FormMode = FormMode.Default,
    private myPreferredLanguage: string = "no"
  ) {}
  addCallback(event: "OnRender", callback: FormViewCallback): void {
    const view = callback();
    console.log(`Mime-Type: ${view.mimeType}`);
  }
  isReadonly(): boolean {
    return this.readonly;
  }
  isNew(): boolean {
    return this.newVersion;
  }
  formMode(): FormMode {
    return this.myFormMode;
  }
  preferredLanguage(): string {
    return this.myPreferredLanguage;
  }
}

export enum FormMode {
  Default = 0,
  InfieldTopAlignedLabels = 1,
}
