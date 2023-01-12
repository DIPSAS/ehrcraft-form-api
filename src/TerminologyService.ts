import { CodedItem, TerminologyContextOrganisation } from ".";


/**
 * Defined as the variable "terminology" in form context. 
 * Acts as a proxy for the terminology service in DIPS Forms. 
 */
export interface TerminologyService {

    /**
     *
     * @param codeListName TerminologySet terminologySet = TerminologySet.Parse("DIPS/1?subset=some_subset_name");
     * @param context the context for which the service should lookup the codeset within 
     * @returns the code items defined by the codeListName for the given context, if none is found NULL 
     */
    getCodeListItems(codeListName: string, context: TerminologyContextOrganisation): CodedItem[]|null;
    /**
     * Using the logged in users user-role context to get the codelist items 
     * @param codeListName 
     */
    getCodeListItemsByCurrentUserRole(codeListName:string):CodedItem[]|null;

}


