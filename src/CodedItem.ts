import { CodevalueMapping } from "./CodevalueMapping";

/**
 * @see https://dev.azure.com/dips/DIPS/_git/SmartContent-Interfaces?path=/src/Common/DIPS.SmartContent.Interface/Terminology/CodedValueItem.cs&version=GBmaster&line=11&lineEnd=12&lineStartColumn=1&lineEndColumn=1&lineStyle=plain&_a=contents
 */
export interface CodedItem {
  code: string;
  name: string;
  terminology: string;
  terminologyId: string;
  subset: string;
  version: string;
  mappings: CodevalueMapping[];
  properties: Record<string, string>;
  getPropertyValue(propertyTypeName: string): string;

}
