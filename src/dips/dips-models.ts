export namespace DIPS {

    export namespace Terminology {

        /**
         * * @see https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Terminology/CodedItem.cs
         * NOTE: the attributes are readonly since it's defined with only getter in the c# class
         */
        export class CodedItem {
            /**
             * When DIPS felles kodeverk - mapped to "KODE"
             */
            public readonly code: string;
            /**
             * When DIPS felles kodeverk - mapped to "LANGTNAVN"
             */
            public readonly name: string;

            /**
             * When DIPS felles kodeverk - mapped to "BESKRIVELSE"
             */
            public readonly description: string;

            /**
             * When DIPS felles kodeverk - mapped to the name of the codelist, i.e. ARK-FE-KODEVERKA
             */
            public readonly terminology: string | null;

            /**
             * When DIPS felles kodeverk - mapped to the database identifiers 
             */
            public readonly terminologyMappings?: CodeValueMapping[];
            /**
             * When DIPS felles kodeverk - populated by user-defined properties for each code 
             */
            public readonly properties?: CodedItemProperty[];

            /**
             * Need to use the full constructor since c# support multiple constructor definitions and typescript not.              
             * @param code_v code definining the code item
             * @param name_v name (label) of the code item
             * @param description_v optional description 
             * @param terminology_v optional terminology 
             * @param properties_v optional properties 
             */
            constructor(code_v: string, name_v: string, description_v: string, terminology_v: string | null, properties_v?: CodedItemProperty[]) {
                this.code = code_v;
                this.name = name_v;
                this.terminology = terminology_v;
                this.description = description_v;
                if (properties_v) {
                    this.properties = properties_v;
                } else {
                    // instantiates properties for unit testing 
                    this.properties = [];
                }
                // instantiates terminology mappings for unit testing 
                this.terminologyMappings = [];
            }
            /**
             * 
             * @param name name of the property to get the value for 
             * @returns the value or an empty string
             */
            public getPropertyValue(name: string): string {
                return "BNA-BOBA-OJV";
            }

        }
        /**
         * @see https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=/src/OpenEhr.Forms/Terminology/CodedItemProperty.cs
         */
        export class CodedItemProperty {
            constructor(public readonly name: string, public  readonly value: string) {

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
         * Defines a SemVer definition to be used to define the ContextVersion of openEHR and forms library. 
         */
        export interface SemVer {
            version: string;
            major: number;
            minor: number;
            patch: number;
            revision: number;
        }
        /**
         * Context information about the software versions. 
         */
        export interface ContextVersion {
            /**
             * The semver version of the DIPS openEHR implementation.
             */
            openEhr: SemVer;
            /**
             * The semver version of the DIPS openEHR FORMS DLL
             */
            forms: SemVer;
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
            constructor() {

            }

        }

    }

}