export interface CTX {
  isReadonly(): boolean;
  isNew(): boolean;
  formMode(): FormMode;
  preferredLanguage(): string;
}
export class MockCTX implements CTX {
  constructor(
    private readonly?: boolean,
    private newVersion?: boolean,
    private myFormMode?: FormMode,
    private myPreferredLanguage?: string
  ) {
    if (typeof readonly == "undefined") {
      this.readonly = false;
    }
    if (typeof newVersion == "undefined") {
      this.newVersion = false;
    }
    if (typeof myFormMode == "undefined") {
      this.myFormMode = FormMode.Default;
    }
    if (typeof myPreferredLanguage == "undefined") {
      this.myPreferredLanguage = "nb";
    }
  }
  isReadonly(): boolean {
    return this.readonly;
  }
  isNew(): boolean {
    return this.newVersion;
  }
  formMode(): FormMode {
    return this.myFormMode;
  }
  preferredLanguage(): string {
    return this.myPreferredLanguage;
  }
}

export enum FormMode {
  Default = 0,
  InfieldTopAlignedLabels = 1
}
