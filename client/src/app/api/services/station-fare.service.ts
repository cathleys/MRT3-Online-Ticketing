/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStationFareGet } from '../fn/station-fare/api-station-fare-get';
import { ApiStationFareGet$Params } from '../fn/station-fare/api-station-fare-get';
import { apiStationFareGet$Plain } from '../fn/station-fare/api-station-fare-get-plain';
import { ApiStationFareGet$Plain$Params } from '../fn/station-fare/api-station-fare-get-plain';
import { apiStationFareIdGet } from '../fn/station-fare/api-station-fare-id-get';
import { ApiStationFareIdGet$Params } from '../fn/station-fare/api-station-fare-id-get';
import { StationFare } from '../models/station-fare';

@Injectable({ providedIn: 'root' })
export class StationFareService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStationFareGet()` */
  static readonly ApiStationFareGetPath = '/api/StationFare';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStationFareGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareGet$Plain$Response(params?: ApiStationFareGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
    return apiStationFareGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStationFareGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareGet$Plain(params?: ApiStationFareGet$Plain$Params, context?: HttpContext): Observable<Array<StationFare>> {
    return this.apiStationFareGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFare>>): Array<StationFare> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStationFareGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareGet$Response(params?: ApiStationFareGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
    return apiStationFareGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStationFareGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareGet(params?: ApiStationFareGet$Params, context?: HttpContext): Observable<Array<StationFare>> {
    return this.apiStationFareGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFare>>): Array<StationFare> => r.body)
    );
  }

  /** Path part for operation `apiStationFareIdGet()` */
  static readonly ApiStationFareIdGetPath = '/api/StationFare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStationFareIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareIdGet$Response(params: ApiStationFareIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStationFareIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStationFareIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStationFareIdGet(params: ApiStationFareIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiStationFareIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
