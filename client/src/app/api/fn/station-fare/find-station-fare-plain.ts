/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFare } from '../../models/station-fare';

export interface FindStationFare$Plain$Params {
  id: string;
}

export function findStationFare$Plain(http: HttpClient, rootUrl: string, params: FindStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StationFare>> {
  const rb = new RequestBuilder(rootUrl, findStationFare$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StationFare>;
    })
  );
}

findStationFare$Plain.PATH = '/api/StationFare/{id}';
