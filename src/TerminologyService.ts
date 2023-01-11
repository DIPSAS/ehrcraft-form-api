import { CodedItem, CodedItemExtended } from "./CodedItem";
import { ContextOrganization } from "./ContextOrganization";

/**
 * Defined as the variable "terminology"
 */
export interface TerminologyService {

    /**
     *
     * @param codeListName TerminologySet terminologySet = TerminologySet.Parse("DIPS/1?subset=some_subset_name");
     * @param context the context for which the service should lookup the codeset within 
     * @returns the code items defined by the codeListName for the given context, if none is found NULL 
     */
    getCodeListItems(codeListName: string, context: TerminoloyContextOrganisation): CodedItemExtended[]|null;
    /**
     * Using the logged in users user-role context to get the codelist items 
     * @param codeListName 
     */
    getCodeListItemsByCurrentUserRole(codeListName:string):CodedItemExtended[]|null;

}

/**
 * Wrapper around the the context to be used when searching for terminologies 
 */
export interface TerminoloyContextOrganisation{
    hospitalId?:number;
    departmentId?:number;
}
