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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import { tap, catchError }                                               from 'rxjs/operators';

//import { ModelObject } from '../model/modelObject';
import { SzBulkDataAnalysisResponse } from '../model/szBulkDataAnalysisResponse';
import { SzBulkLoadResponse } from '../model/szBulkLoadResponse';
import { SzErrorResponse } from '../model/szErrorResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BulkDataService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Analyze a bulk data set of records. (Supports SSE)
     *
     * @param body The bulk record data as a single JSON record per line, a JSON array, or a CSV.  Further, multipart/form-data can be provided with the &quot;data&quot; property representing the record data as described above.  Set your content type accordingly.  The data should be in pre-mapped format using JSON property names or CSV column names as described by the [Senzing Generic Entity Specification](https://senzing.zendesk.com/hc/en-us/articles/231925448-Generic-Entity-Specification).
     * @param progressPeriod The suggested maximum time between SSE &#x60;progress&#x60; events specified in milliseconds.  If not specified then the default of &#x60;3000&#x60; milliseconds (i.e.: 3 seconds) is used.  This parameter is NOT used if the operation is not producing an SSE response (i.e.: &#x60;text/event-stream&#x60; media type was not requested via the &#x60;Accept&#x60; header).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public analyzeBulkRecords(body: string | Blob | File | Array<{ [key: string]: any; }>, progressPeriod?: string, observe?: 'body', reportProgress?: boolean): Observable<SzBulkDataAnalysisResponse>;
    public analyzeBulkRecords(body: string | Blob | File | Array<{ [key: string]: any; }>, progressPeriod?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SzBulkDataAnalysisResponse>>;
    public analyzeBulkRecords(body: string | Blob | File | Array<{ [key: string]: any; }>, progressPeriod?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SzBulkDataAnalysisResponse>>;
    public analyzeBulkRecords(body: string | Blob | File | Array<{ [key: string]: any; }>, progressPeriod?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling analyzeBulkRecords.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (progressPeriod !== undefined && progressPeriod !== null) {
            queryParameters = queryParameters.set('progressPeriod', <any>progressPeriod);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/plain; charset=UTF-8',
            'text/plain',
            'application/x-jsonlines; charset=UTF-8',
            'application/x-jsonlines',
            'application/vnd.ms-excel',
            'application/json; charset=UTF-8',
            'application/json',
            'text/csv; charset=UTF-8',
            'text/csv',
            'text/plain; charset=UTF-8',
            'text/plain',
            'multipart/form-data'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes, body);
        if(httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (body !== undefined) {
            formParams = formParams.append('data', <any>body) as any || formParams;
        }

        return this.httpClient.request<SzBulkDataAnalysisResponse>('post',`${this.basePath}/bulk-data/analyze`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Load the records in the provided bulk data set. (supports SSE)
     *
     * @param body The bulk record data as a single JSON record per line, a JSON array, or a CSV.  Further, multipart/form-data can be provided with the &quot;data&quot; property representing the record data as described above.  Set your content type accordingly.  The data should be in pre-mapped format using JSON property names or CSV column names as described by the [Senzing Generic Entity Specification](https://senzing.zendesk.com/hc/en-us/articles/231925448-Generic-Entity-Specification).
     * @param dataSource Used to set the overriding data source for the records.  This data source will be assigned to every record **unless** the record&#x27;s data source (including blank data source) has a specific mapping specified by a &#x60;mapDataSources&#x60; or &#x60;mapDataSource&#x60; parameters.  If this parameter is **not** provided and no specific overrides are provided for a record then the data source specified in the inbound record is used directly.  If the record has no data source and no override is provided then it will fail to load.
     * @param mapDataSources A URL-encoded JSON object whose properties are interpreted as data source codes to map from and whose corresponding values are interpretted as data source codes to map to.  For example, &#x60;{\&quot;EMPL\&quot;: \&quot;EMPLOYEES\&quot;}&#x60; (url-encoded of course) would map all records with inbound data source &#x60;EMPL&#x60; to &#x60;EMPLOYEES&#x60;.  To map only inbound records with no data source to a specific data source you would use an empty JSON property (e.g.: &#x60;{\&quot;\&quot;: \&quot;CUSTOMERS\&quot;}&#x60;). If the &#x60;dataSource&#x60; parameter is **not** provided and no specific overrides are provided for a record with this parameter or via &#x60;mapDataSource&#x60; then the data source specified in the inbound record is used directly.  If the record has no data source and no overriding or mapped data source is provided for an empty data source then the record will fail to load.  **NOTE**: If both this parameter and the &#x60;mapDataSource&#x60; parameter is provided then the mappings are merged with the more ad-hoc &#x60;mapDataSource&#x60; parameter taking precedence since it is likely being used for debugging and diagnostic purposes to avoid the URL encoding.  Here are some examples of encoding this parameter:  - **JavaScript Example**   &#x60;&#x60;&#x60;javascript     var dataSourceMap &#x3D; {       \&quot;\&quot;: \&quot;CUSTOMERS\&quot;,       \&quot;EMPL\&quot;: \&quot;EMPLOYEES\&quot;,       \&quot;VEND\&quot;: \&quot;VENDORS\&quot;     };     var mapDataSources &#x3D; JSON.stringify(dataSourceMap);     var urlPath &#x3D; \&quot;/bulk-data/load?mapDataSources&#x3D;\&quot;                 + encodeURIComponent(mapDataSources);   &#x60;&#x60;&#x60;  - **Java Example**   &#x60;&#x60;&#x60;java     JsonObjectBuilder builder &#x3D; Json.createObjectBuilder();     builder.add(\&quot;\&quot;, \&quot;CUSTOMERS\&quot;);     builder.add(\&quot;EMPL\&quot;, \&quot;EMPLOYEES\&quot;);     builder.add(\&quot;VEND\&quot;, \&quot;VENDORS\&quot;);     JsonObject dataSourceMap &#x3D; builder.build();      String mapDataSources &#x3D; dataSourceMap.toString();     String encodedMap     &#x3D; URLEncoder.encode(mapDataSources, \&quot;UTF-8\&quot;);     String urlPath &#x3D; \&quot;/bulk-data/load?mapDataSources&#x3D;\&quot; + encodedMap;   &#x60;&#x60;&#x60;  In both of the above examples the &#x60;urlPath&#x60; variable is set to: &#x60;&#x60;&#x60;json  /bulk-data/load?mapDataSources&#x3D;%7B%22%22%3A%22CUSTOMERS%22%2C%22EMPL%22%3A%22EMPLOYEES%22%2C%22VEND%22%3A%22VENDORS%22%7D  &#x60;&#x60;&#x60;
     * @param mapDataSource As an alternative to the &#x60;mapDataSources&#x60; parameter you may specify the &#x60;mapDataSource&#x60; parameter zero or more times to add additional data source mappings or **override** data source mappings from &#x60;mapDataSources&#x60;.  If you are using this API programmatically then you should typically use the &#x60;mapDataSources&#x60; parameter instead of this one.  But when manually constructing a URL in the browser address bar, in a command-line tool like &#x60;curl&#x60; or in a REST client browser extension for debugging or testing purposes, encoding the JSON value for &#x60;mapDataSources&#x60; can be unwieldy.  This parameter (which is multi-valued) lets you specify delimited strings that begin with the delimiter character, followed by the original data source name, then the delimiter character and the new data source name.  You should only have to URL-encode the delimiter you choose and maybe spaces.  For example, &#x60;:EMPL:EMPLOYEES&#x60; or &#x60;|EMPL|EMPLOYEES&#x60; (url-encoded of course) would map all records with inbound data source &#x60;EMPL&#x60; to &#x60;EMPLOYEES&#x60;.  To map only inbound records with no data source to a specific data source you would begin the value with two repeated delimiter characters followed by the new data source value (e.g.: &#x60;||CUSTOMERS&#x60; or &#x60;::CUSTOMERS&#x60;). If the &#x60;dataSource&#x60; parameter is **not** provided and no specific overrides are provided for a record with this parameter or the &#x60;mapDataSources&#x60; parameter then the data source specified in the inbound record is used directly.  If the record has no data source and no overriding or mapped data source is provided for an empty data source then the record will fail to load.
     * @param entityType Used to set the overriding entity type for the records.  This entity type will be assigned to every record **unless** the record&#x27;s entity type (including blank entity type) has a specific mapping specified by a &#x60;mapEntityTypes&#x60; or &#x60;mapEntityType&#x60; parameters.  If this parameter is **not** provided and no specific overrides are provided for a record then the entity type specified in the inbound record is used directly.  If the record has no entity type and no override is provided then &#x60;GENERIC&#x60; will be used.
     * @param mapEntityTypes A URL-encoded JSON object whose properties are interpreted as entity type codes to map from and whose corresponding values are interpretted as entity type codes to map to.  For example, &#x60;{\&quot;COMPANY\&quot;: \&quot;ORGANIZATION\&quot;}&#x60; (url-encoded of course) would map all records with inbound entity type &#x60;COMPANY&#x60; to &#x60;ORGANIZATION&#x60;.  To map only inbound records with no entity type to a specific entity type you would use an empty JSON property (e.g.: &#x60;{\&quot;\&quot;: \&quot;PERSON\&quot;}&#x60;). If the &#x60;entityType&#x60; parameter is **not** provided and no specific overrides are provided for a record with this parameter or via &#x60;mapEntityType&#x60; then the entity type specified in the inbound record is used directly.  If the record has no entity type and no overriding or mapped entity type is provided for an empty entity type then &#x60;GENERIC&#x60; will be used.  **NOTE**: If both this parameter and the &#x60;mapEntityType&#x60; parameter is provided then the mappings are merged with the more ad-hoc &#x60;mapEntityType&#x60; parameter taking precedence since it is likely being used for debugging and diagnostic purposes to avoid the URL encoding.  Here are some examples of encoding this parameter:  - **JavaScript Example**   &#x60;&#x60;&#x60;javascript     var entityTypeMap &#x3D; {       \&quot;\&quot;: \&quot;PERSON\&quot;,       \&quot;ORG\&quot;: \&quot;ORGANIZATION\&quot;,       \&quot;COMP\&quot;: \&quot;ORGANIZATION\&quot;     };     var mapEntityTypes &#x3D; JSON.stringify(entityTypeMap);     var urlPath &#x3D; \&quot;/bulk-data/load?mapEntityTypes&#x3D;\&quot;                 + encodeURIComponent(mapEntityTypes);   &#x60;&#x60;&#x60;  - **Java Example**   &#x60;&#x60;&#x60;java     JsonObjectBuilder builder &#x3D; Json.createObjectBuilder();     builder.add(\&quot;\&quot;, \&quot;PERSON\&quot;);     builder.add(\&quot;ORG\&quot;, \&quot;ORGANIZATION\&quot;);     builder.add(\&quot;COMP\&quot;, \&quot;ORGANIZATION\&quot;);     JsonObject entityTypeMap &#x3D; builder.build();      String mapEntityTypes &#x3D; entityTypeMap.toString();     String encodedMap     &#x3D; URLEncoder.encode(mapEntityTypes, \&quot;UTF-8\&quot;);     String urlPath &#x3D; \&quot;/bulk-data/load?mapEntityTypes&#x3D;\&quot; + encodedMap;   &#x60;&#x60;&#x60;  In both of the above examples the &#x60;urlPath&#x60; variable is set to: &#x60;&#x60;&#x60;json  /bulk-data/load?mapEntityTypes&#x3D;%7B%22%22%3A%22PERSON%22%2C%22ORG%22%3A%22ORGANIZATION%22%2C%22COMP%22%3A%22ORGANIZATION%22%7D  &#x60;&#x60;&#x60;
     * @param mapEntityType As an alternative to the &#x60;mapEntityTypes&#x60; parameter you may specify the &#x60;mapEntityType&#x60; parameter zero or more times to add additional data source mappings or **override** data source mappings from &#x60;mapDataSources&#x60;.  If you are using this API programmatically then you should typically use the &#x60;mapDataSources&#x60; parameter instead of this one.  But when manually constructing a URL in the browser address bar, in a command-line tool like &#x60;curl&#x60; or in a REST client browser extension for debugging or testing purposes, encoding the JSON value for &#x60;mapDataSources&#x60; can be unwieldy.  This parameter (which is multi-valued) lets you specify delimited strings that begin with the delimiter character, followed by the original data source name, then the delimiter character and the new data source name.  You should only have to URL-encode the delimiter you choose and maybe spaces.  For example, &#x60;:EMPL:EMPLOYEES&#x60; or &#x60;|EMPL|EMPLOYEES&#x60; (url-encoded of course) would map all records with inbound data source &#x60;EMPL&#x60; to &#x60;EMPLOYEES&#x60;.  To map only inbound records with no data source to a specific data source you would begin the value with two repeated delimiter characters followed by the new data source value (e.g.: &#x60;||CUSTOMERS&#x60; or &#x60;::CUSTOMERS&#x60;). If the &#x60;dataSource&#x60; parameter is **not** provided and no specific overrides are provided for a record with this parameter or the &#x60;mapDataSources&#x60; parameter then the data source specified in the inbound record is used directly.  If the record has no entity type and no overriding or mapped entity type is provided for an empty entity type then &#x60;GENERIC&#x60; will be used.
     * @param progressPeriod The suggested maximum time between SSE &#x60;progress&#x60; events specified in milliseconds.  If not specified then the default of &#x60;3000&#x60; milliseconds (i.e.: 3 seconds) is used.  This parameter is NOT used if the operation is not producing an SSE response (i.e.: &#x60;text/event-stream&#x60; media type was not requested via the &#x60;Accept&#x60; header).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loadBulkRecords(body: string | Blob | File | Array<{ [key: string]: any }>, dataSource?: string, mapDataSources?: string, mapDataSource?: Array<string>, entityType?: string, mapEntityTypes?: string, mapEntityType?: Array<string>, progressPeriod?: string, observe?: 'body', reportProgress?: boolean): Observable<SzBulkLoadResponse>;
    public loadBulkRecords(body: string | Blob | File | Array<{ [key: string]: any }>, dataSource?: string, mapDataSources?: string, mapDataSource?: Array<string>, entityType?: string, mapEntityTypes?: string, mapEntityType?: Array<string>, progressPeriod?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SzBulkLoadResponse>>;
    public loadBulkRecords(body: string | Blob | File | Array<{ [key: string]: any }>, dataSource?: string, mapDataSources?: string, mapDataSource?: Array<string>, entityType?: string, mapEntityTypes?: string, mapEntityType?: Array<string>, progressPeriod?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SzBulkLoadResponse>>;
    public loadBulkRecords(body: string | Blob | File | Array<{ [key: string]: any }>, dataSource?: string, mapDataSources?: string, mapDataSource?: Array<string>, entityType?: string, mapEntityTypes?: string, mapEntityType?: Array<string>, progressPeriod?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loadBulkRecords.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        /*
        if (dataSource !== undefined && dataSource !== null) {
          if((dataSource as { [key: string]: string }) && typeof (dataSource as { [key: string]: string }) !== 'string') {
            for (const key in (dataSource as { [key: string]: string })) {
                if(key === null || key === 'null' || key === 'NULL') {
                  queryParameters = queryParameters.append('dataSource', dataSource[key]);
                } else {
                  queryParameters = queryParameters.append('dataSource_'+key, dataSource[key]);
                }
                //console.log('BulkDataService.loadBulkRecords entity types set to: ', queryParameters);
            }
          } else {
            // is single ds
            queryParameters = queryParameters.set('dataSource', <any>dataSource);
          }
      }

      if (entityType !== undefined && entityType !== null) {
        if((entityType as { [key: string]: string }) && typeof (entityType as { [key: string]: string }) !== 'string') {
          for (const key in (entityType as { [key: string]: string })) {
              if(key === null || key === 'null' || key === 'NULL') {
                queryParameters = queryParameters.append('entityType', entityType[key]);
              } else {
                queryParameters = queryParameters.append('entityType_'+key, entityType[key]);
              }
          }
        } else {
          // is single et
          queryParameters = queryParameters.set('entityType', <any>entityType);
        }
      }*/

        if (dataSource !== undefined && dataSource !== null) {
            queryParameters = queryParameters.set('dataSource', <any>dataSource);
        }
        if (mapDataSources !== undefined && mapDataSources !== null) {
            queryParameters = queryParameters.set('mapDataSources', <any>mapDataSources);
        }
        if (mapDataSource) {
            mapDataSource.forEach((element) => {
                queryParameters = queryParameters.append('mapDataSource', <any>element);
            })
        }
        if (entityType !== undefined && entityType !== null) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (mapEntityTypes !== undefined && mapEntityTypes !== null) {
            queryParameters = queryParameters.set('mapEntityTypes', <any>mapEntityTypes);
        }
        if (mapEntityType) {
            mapEntityType.forEach((element) => {
                queryParameters = queryParameters.append('mapEntityType', <any>element);
            })
        }
        if (progressPeriod !== undefined && progressPeriod !== null) {
            queryParameters = queryParameters.set('progressPeriod', <any>progressPeriod);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-jsonlines; charset=UTF-8',
            'application/x-jsonlines',
            'application/json; charset=UTF-8',
            'application/json',
            'application/vnd.ms-excel',
            'text/csv; charset=UTF-8',
            'text/csv',
            'text/plain; charset=UTF-8',
            'text/plain',
            'multipart/form-data'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes, body);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (body !== undefined) {
            formParams = formParams.append('data', <any>body) as any || formParams;
        }

        return this.httpClient.request<SzBulkLoadResponse>('post',`${this.basePath}/bulk-data/load`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(
            tap( (resp) => {
                console.log('BulkDataService.loadBulkRecords: ', resp);
            })
        );
    }
}
