/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { loginAccount } from '../fn/account/login-account';
import { LoginAccount$Params } from '../fn/account/login-account';
import { loginAccount$Plain } from '../fn/account/login-account-plain';
import { LoginAccount$Plain$Params } from '../fn/account/login-account-plain';
import { registerAccount } from '../fn/account/register-account';
import { RegisterAccount$Params } from '../fn/account/register-account';
import { registerAccount$Plain } from '../fn/account/register-account-plain';
import { RegisterAccount$Plain$Params } from '../fn/account/register-account-plain';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerAccount()` */
  static readonly RegisterAccountPath = '/api/Account/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAccount$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerAccount$Plain$Response(params?: RegisterAccount$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return registerAccount$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerAccount$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerAccount$Plain(params?: RegisterAccount$Plain$Params, context?: HttpContext): Observable<UserDto> {
    return this.registerAccount$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAccount()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerAccount$Response(params?: RegisterAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return registerAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerAccount$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerAccount(params?: RegisterAccount$Params, context?: HttpContext): Observable<UserDto> {
    return this.registerAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `loginAccount()` */
  static readonly LoginAccountPath = '/api/Account/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginAccount$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAccount$Plain$Response(params?: LoginAccount$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return loginAccount$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginAccount$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAccount$Plain(params?: LoginAccount$Plain$Params, context?: HttpContext): Observable<UserDto> {
    return this.loginAccount$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginAccount()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAccount$Response(params?: LoginAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return loginAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginAccount$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAccount(params?: LoginAccount$Params, context?: HttpContext): Observable<UserDto> {
    return this.loginAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

}
