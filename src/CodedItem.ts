import { CodeValueMapping } from "./CodevalueMapping";

/**
 * 
 * @see https://dev.azure.com/dips/DIPS/_git/OpenEhr.Forms?path=%2Fsrc%2FOpenEhr.Forms%2FTerminology%2FCodedItem.cs&_a=contents&version=GBmaster 
 */
export interface CodedItem {
  /**
   * When DIPS felles kodeverk - mapped to "KODE"
   */
  code: string;
  /**
   * When DIPS felles kodeverk - mapped to "LANGTNAVN"
   */
  name: string;
  /**
   * When DIPS felles kodeverk - mapped to "BESKRIVELSE"
   */
  description?: string;
  /**
   * When DIPS felles kodeverk - mapped to the name of the codelist, i.e. ARK-FE-KODEVERKA
   */
  terminology: string;
  /**
   * When DIPS felles kodeverk - mapped to the database identifiers 
   */
  terminologyMappings: CodeValueMapping[];
  /**
   * When DIPS felles kodeverk - populated by user-defined properties for each code 
   */
  properties?: CodedItemProperty[];
  /**
   * maped to the function in the environment using the CodedItemProperty array defined above. 
   * Util function 
   * @param name the name of the defined property
   * @returns the value defined by the property or an empty string if none is found 
   */
  getPropertyValue(name: string): string;

}
export interface CodedItemProperty {
  name: string;
  //datatype:"integer"|"string"|"boolean";
  value: string;

}
