/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFare } from '../../models/station-fare';

export interface SearchStationFare$Params {
}

export function searchStationFare(http: HttpClient, rootUrl: string, params?: SearchStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFare>>> {
  const rb = new RequestBuilder(rootUrl, searchStationFare.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StationFare>>;
    })
  );
}

searchStationFare.PATH = '/api/StationFare';