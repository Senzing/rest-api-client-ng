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
 * Describes the Senzing version information.
 */
export interface SzVersionInfo {
  /**
   * The version of the REST API Server implementation.
   */
  apiServerVersion?: string;
  /**
   * The version of the REST API Specification that is implemented.
   */
  restApiVersion?: string;
  /**
   * The version for the underlying runtime native Senzing API.
   */
  nativeApiVersion?: string;
  /**
   * The build number for the underlying runtime native Senzing API.
   */
  nativeApiBuildNumber?: string;
  /**
   * The build date for the underlying runtime native Senzing API.
   */
  nativeApiBuildDate?: Date;
  /**
   * The configuration compatibility version for the underlying runtime native Senzing API.
   */
  configCompatibilityVersion?: string;
}
