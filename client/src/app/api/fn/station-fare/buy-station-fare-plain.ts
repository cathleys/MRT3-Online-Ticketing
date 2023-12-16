/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFare } from '../../models/station-fare';

export interface BuyStationFare$Plain$Params {
  id: string;
}

export function buyStationFare$Plain(http: HttpClient, rootUrl: string, params: BuyStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StationFare>> {
  const rb = new RequestBuilder(rootUrl, buyStationFare$Plain.PATH, 'get');
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

buyStationFare$Plain.PATH = '/api/StationFare/{id}';
