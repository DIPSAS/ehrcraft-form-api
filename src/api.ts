import { CodedItem } from ".";


// import {API} from './api';
export interface API {
  addListener(
    formId: string,
    event: EventType,
    callback: ListenerCallback
  ): void;
  // Field Operations
  hideField(formId: string, parent?: Container): void;
  showField(formId: string, parent?: Container): void;
  clearField(formId: string, parent?: Container): void;
  resetField(formId: string, parent?: Container): void;
  enableField(formId: string, parent?: Container): void;
  disableField(formId: string, parent?: Container): void;
  getFieldValue(formId: string, parent?: Container): any;
  setFieldValue(formId: string, value: any, parent?: Container): void;
  /**
   *
   * @param formId addField(id): id must be a string value (formId or name).
   * @returns a container if the formId is path to a container
   */
  addField(formId: string): any;
  /**
   *
   * @param field field must be an object argument
   */
  removeField(field: Object): void;
  getFields(formId: string, parent?: Container): any;

  setOccurrences(formId: string, occurences: string, parent?: Container): void;

  // Error handling
  setErrorMessage(formId: string, value: string, parent?: Container): void;
  resetErrorMessage(formId: string, parent?: Container): void;

  getTemplateVariable(templateVariable: string): any;
/**
 * Get the current possible code items of the instance of the form id. 
 * To get the defined (in the form/OPT) use method getDefinedCodeItems
 * @since 2023.Q1
 * @param formId 
 * @param parent 
 * @see getDefinedCodeItems
 * @returns the code items for the form id - an empty array if there are no coded items 
 */
  getCodeListItems(formId:string, parent?:Container):CodedItem[];

  /**
   * Set a list of coded items an instance of the form id. Use parent when there are possible multiple occurences 
   * @since 2023.Q1
   * @param formId 
   * @param values 
   * @param parent 
   */
  setCodeListItems(formId:string, values:CodedItem[], parent?:Container):boolean;
  /**
   * Set the named terminology on the given form element. 
   * Might be used to swith terminology based on business logic in scrpit 
   * @since 2023.Q1 
   * @param formId 
   * @param terminologyName 
   * @param parent 
   */
  setTerminology(formId:string, terminologyName:string, parent?:Container):boolean;

  /**
   * Function to load the defined coeded items on an element/field in the form. 
   * In the form definition there is always only one definition of each form id. This is why there are no need to set the parent attribute on this. 
   * 
   * The function is used to get the original codelist for each element. The original/defined list might be used to reset the field. 
   * 
   * NOTE: This function only works for elements with local codes - not elements bound to terminologies. Use the terminology service to query these data. 
   * 
   * @param formId of the defined field/element   
   * @returns the coded items defined in the form defintion for the given form id 
   */
  getDefinedCodeItems(formId:string): CodedItem[];
}
export interface Container {
  readonly FormId: string;
  Name: string;
  RmType: string;
  RmName: string;
  readonly GetAqlPath: string;
  RmModel: RmModel;
}
export interface RmModel {
  readonly RmType: string;
  FormId: string;
  Name: string;
  RmName: string;
}
export interface ListenerCallback {
  (formId: string, value?: any, parent?: Container): void;
}
export interface Callback {
  formId?: string;
  value?: any;
  parent?: Container;
}
export type CallbackType = (
  formId: string,
  value?: any,
  parent?: Container
) => Function;
/**
 * The type of events supported by the API. This is used when setting up addListener functions.
 */
export type EventType =
  | "OnFormInitialized"
  | "OnChanged"
  | "OnChildAdded"
  | "OnChildRemoved";


