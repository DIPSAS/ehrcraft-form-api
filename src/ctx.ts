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
  // New attributes added to get context information 
  hospitalId?: number;
  departmentId?: number;
  sectionId?: number;
  wardId?: number;
  user?: {
    hospitalId: number;
    departmentId: number;
  }
  /**
   * Callback/EventListener on Form Context. Added to support the possibility to add a custom view type for the content
   * @param event the event type to register for
   * @param callback the callback function to be implemented
   */
  addCallback(event: CtxCallBackEvent, callback: FormViewCallback): void;
}
export interface Terminology {
  LoadCodes(codesetName: string): CodedValueItem[];
}
export interface SystemConfiguration {
  getSystemConfiguration(systemConfigId: number): string;
}


export enum FormMode {
  Default = 0,
  InfieldTopAlignedLabels = 1,
}
/**
 * @see https://dev.azure.com/dips/DIPS/_git/SmartContent-Interfaces?path=/src/Common/DIPS.SmartContent.Interface/Terminology/CodedValueItem.cs&version=GBmaster&line=11&lineEnd=12&lineStartColumn=1&lineEndColumn=1&lineStyle=plain&_a=contents 
 */
export interface CodedValueItem {
  Code: string;
  Name: string;
  Terminology: string;
  TerminologyId: string;
  Subset: string;
  Version: string;
  Mappings: CodevalueMapping[];
  Properties: Record<string, string>;
  GetPropertyValue(propertyTypeName: string): string;


}
export interface CodevalueMapping {
  /**
   * 0 = is broader
   * 1 = is equal 
   * 2 = is narrower
   * 3 = unknown 
   */
  Match: 0 | 1 | 2 | 3;
  Terminology: string;
  CodeString: string;

}
