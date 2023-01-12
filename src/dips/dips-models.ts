export namespace DIPS {

    export namespace Terminology {


        export class CodedItem {
            /**
             * When DIPS felles kodeverk - mapped to "KODE"
             */
            public code: string;
            /**
             * When DIPS felles kodeverk - mapped to "LANGTNAVN"
             */
            public name: string;
            /**
             * When DIPS felles kodeverk - mapped to the name of the codelist, i.e. ARK-FE-KODEVERKA
             */
            public terminology: string;
            /**
             * When DIPS felles kodeverk - mapped to "BESKRIVELSE"
             */
            public description?: string;

            /**
             * When DIPS felles kodeverk - mapped to the database identifiers 
             */
            public terminologyMappings?: CodeValueMapping[];
            /**
             * When DIPS felles kodeverk - populated by user-defined properties for each code 
             */
            public properties?: CodedItemProperty[];

            constructor(private c: string, private n: string, term: string, desc?: string, private props?: CodedItemProperty[]) {
                this.code = c;
                this.name = n;
                this.terminology = term;
                this.description = desc;
                this.properties = props;
            }
            public getPropertyValue(name: string): string {
                return "BNA-BOBA-OJV";
            }

        }
        export class CodedItemProperty {
            constructor(public name: string, public value: string) {

            }

        }
        export type CodeValueMapping = {
            /**
             * 0 = is broader
             * 1 = is equal
             * 2 = is narrower
             * 3 = unknown
             */
            match: 0 | 1 | 2 | 3;
            terminology: string;
            codeString: string;

        }

        /**
         * Wrapper around the the context to be used when searching for terminologies 
         */
        export class TerminologyContextOrganisation {
            /**
             * Field is required in the underlying terminology service (DIPS Felles Koder) 
             * 
             */
            public hospitalId: number = -1;
            public departmentId?: number;

        }

    }
    export namespace Context {
        /**
         * Information about the logged in user. 
         */
        export interface ContextUser {
            hospitalId: number;
            departmentId: number;
            localizationId?: number;
        }



        /**
         * Context information about the software versions. 
         */
        export interface ContextVersion {
            /**
             * The semver version of the DIPS openEHR implementation.
             */
            openEhr: string;
            /**
             * The semver version of the DIPS openEHR FORMS DLL
             */
            forms: string;
        }
        /**
         * DTO class for the organisational context. Used i.e. to query system configurations. 
         * https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Scripting/SystemConfig/SystemConfigurationOrganization.cs&version=GBmaster
         */
        export class SystemConfigurationOrganization {

            public hospitalId?: number;
            public departmentId?: number;
            public sectionId?: number;
            public wardId?: number;
            public locationId?: number;
            /**
             * Empty constructor as defined in the proxy .net class. 
             */
            constructor() {

            }
        }
        /**
         * https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Context/OrganizationContext.cs&_a=contents&version=GBmaster
         */
        export class OrganizationContext {
            public hospitalId?: number;
            public departmentId?: number;
            public sectionId?: number;
            public wardId?: number;
            constructor(){
                
            }

        }

    }

}