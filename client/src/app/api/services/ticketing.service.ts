/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { listTicketing } from '../fn/ticketing/list-ticketing';
import { ListTicketing$Params } from '../fn/ticketing/list-ticketing';
import { listTicketing$Plain } from '../fn/ticketing/list-ticketing-plain';
import { ListTicketing$Plain$Params } from '../fn/ticketing/list-ticketing-plain';
import { TicketingDto } from '../models/ticketing-dto';

@Injectable({ providedIn: 'root' })
export class TicketingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listTicketing()` */
  static readonly ListTicketingPath = '/api/Ticketing/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTicketing$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTicketing$Plain$Response(params: ListTicketing$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketingDto>>> {
    return listTicketing$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTicketing$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTicketing$Plain(params: ListTicketing$Plain$Params, context?: HttpContext): Observable<Array<TicketingDto>> {
    return this.listTicketing$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TicketingDto>>): Array<TicketingDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTicketing()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTicketing$Response(params: ListTicketing$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketingDto>>> {
    return listTicketing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTicketing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTicketing(params: ListTicketing$Params, context?: HttpContext): Observable<Array<TicketingDto>> {
    return this.listTicketing$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TicketingDto>>): Array<TicketingDto> => r.body)
    );
  }

}
