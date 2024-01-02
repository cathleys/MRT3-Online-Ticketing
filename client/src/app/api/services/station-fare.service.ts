/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buyStationFare } from '../fn/station-fare/buy-station-fare';
import { BuyStationFare$Params } from '../fn/station-fare/buy-station-fare';
import { findStationFare } from '../fn/station-fare/find-station-fare';
import { FindStationFare$Params } from '../fn/station-fare/find-station-fare';
import { findStationFare$Plain } from '../fn/station-fare/find-station-fare-plain';
import { FindStationFare$Plain$Params } from '../fn/station-fare/find-station-fare-plain';
import { searchStationFare } from '../fn/station-fare/search-station-fare';
import { SearchStationFare$Params } from '../fn/station-fare/search-station-fare';
import { searchStationFare$Plain } from '../fn/station-fare/search-station-fare-plain';
import { SearchStationFare$Plain$Params } from '../fn/station-fare/search-station-fare-plain';
import { StationFareDto } from '../models/station-fare-dto';

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
  searchStationFare$Plain$Response(params?: SearchStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFareDto>>> {
    return searchStationFare$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchStationFare$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare$Plain(params?: SearchStationFare$Plain$Params, context?: HttpContext): Observable<Array<StationFareDto>> {
    return this.searchStationFare$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFareDto>>): Array<StationFareDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchStationFare()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare$Response(params?: SearchStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFareDto>>> {
    return searchStationFare(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchStationFare$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStationFare(params?: SearchStationFare$Params, context?: HttpContext): Observable<Array<StationFareDto>> {
    return this.searchStationFare$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StationFareDto>>): Array<StationFareDto> => r.body)
    );
  }

  /** Path part for operation `findStationFare()` */
  static readonly FindStationFarePath = '/api/StationFare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findStationFare$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStationFare$Plain$Response(params: FindStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StationFareDto>> {
    return findStationFare$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findStationFare$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStationFare$Plain(params: FindStationFare$Plain$Params, context?: HttpContext): Observable<StationFareDto> {
    return this.findStationFare$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StationFareDto>): StationFareDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findStationFare()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStationFare$Response(params: FindStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<StationFareDto>> {
    return findStationFare(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findStationFare$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStationFare(params: FindStationFare$Params, context?: HttpContext): Observable<StationFareDto> {
    return this.findStationFare$Response(params, context).pipe(
      map((r: StrictHttpResponse<StationFareDto>): StationFareDto => r.body)
    );
  }

  /** Path part for operation `buyStationFare()` */
  static readonly BuyStationFarePath = '/api/StationFare/buy-ticket';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyStationFare()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  buyStationFare$Response(params?: BuyStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return buyStationFare(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyStationFare$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  buyStationFare(params?: BuyStationFare$Params, context?: HttpContext): Observable<void> {
    return this.buyStationFare$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
