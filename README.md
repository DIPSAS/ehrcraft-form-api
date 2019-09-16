# EHR Craft Form

This is the definitions of the JS classes used within the EHR Craft Form renderer developed by DIPS AS. The purpose of this library is to be able to write form scripts using typed classes defined with Typescript.

Warning: The library is in early beta and intended for internal use.

There is a separate library to compile the scripts. See https://www.npmjs.com/package/ehrcraft-script-compilator

## Usage

The script engine only runs vanilla JS, thus we need to remove the references to this library when running insinde the form renderer. There is a separate compiler which takes the typescript source and compile into a js file which is the one to embed in the form definition.

The trick is to tell this compiler where your logic starts and ends this is done by the comment keywords: `// Start` and `// End`. Below is an example.

```
import {API, MockApi, Container} from "ehrcraft-form-api/dist/api";
import {HTTP, MockHTTP} from "ehrcraft-form-api/dist/http";
import {CTX, MockCTX, FormMode} from "ehrcraft-form-api/dist/ctx";
import {openEHR} from "ehrcraft-form-api/dist/rm/rm-model";
import DvOrdinal = openEHR.RM.QuantityPackage.DvOrdinal;
import DvText = openEHR.RM.TextPackage.DvText;
import DvCodedText = openEHR.RM.TextPackage.DvCodedText;
import DvCodePhrase = openEHR.RM.TextPackage.DvCodePhrase;
import DvQuantity = openEHR.RM.QuantityPackage.DvQuantity;
import DvCount = openEHR.RM.QuantityPackage.DvCount;
import DvMultimedia = openEHR.RM.EncapsulatedPackage.DvMultimedia;
import DvDate = openEHR.RM.DateTimePackage.DvDate;
import DvDateTime = openEHR.RM.DateTimePackage.DvDateTime;
const http = new MockHTTP();
const api = new MockApi();
const ctx = new MockCTX();


// Start

<your code goes here >

// End

```
