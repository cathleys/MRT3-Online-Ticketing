/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketingDto } from '../../models/ticketing-dto';

export interface ListTicketing$Plain$Params {
  email: string;
}

export function listTicketing$Plain(http: HttpClient, rootUrl: string, params: ListTicketing$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketingDto>>> {
  const rb = new RequestBuilder(rootUrl, listTicketing$Plain.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TicketingDto>>;
    })
  );
}

listTicketing$Plain.PATH = '/api/Ticketing/{email}';
