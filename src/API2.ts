import {EventType, ListenerCallback, RmModel} from "./api";
export interface Instance {
    FormId: string;
    Name: string;
    InstanceId: string;
    RmType: string;
    RmName: string;
    GetAqlPath: string;
    RmModel: RmModel;

}
export interface SearchFunc {
    (instance: Instance): Instance[];

}
/**
 * @see https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?version=GBmaster&path=%2Fsrc%2FOpenEhr.Forms%2FScripting%2FApiInstance2.cs
 */
export interface API2 {
    addListener(
        formId: string,
        event: EventType,
        callback: ListenerCallback
    ): void;
    /**
     *
     * @param instance som du får inn fra getFieldValue
     */
    getParent(instance: Instance): Instance | null;
    getChildren(instance: Instance): Instance[];
    getInstance(): Instance;
    getAncestor(instance: Instance): Instance[];
    find(searchFunc: SearchFunc): Instance[];


    // Field Operations
    hideField(formId: string, node?: Instance): void;
    showField(formId: string, node?: Instance): void;
    clearField(formId: string, node?: Instance): void;
    resetField(formId: string, node?: Instance): void;
    enableField(formId: string, node?: Instance): void;
    disableField(formId: string, node?: Instance): void;
    getFieldValue(formId: string, node?: Instance): any;
    setFieldValue(formId: string, value: any, node?: Instance): void;
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
    getFields(formId: string, node?: Instance): any;

    setOccurrences(formId: string, occurences: string, node?: Instance): void;

    // Error handling
    setErrorMessage(formId: string, value: string, node?: Instance): void;
    resetErrorMessage(formId: string, node?: Instance): void;

    getTemplateVariable(templateVariable: string): any;


}
