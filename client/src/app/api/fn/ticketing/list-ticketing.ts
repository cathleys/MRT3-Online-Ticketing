/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketingDto } from '../../models/ticketing-dto';

export interface ListTicketing$Params {
  email: string;
}

export function listTicketing(http: HttpClient, rootUrl: string, params: ListTicketing$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketingDto>>> {
  const rb = new RequestBuilder(rootUrl, listTicketing.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TicketingDto>>;
    })
  );
}

listTicketing.PATH = '/api/Ticketing/{email}';
