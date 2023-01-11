import { ContextOrganization } from "./ContextOrganization";

/**
 * Defined as the variable "terminology"
 */
export interface TerminologyService {

    /**
     *
     * @param codeListName TerminologySet terminologySet = TerminologySet.Parse("DIPS/1?subset=some_subset_name");
     * @param context the context for which the service should lookup the codeset within 
     */
    getCodeListItems(codeListName: string, context: TerminoloyContextOrganisation): string;
    /**
     * Using the logged in users user-role context to get the codelist items 
     * @param codeListName 
     */
    getCodeListItemsByUserRoleInContext(codeListName:string):string;

}

export interface TerminoloyContextOrganisation{
    hospitalId?:number;
    departmentId?:number;
}
