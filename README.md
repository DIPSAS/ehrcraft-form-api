# EHR Craft Form

This is the definitions of the JS classes used within the EHR Craft Form renderer developed by DIPS AS. The purpose of this library is to be able to write form scripts using typed classes defined with Typescript.

Warning: The library is in early beta and intended for internal use.

## Versions

- 1.5.0 - Added callback on ctx

## Usage

The script engine only runs vanilla JS, thus we need to remove the references to this library when running insinde the form renderer.

The following typescript is a boilerplate to get started.

```
import { API, Container } from "ehrcraft-form-api/dist/api";
import { DvCodedText, DvDateTime, DvQuantity } from "ehrcraft-form-api";

function main(api: API) {
  console.log("Your main function was invoked");
  const t = new DvCodedText();
    t.Value = "Test";
}
// @ts-ignore
main(api);

```

### WARNING

Typescript will by default generated class definitions which takes the fully qualified name. The above typescript code will generate the following javascript code:

```
"use strict";
// generic index.ts fil
Object.defineProperty(exports, "__esModule", { value: true });
var ehrcraft_form_api_1 = require("ehrcraft-form-api");
function main(api) {
    api.addListener("MyFormID", "OnChanged", function (id, value, parent) {
        console.log("I was called");
        var t = new ehrcraft_form_api_1.DvCodedText();
        t.Value = "Test";
    });
}
exports.main = main;
// @ts-ignore
main(api);

```

Note the fully qualified name for DvCodedText. This will not work in the Form Renderer. You have to remove the following:

```
// remove this
var ehrcraft_form_api_1 = require("ehrcraft-form-api");

//changes this
var t = new ehrcraft_form_api_1.DvCodedText();
// to
var t = new DvCodedText();
```
