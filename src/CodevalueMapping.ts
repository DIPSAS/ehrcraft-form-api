export interface CodevalueMapping {
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
