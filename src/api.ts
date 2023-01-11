import { CodedItem } from "./CodedItem";

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
 * 
 * @since 2023.Q1
 * @param formId 
 * @param parent 
 * @returns the code items for the form id - an empty array if there are no coded items 
 */
  getCodeListItems(formId:string, parent?:Container):CodedItem[];

  /**
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


