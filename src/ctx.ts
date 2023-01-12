import { OrganizationContext, ContextUser, ContextVersion } from ".";


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
   * Information about the container which runs the form/script instance. 
   * Might be used for debugging purposes or to add feature toggles based on versions. 
   * @since 2023.Q1
   */
  version?:ContextVersion;
  /**
   * Defines the organisational contxt for the script environment. I.e. the organisational connections for the episode of care 
   * @since 2023.Q1
   */
  organization?:OrganizationContext;  
  /**
   * Contextual information about the logged in user. This data might be used in the terminology and system configuration service. 
   * @since 2023.Q1
   */
  user?:ContextUser;
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

