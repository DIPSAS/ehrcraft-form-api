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
  getFieldValue(formId: string): any;
  setFieldValue(formId: string, value: any): void;
  addField(formId: string): void;
  removeField(field: Object): void;
  getFields(formId: string, parent?: Container): any;

  setOccurrences(formId: string, occurences: string, parent?: Container): void;

  // Error handling
  setErrorMessage(formId: string, value: string, parent?: Container): void;
  resetErrorMessage(formId: string, parent?: Container): void;

  getTemplateVariable(templateVariable: string): any;
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
export type EventType =
  | "OnChanged"
  | "OnRemoved"
  | "OnChildAdded"
  | "OnChildRemoved";

export class MockApi implements API {
  private IdCallbacks: { [key: string]: ListenerCallback } = {};
  private FieldValues: { [key: string]: any } = {};

  constructor() {}

  addListener(
    formId: string,
    event: EventType,
    callback: ListenerCallback
  ): void {
    this.IdCallbacks[formId] = callback;
  }
  hideField(formId: string, parent?: Container) {
    console.log("hideField");
  }
  showField(formId: string, parent?: Container) {
    console.log("showField");
  }
  clearField(formId: string, parent?: Container) {
    console.log("clearField");
  }
  resetField(formId: string, parent?: Container) {
    console.log("resetField");
  }
  enableField(formId: string, parent?: Container) {
    console.log("enableField");
  }
  disableField(formId: string, parent?: Container) {
    console.log("disableField");
  }
  getFieldValue(formId: string) {
    return this.FieldValues[formId];
  }
  setFieldValue(formId: string, value: any) {
    this.FieldValues[formId] = value;
    let callback = this.IdCallbacks[formId];
    if (callback) {
      console.log("setFieldValue:" + formId + ", value= " + value);
      callback.call(formId, value, null);
    } else {
      console.log("noCallBackDefined for formId" + formId);
    }
  }
  addField(formId: string) {
    console.log("addField");
  }
  removeField(field: Object) {
    console.log("removeField");
  }
  getFields(formId: string, parent?: Container) {
    return {};
  }
  setOccurrences(formId: string, occurences: string, parent?: Container) {
    console.log("setOccurrences");
  }
  setErrorMessage(formId: string, value: string, parent?: Container) {
    console.log("setErrorMessages");
  }
  resetErrorMessage(formId: string, parent?: Container) {
    console.log("resetErrorMessages");
  }
  getTemplateVariable(templateVariable: string): any {
    return "TemplateVariable";
  }
}
