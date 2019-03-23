export namespace openEHR {
  export namespace RM {
    export abstract class DataValue {
      private value?: string;
    }
    export namespace BasicPackage {
      export class DvBoolean extends DataValue {
        Value?: boolean;
      }
      export class DvIdentifier extends DataValue {
        Issuer?: string;
        Assigner?: string;
        Id?: string;
        Type?: string;
        ToString(): string {
          return (
            "Issuer: " +
            this.Issuer +
            ", assigner: " +
            this.Assigner +
            ", id: " +
            this.Id +
            ", type: " +
            this.Type
          );
        }
      }
    }

    export namespace TextPackage {
      export class DvText extends DataValue {
        constructor(private val?: string) {
          super();
          this.Value = val;
        }
        Value?: string;
        Mappings: TerminologyMapping[] = [];
      }
      export class TerminologyMapping {
        Target?: DvCodePhrase;
        Match?: Match;
        Purpose?: DvCodedText;
      }
      export enum Match {
        /// <summary>
        /// The mapping is to a broader term e.g. orginal text = “arbovirus infection”, target = “viral infection”
        /// </summary>
        IsBroader,

        /// <summary>
        /// The mapping is to a (supposedly) equivalent to the original item.
        /// </summary>
        IsEqual,

        /// <summary>
        /// The mapping is to a narrower term. e.g. original text = “diabetes”, mapping = “diabetes mellitus”.
        /// </summary>
        IsNarrower,

        /// <summary>
        /// The kind of mapping is unknown.
        /// </summary>
        Unknown
      }
      export class DvCodedText extends DvText {
        /**
         *
         * @param codeString "terminologyId::codeId|value"
         */
        static Parse(codeString: string): DvCodedText {
          return new DvCodedText();
        }
        constructor(
          private theValue?: string,
          public DefiningCode?: DvCodePhrase
        ) {
          super(theValue);
        }
      }
      export class DvCodePhrase {
        /**
         *
         * @param termCode terminologyId::codeString
         */
        static Parse(termCode: string): DvCodePhrase {
          return new DvCodePhrase();
        }
        constructor(codeString?: string, terminologyId?: string) {
          this.CodeString = codeString;
          if (terminologyId != null) {
            this.TerminologyId = new openEHR.RM.Support.IdentificationPackage.TerminologyId(
              terminologyId
            );
          }
        }
        CodeString?: string;
        TerminologyId?: openEHR.RM.Support.IdentificationPackage.TerminologyId;
      }
    }
    export namespace Support {
      export namespace IdentificationPackage {
        abstract class ObjectId {
          /**
           * The value of the id in the form defined below.
           */
          Value?: string;
        }
        export class TerminologyId extends ObjectId {
          Value?: string;
          constructor(terminologyId?: string) {
            super();
            this.Value = terminologyId;
          }
        }
      }
    }
    export namespace QuantityPackage {
      export abstract class DvQuantified<T> extends DvOrdered<T> {
        /**
         * Numeric value of the quantity in canonical (i.e. single value) form.
         * Implemented as constant, function or attribute in subtypes as appropriate.
         * The type Ordered_numeric is mapped to the available appropriate type in each implementation technology.
         */
        abstract Magnitude?: number;

        /**
       Optional status of magnitude with values:
       • “=” : magnitude is a point value
       • “&lt;“ : value is &lt; magnitude
       • “>” : value is > magnitude
       • “&lt;=” : value is &lt;= magnitude
       • “>=” : value is >= magnitude
       • “~” : value is approximately magnitude
       If not present, meaning is “=”.
        */
        MagnitudeStatus?: string;
      }
      export abstract class DvAmount<T> extends DvQuantified<T> {
        /**
         * Accuracy of measurement, expressed either as a half-range percent value (accuracy_is_percent = True) or a half-range quantity.
         * A value of 0 means that accuracy is 100%, i.e. no error.
         * A value of unknown_accuracy_value means that accuracy was not recorded.
         */
        Accuracy?: number;
        /**
         * If True, indicates that when this object was created, accuracy was recorded as a percent value; if False, as an absolute quantity value.
         */
        IsAccuracyPercent?: boolean;
      }

      export abstract class DvOrdered<T> extends DataValue {
        NormalRange?: DvInterval<T>;
        NormalStatus?: openEHR.RM.TextPackage.DvCodePhrase;
      }

      export abstract class DvAbsoluteQuantity<T, TA> extends DvQuantified<T> {
        /**
         * Accuracy of measurement, expressed as a half-range value of the diff type for this quantity (i.e. an accuracy of x means x).
         * A Void (i.e. null) value means accuracy not known.
         */
        Accuracy?: TA;
      }

      export class DvInterval<T> extends DataValue {
        Lower?: T;
        Upper?: T;
      }
      export class DvQuantity extends DvAmount<DvOrdinal> {
        Magnitude?: number;
        Units?: string;
        Precision?: number;
      }
      export class DvOrdinal extends DvOrdered<DvOrdinal> {
        public Symbol?: openEHR.RM.TextPackage.DvCodedText;
        constructor(public Value?: number) {
          super();
        }
      }
      export class DvCount extends DvAmount<Number> {
        constructor(public Magnitude?: number) {
          super();
        }
      }
      export class DvProportion extends DvAmount<DvProportion> {
        Magnitude?: number;
        Numerator?: number;
        Denominator?: number;
        Type?: ProportionKind;
        Precision?: number;
      }
      export enum ProportionKind {
        Ratio = 0,
        Unitary = 1,
        Percent = 2,
        Fraction = 3,
        IntegerFraction = 4
      }
    }
    export namespace DateTimePackage {
      abstract class DvTemporal<T, TA> extends openEHR.RM.QuantityPackage
        .DvAbsoluteQuantity<T, TA> {}
      export class DvDuration extends openEHR.RM.QuantityPackage.DvAmount<
        DvDuration
      > {
        /** ISO8601 duration */
        Value?: string;
        Magnitude?: number;
      }
      export class DvDate extends DvTemporal<DvDate, DvDuration> {
        /**
         * ISO8601 date string
         */
        Value?: string;
        /**
         * Numeric value of the date as days since the calendar origin point 1/1/0000
         */
        Magnitude?: number;
      }
      export class DvDateTime extends DvTemporal<DvDateTime, DvDuration> {
        Value?: string;
        Magnitude?: number;
      }
      export class DvTime extends DvTemporal<DvTime, DvDuration> {
        Value?: string;
        Magnitude?: number;
      }
    }
    export namespace EncapsulatedPackage {
      abstract class DvEncapsulated extends DataValue {
        /** Name of character encoding scheme in which this value is encoded. Coded from openEHR Code Set “character sets”. Unicode is the default assumption in openEHR, with UTF-8 being the assumed encoding. This attribute allows for variations from these assumptions. */
        CharSet?: openEHR.RM.TextPackage.DvCodePhrase;
        /** Optional indicator of the localised language in which the data is written, if relevant. Coded from openEHR Code Set “languages”. */
        Language?: openEHR.RM.TextPackage.DvCodePhrase;
        /** Original size in bytes of unencoded encapsulated data. I.e. encodings such as base64, hexadecimal etc do not change the value of this attribute. */
        Size?: number;
      }
      export class DvParsable extends DvEncapsulated {
        Value?: string;
        /** name of the formalism, e.g. “GLIF 1.0”, “proforma” etc.  */
        Formalism?: string;
        /** Size in bytes of value. */
        Size?: number;
      }
      export class DvMultimedia extends DvEncapsulated {
        AlternateText?: string;
        Uri?: openEHR.RM.UriPackage.DvUri;
        /** The actual data found at uri, if supplied inline */
        Data?: any;
        /** Data media type coded from openEHR code set “media types” (interface for the IANA MIME types code set).  */
        MediaType?: openEHR.RM.TextPackage.DvCodePhrase;
        /** Compression type, a coded value from the openEHR “Integrity check” code set. Void means no compression. */
        CompressionAlgorithm?: openEHR.RM.TextPackage.DvCodePhrase;
        /** Binary cryptographic integrity checksum */
        IntegrityCheckAlgorithm?: openEHR.RM.TextPackage.DvCodePhrase;
        ThumbNail?: DvMultimedia;
      }
    }
    export namespace UriPackage {
      /**
       * A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard. The reference is contained in the value attribute, which is a String. So-called 'plain-text URIs' that contain RFC-3986 forbidden characters such as spaces etc, are allowed on the basis that they need to be RFC-3986 encoded prior to use in e.g. REST APIs or other contexts relying on machine-level conformance.
       */
      export class DvUri extends DataValue {
        Value?: string;
      }
      export class DvEhrUri extends DvUri {}
      enum DvEhrUriType {
        Unknown = 0,
        RelativeCompositionUri = 1
      }
    }
  }
}
