# EHR Craft Form

This is the definitions of the JS classes used within the EHR Craft Form renderer developed by DIPS AS. The purpose of this library is to be able to write form scripts using typed classes defined with Typescript.

Warning: The library is in early beta and intended for internal use.

## Versions

* 1.5.0 - Added callback on ctx
* 2.0.0 - Attribute names from upper camelcase to lower camelcase. 
* 2.1.0 - Fixed attribute name value to lower case for DvBoolean.
* 2.3.x - Added support for terminology and system-configuration search
* 2.4.x - Added support for lab 
* 2.5.x - Added support for api2

## Usage

The script engine only runs vanilla JS, thus we need to remove the references to this library when running insinde the form renderer.

To generated vanilla JS from typescript we use the library and setup define by this Yeoman generator: https://www.npmjs.com/package/generator-ehrcraft-script 

The following typescript is a boilerplate to get started.

```typescript
import { API, Container } from "ehrcraft-form-api/dist/api";
import { DvCodedText, DvDateTime, DvQuantity } from "ehrcraft-form-api";

function main(api: API) {
  console.log("Your main function was invoked");
  const t = new DvCodedText();
    t.Value = "Test";
}
// THIS method is invoked from the generated script by generator-ehrcraft-script 
main(api);

```

The example below illustrates the complete main function with all context objects injected. To make this work the following must be injected in the generated/compiled javascript: ```main(api,ctx,terminology,config);```
```typescript 
import { API, CTX, SystemConfiguration, TerminologyService } from "ehrcraft-form-api";
const f_systolic = "<defined id of the form element for systolic blood pressure>";
export function main(api: API, ctx: CTX, term: TerminologyService, conf: SystemConfiguration){

  api.addListener(f_systolic, "OnChanged", (id, value, parent) => {
    // do something when systolic is changed 
  });


}

```
