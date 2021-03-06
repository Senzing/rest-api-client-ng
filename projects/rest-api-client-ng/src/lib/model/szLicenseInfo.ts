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
 * Describes the Senzing product license.
 */
export interface SzLicenseInfo {
  /**
   * The customer information associated with the license.
   */
  customer?: string;
  /**
   * The contract information associated with the license.
   */
  contract?: string;
  /**
   * The description of the type of license.
   */
  licenseType?: string;
  /**
   * The description of the license level.
   */
  licenseLevel?: string;
  /**
   * The billing information associated with the license
   */
  billing?: string;
  /**
   * The issuance date for the license.
   */
  issuanceDate?: Date;
  /**
   * The expiration date for the license.
   */
  expirationDate?: Date;
  /**
   * The record limit associated with the license.
   */
  recordLimit?: number;
}
