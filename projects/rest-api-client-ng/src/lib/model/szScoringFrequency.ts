/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave the similarly to its stand operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Enumerates the various scoring behavior frequencies for entity features. This indicates the number of entities that would typically share the same value for a feature of this type.  The possible values are:   * `ALWAYS_ONE` - The feature value belongs to exactly one entity so                    if two records share this value they will always                    merge together.   * `ONE` - The feature value typically belongs to one entity (like a             Social Security Number, Tax ID or Drivers License Number)   * `FEW` - The feature value typically belongs to at most a few             entities (like an Address or Phone Number).   * `MANY` - The feature value can belong to many entities (like a              date of birth)   * `VERY_MANY` - The feature can belong to very many entities (like                   a gender).   * `NAME` - A special frequency used for name features since they have              unique properties.
 */
export type SzScoringFrequency = 'ALWAYS_ONE' | 'ONE' | 'FEW' | 'MANY' | 'VERY_MANY' | 'NAME';

export const SzScoringFrequency = {
    ALWAYSONE: 'ALWAYS_ONE' as SzScoringFrequency,
    ONE: 'ONE' as SzScoringFrequency,
    FEW: 'FEW' as SzScoringFrequency,
    MANY: 'MANY' as SzScoringFrequency,
    VERYMANY: 'VERY_MANY' as SzScoringFrequency,
    NAME: 'NAME' as SzScoringFrequency
};
