export interface CTX {
  isReadonly(): boolean;
  isNew(): boolean;
  formMode(): FormMode;
  preferredLanguage(): string;
}
export class MockCTX implements CTX {
  constructor(
    private readonly: boolean = false,
    private newVersion: boolean = false,
    private myFormMode: FormMode = FormMode.Default,
    private myPreferredLanguage: string = "no"
  ) {

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
