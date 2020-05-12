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
 * Describes the scoring bucket that a feature score falls into.  The range of scores constitute different buckets depending on the feature type..  The possible values are:     * `SAME` - The two feature values are considered to be the same.     * `CLOSE` - The two feature values are considered to be close.     * `LIKELY` - The two feature values are similar, but not enough to                  be considered `CLOSE`.     * `PLAUSIBLE` - It's possible that the two feature values are the                     same but almost just as likely that they are not.     * `UNLIKELY` - It's unlikely that the two feature values represent                    the same value.     * `NO_CHANCE` - The two feature values obviously represent different                     values.
 */
export type SzScoringBucket = 'SAME' | 'CLOSE' | 'LIKELY' | 'PLAUSIBLE' | 'UNLIKELY' | 'NO_CHANCE';

export const SzScoringBucket = {
    SAME: 'SAME' as SzScoringBucket,
    CLOSE: 'CLOSE' as SzScoringBucket,
    LIKELY: 'LIKELY' as SzScoringBucket,
    PLAUSIBLE: 'PLAUSIBLE' as SzScoringBucket,
    UNLIKELY: 'UNLIKELY' as SzScoringBucket,
    NOCHANCE: 'NO_CHANCE' as SzScoringBucket
};