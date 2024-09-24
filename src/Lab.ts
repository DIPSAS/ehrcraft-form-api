/**
 * LAB is exposed in the script context with the variable `lab` 
 * @since Arena 24.1 
 * https://dev.azure.com/dips/Shared/_wiki/wikis/DIPS.Wiki/8847/Lab-API 
 * https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Lab/Lab.cs&_a=contents&version=GBmaster
 */
export interface Lab {
    /**
     * Example of usage
     * lab.getLabResults(["NOR25613", "NOR25614"])
     * .then((res) => {console.log(res)});
     * 
     * lab.getLabResults(["NOR25613", "NOR25614"], new Date("2024-01-01T00:00:00.00"), new Date("2024-07-02T00:00:00.00"))
     * .then((res) => {console.log(res)});
     * 
     * @param nlkCodes 
     * @param dateFrom 
     * @param dateTo 
     */
    getLabResults(nlkCodes: string[], dateFrom?: Date, dateTo?: Date): Promise<TestCodeWithResults[]>;
}

interface LabResultRequest {
    PatientId: number;
    NlkCodes: string[];
    FromTime?: Date;
    ToTime?: Date;
}

export interface TestCodeWithResults {
    nlkCode: string;
    name: string;
    unit: string;
    labResults: LabResult[];
}
/**
 * Define the possible status text alternatives for LabResult 
 */
export type LabResultStatusText = "Registered"|"Preliminary"|"Final"|"Amended"|"Cancelled"|"EnteredInError"|"NoResultExpected";
export interface LabResult {
    textResult: string;
    numericResult?: number;
    requisitionInfo: RequisitionInfo;    
    statusText: LabResultStatusText;
    comment: string|null;


}
export interface RequisitionInfo {
    samplingTime: string;
    requisitionId: number;
}


