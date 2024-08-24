/**
 * LAB is exposed in the script context with the variable `lab` 
 * @since Arena 24.1 
 * https://dev.azure.com/dips/Shared/_wiki/wikis/DIPS.Wiki/8847/Lab-API 
 * https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Lab/Lab.cs&_a=contents&version=GBmaster
 */
export interface Lab {
    getLabResults(nlkCodes: string[], dateFrom?: Date, dateTo?: Date): Promise<TestCodeWithResults[]>;
}

export interface LabResultRequest {
    PatientId: number;
    NlkCodes: string[];
    FromTime?: Date;
    ToTime?: Date;
}

export interface TestCodeWithResults {
    NlkCode: string;
    Name: string;
    Unit: string;
    LabResults: LabResult[];
}
interface LabResult {
    TextResult: string;
    NumericResult?: number;
    RequisitionInfo: RequisitionInfo;
    StatusText: string;
    Comment: string|null;


}
interface RequisitionInfo {
    SamplingTime: SamplingTime;
    RequisitionId: number;
}
interface SamplingTime{
    DateTime: string;
    UtcDateTime:string;
    LocalDateTime:string;
    Date:string;
    Day:number;
    DayOfWeek:number;
    DayOfYear:number;
    Hour:number;
    Millisecond:number;
    Microsecond:number;
    Nanosecond:number;
    Minute:number;
    Month:number;
    Offset:string;
    TotalOffsetMinutes:number;
    Second:number;
    Ticks:number;
    UtcTicks:number;
    TimeOfDay: string;
    Year:number;

}

const example:TestCodeWithResults =  {
    "NlkCode": "NOR25614",
    "Name": "S-Kalium (K+)",
    "Unit": "mmol/L",
    "LabResults": [
        {
            "TextResult": "3.5",
            "NumericResult": 3.5,
            "RequisitionInfo": {
                "SamplingTime": {
                    "DateTime": "2024-06-25T15:30:00",
                    "UtcDateTime": "2024-06-25T13:30:00Z",
                    "LocalDateTime": "2024-06-25T15:30:00+02:00",
                    "Date": "2024-06-25T00:00:00",
                    "Day": 25,
                    "DayOfWeek": 2,
                    "DayOfYear": 177,
                    "Hour": 15,
                    "Millisecond": 0,
                    "Microsecond": 0,
                    "Nanosecond": 0,
                    "Minute": 30,
                    "Month": 6,
                    "Offset": "02:00:00",
                    "TotalOffsetMinutes": 120,
                    "Second": 0,
                    "Ticks": 638549262000000000,
                    "UtcTicks": 638549190000000000,
                    "TimeOfDay": "15:30:00",
                    "Year": 2024
                },
                "RequisitionId": 15848752
            },
            "StatusText": "Final",
            "Comment": null
        }
    ]
}
const example2:TestCodeWithResults =  {
    "NlkCode": "NOR25613",
    "Name": "S-Natrium",
    "Unit": "mmol/l",
    "LabResults": [
        {
            "TextResult": "145",
            "NumericResult": 145.0,
            "RequisitionInfo": {
                "SamplingTime": {
                    "DateTime": "2024-06-27T08:00:00",
                    "UtcDateTime": "2024-06-27T06:00:00Z",
                    "LocalDateTime": "2024-06-27T08:00:00+02:00",
                    "Date": "2024-06-27T00:00:00",
                    "Day": 27,
                    "DayOfWeek": 4,
                    "DayOfYear": 179,
                    "Hour": 8,
                    "Millisecond": 0,
                    "Microsecond": 0,
                    "Nanosecond": 0,
                    "Minute": 0,
                    "Month": 6,
                    "Offset": "02:00:00",
                    "TotalOffsetMinutes": 120,
                    "Second": 0,
                    "Ticks": 638550720000000000,
                    "UtcTicks": 638550648000000000,
                    "TimeOfDay": "08:00:00",
                    "Year": 2024
                },
                "RequisitionId": 15848771
            },
            "StatusText": "Final",
            "Comment": null
        },
        {
            "TextResult": "135 *",
            "NumericResult": 135.0,
            "RequisitionInfo": {
                "SamplingTime": {
                    "DateTime": "2024-06-25T15:30:00",
                    "UtcDateTime": "2024-06-25T13:30:00Z",
                    "LocalDateTime": "2024-06-25T15:30:00+02:00",
                    "Date": "2024-06-25T00:00:00",
                    "Day": 25,
                    "DayOfWeek": 2,
                    "DayOfYear": 177,
                    "Hour": 15,
                    "Millisecond": 0,
                    "Microsecond": 0,
                    "Nanosecond": 0,
                    "Minute": 30,
                    "Month": 6,
                    "Offset": "02:00:00",
                    "TotalOffsetMinutes": 120,
                    "Second": 0,
                    "Ticks": 638549262000000000,
                    "UtcTicks": 638549190000000000,
                    "TimeOfDay": "15:30:00",
                    "Year": 2024
                },
                "RequisitionId": 15848752
            },
            "StatusText": "Final",
            "Comment": null
        }
    ]
}