import { ContextOrganization } from "./ContextOrganization";


/**
 * Defined as the variable "config"
 */
export interface SystemConfiguration {
    
    //getSystemConfiguration(systemConfigId:number, hospitalId?:number, departmentId?:number, sectionId?:number, wardId?:number, locationId?:number): string;
    /**
     * 
     * @param systemConfigId the organisation defined by the context 
     * @param org 
     */
    getSystemConfiguration(systemConfigId:number, org:ContextOrganization):string;
    
}


