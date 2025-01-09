import { Container, RmModel } from "./api";
export interface IRmModel {
    FormId: string;
    Name: string;
    InstanceId: string;
    RmType: string;
    RmName: string;
    GetAqlPath: string;
    RmModel: RmModel;
    FormDescription:any;
    ChildLayout: any;
    SourceCompositionUid: string;
    IsVisible: boolean;

}
export interface SearchFunc {
    (instance: IRmModel): boolean;

}
/**
 
 * API2 is an extension to the original API 
* The purpose is to add features to navigate instances in the form tree 
* @since 2025.01.10
 */
export interface API2 {

    /**
     * Get all field values for the given id and the optional matching parent
     * @param id 
     * @param parent 
     */
    getFieldValues(id: string, parent?: Container): any[];
    /**
     * Set value on all matching fields for the optional parent
     * @param id 
     * @param value 
     * @param parent 
     */
    setFieldValues(id: string, value: any, parent?: Container): boolean;
    /**
     * Navigate to the parent node from the current instance 
     * @param instance - an instance of an node in the Form Tree
     */
    getParent(instance: IRmModel): IRmModel | null;
    /**
     * Get all the children of the current node/instance
     * @param instance 
     */
    getChildren(instance: IRmModel): IRmModel[];
    /**
     * Walk up the tree and get the first ancestor matching the provided search function
     * @param instance 
     * @param searhcFunc 
     */

    getAncestor(instance: IRmModel, searhcFunc: SearchFunc): IRmModel | null;
    /**
     * Find all nodes/instances matching the search function. 
     * The search will start from FORM_ROOT and traverse the tree until all matches are found 
     * @param searchFunc 
     */
    find(searchFunc: SearchFunc): IRmModel[];



}
