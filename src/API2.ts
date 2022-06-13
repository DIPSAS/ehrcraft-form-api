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
    (instance: Instance): boolean;

}
/**
 * 755245 1550 
 * Second version of EHR Craft Form API 
 * Now with added features to navigate the instances in the form tree.  
 */
export interface API2 {
    /**
     * 
     * @param formId the unique string representation of this element in the form. Defined by Form Designer. Could also be the name. 
     * @param event 
     * @param callback 
     */
    addListener(
        formId: string,
        event: EventType,
        callback: ListenerCallback
    ): void;
    /**
     * Navigate to the parent node from the current instance 
     * @param instance - an instance of an node in the Form Tree
     */
    getParent(instance: Instance): Instance | null;
    /**
     * Get all the children of the current node/instance
     * @param instance 
     */
    getChildren(instance: Instance): Instance[];
    /**
     * Walk up the tree and get ancestors matching the provided search function
     * @param instance 
     * @param searhcFunc 
     */

    getAncestor(instance: Instance, searhcFunc: SearchFunc): Instance[];
    /**
     * Find all nodes/instances matching the search function. 
     * The search will start from FORM_ROOT and traverse the tree until all matches are found 
     * @param searchFunc 
     */
    find(searchFunc: SearchFunc): Instance[];



    hideField(formId: string, node?: Instance): void;
    showField(formId: string, node?: Instance): void;
    clearField(formId: string, node?: Instance): void;
    resetField(formId: string, node?: Instance): void;
    enableField(formId: string, node?: Instance): void;
    disableField(formId: string, node?: Instance): void;
    /**
     * 
     * @param formId the form identifier (or name) defining this node in the form 
     * @param node the node to be used to get unique hits given multiplicity 
     */
    getFieldValue(formId: string, node?: Instance): Instance | null;
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
