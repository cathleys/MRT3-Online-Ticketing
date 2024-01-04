/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StationFareDto } from '../../models/station-fare-dto';

export interface SearchStationFare$Plain$Params {
  from?: string;
  destination?: string;
}

export function searchStationFare$Plain(http: HttpClient, rootUrl: string, params?: SearchStationFare$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StationFareDto>>> {
  const rb = new RequestBuilder(rootUrl, searchStationFare$Plain.PATH, 'get');
  if (params) {
    rb.query('from', params.from, {});
    rb.query('destination', params.destination, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StationFareDto>>;
    })
  );
}

searchStationFare$Plain.PATH = '/api/StationFare';
