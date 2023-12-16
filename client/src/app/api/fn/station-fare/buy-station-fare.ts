/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFare } from '../../models/station-fare';

export interface BuyStationFare$Params {
  id: string;
}

export function buyStationFare(http: HttpClient, rootUrl: string, params: BuyStationFare$Params, context?: HttpContext): Observable<StrictHttpResponse<StationFare>> {
  const rb = new RequestBuilder(rootUrl, buyStationFare.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StationFare>;
    })
  );
}

buyStationFare.PATH = '/api/StationFare/{id}';
