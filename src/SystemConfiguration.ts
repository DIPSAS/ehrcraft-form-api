import { SystemConfigurationOrganization } from ".";



/**
 * Defined as the variable "config". 
 * Acts as a proxy for "Systemoppsett" in DIPS. 
 */
export interface SystemConfiguration {
    /**
     * 
     * @param systemConfigId the organisation defined by the context 
     * @param org the context for which the service will lookup the system config id 
     */
    getSystemConfiguration(systemConfigId:number, org:SystemConfigurationOrganization):string;
    
}


