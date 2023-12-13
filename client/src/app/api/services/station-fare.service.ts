/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getStationFaresStationFare } from '../fn/station-fare/get-station-fares-station-fare';
import { GetStationFaresStationFare$Params } from '../fn/station-fare/get-station-fares-station-fare';
import { searchStationFare } from '../fn/station-fare/search-station-fare';
import { SearchStationFare$Params } from '../fn/station-fare/search-station-fare';
import { searchStationFare$Plain } from '../fn/station-fare/search-station-fare-plain';
import { SearchStationFare$Plain$Params } from '../fn/station-fare/search-station-fare-plain';
import { StationFare } from '../models/station-fare';

@Injectable({ providedIn: 'root' })
export class StationFareService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `searchStationFare()` */
  static readonly SearchStationFarePath = '/api/StationFare';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchStationFare$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare$Plain$Response(params?: SearchStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
    return searchStationFare$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchStationFare$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare$Plain(params?: SearchStationFare$Plain$Params, context?: HttpContext): Observable<Array<StationFare>> {
    return this.searchStationFare$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFare>>): Array<StationFare> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchStationFare()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare$Response(params?: SearchStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
    return searchStationFare(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchStationFare$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare(params?: SearchStationFare$Params, context?: HttpContext): Observable<Array<StationFare>> {
    return this.searchStationFare$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFare>>): Array<StationFare> => r.body)
    );
  }

  /** Path part for operation `getStationFaresStationFare()` */
  static readonly GetStationFaresStationFarePath = '/api/StationFare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStationFaresStationFare()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStationFaresStationFare$Response(params: GetStationFaresStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getStationFaresStationFare(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStationFaresStationFare$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStationFaresStationFare(params: GetStationFaresStationFare$Params, context?: HttpContext): Observable<void> {
    return this.getStationFaresStationFare$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
