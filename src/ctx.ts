export interface CTX {
    isReadonly():boolean;
    isNew(): boolean;
    formMode(): FormMode;
    preferredLanguage(): string;
}

export enum FormMode {
    Default = 0,
    InfieldTopAlignedLabels = 1
}