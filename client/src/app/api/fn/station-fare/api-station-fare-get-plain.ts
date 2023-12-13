/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFare } from '../../models/station-fare';

export interface ApiStationFareGet$Plain$Params {
}

export function apiStationFareGet$Plain(http: HttpClient, rootUrl: string, params?: ApiStationFareGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
  const rb = new RequestBuilder(rootUrl, apiStationFareGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StationFare>>;
    })
  );
}

apiStationFareGet$Plain.PATH = '/api/StationFare';
