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
 * The method by which feature values should be included for entities returned in the response.  The possible values are:   * `NONE` - Do not include any feature values -- this is the fastest              option from a performance perspective because feature              values do not have to be retrieved.   * `REPRESENTATIVE` - Include only a single representative value per                        \"unique\" value of a feature.  If there are                        multiple values that are near duplicates then                        only one value is included and the others are                        suppressed.   * `WITH_DUPLICATES` - ** (default value) ** Group near-duplicate                         feature values and return a representative value                         along with its near duplicate values.
 */
export type SzFeatureMode = 'NONE' | 'REPRESENTATIVE' | 'WITH_DUPLICATES';

export const SzFeatureMode = {
    NONE: 'NONE' as SzFeatureMode,
    REPRESENTATIVE: 'REPRESENTATIVE' as SzFeatureMode,
    WITHDUPLICATES: 'WITH_DUPLICATES' as SzFeatureMode
};
