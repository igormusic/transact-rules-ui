import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

import {
  Account,
  AccountType,
  AmountType,
  AmountValue,
  Calendar,
  DateType,
  DateValue,
  HolidayDate,
  InstalmentSet,
  InstalmentType,
  InstalmentValue,
  OptionType,
  OptionValue,
  Position,
  PositionType,
  PositionTypePatch,
  RateType,
  RateValue,
  Schedule,
  ScheduleDate,
  BusinessDayCalculation,
  ScheduleEndType,
  ScheduleFrequency,
  ScheduleType,
  Timing,
  ScheduledTransaction,
  Transaction,
  TransactionOperation,
  TransactionRuleType,
  TransactionType
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = environment.apiurl;

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Method getAccountTypes
  * @return Full HTTP response as Observable
  */
  public getAccountTypes(): Observable<AccountType[]> {
    const uri = `/accountTypes`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<AccountType[]>('get', uri, headers, params, null);
  }

  /**
  * Method createAccountType
  * @param item item
  * @return Full HTTP response as Observable
  */
  public createAccountType(item: AccountType): Observable<AccountType> {
    const uri = `/accountTypes`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<AccountType>('post', uri, headers, params, JSON.stringify(item));
  }

  /**
  * Method getAccountTypeByClassName
  * @param className className
  * @return Full HTTP response as Observable
  */
  public getAccountTypeByClassName(className: string): Observable<AccountType> {
    const uri = `/accountTypes/${className}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<AccountType>('get', uri, headers, params, null);
  }

  /**
  * Method deleteAccountTypeByName
  * @param className className
  * @return Full HTTP response as Observable
  */
  public deleteAccountTypeByName(className: string): Observable<any> {
    const uri = `/accountTypes/${className}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method getPositionTypes
  * @param className className
  * @return Full HTTP response as Observable
  */
  public getPositionTypes(className: string): Observable<PositionType[]> {
    const uri = `/accountTypes/${className}/positionTypes`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<PositionType[]>('get', uri, headers, params, null);
  }

  /**
  * Method createPositionType
  * @param item item
  * @param className className
  * @return Full HTTP response as Observable
  */
  public createPositionType(item: PositionType, className: string): Observable<PositionType> {
    const uri = `/accountTypes/${className}/positionTypes`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<PositionType>('post', uri, headers, params, JSON.stringify(item));
  }

  /**
  * Method getPositionType
  * @param className className
  * @param propertyName propertyName
  * @return Full HTTP response as Observable
  */
  public getPositionType(className: string, propertyName: string): Observable<PositionType> {
    const uri = `/accountTypes/${className}/positionTypes/${propertyName}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<PositionType>('get', uri, headers, params, null);
  }

  /**
  * Method updatePositionType
  * @param item item
  * @param className className
  * @param propertyName propertyName
  * @return Full HTTP response as Observable
  */
  public updatePositionType(item: PositionTypePatch, className: string, propertyName: string): Observable<PositionType> {
    const uri = `/accountTypes/${className}/positionTypes/${propertyName}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<PositionType>('patch', uri, headers, params, JSON.stringify(item));
  }

  /**
  * Method getAccounts
  * @return Full HTTP response as Observable
  */
  public getAccounts(): Observable<Account[]> {
    const uri = `/accounts`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account[]>('get', uri, headers, params, null);
  }

  /**
  * Method createAccount
  * @param account account
  * @return Full HTTP response as Observable
  */
  public createAccount(account: Account): Observable<any> {
    const uri = `/accounts`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(account));
  }

  /**
  * Method getCalculatedProperties
  * @param prototype prototype
  * @return Full HTTP response as Observable
  */
  public getCalculatedProperties(prototype: Account): Observable<Account> {
    const uri = `/accounts/calculateProperties`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account>('post', uri, headers, params, JSON.stringify(prototype));
  }

  /**
  * Method solveInstalments
  * @param prototype prototype
  * @return Full HTTP response as Observable
  */
  public solveInstalments(prototype: Account): Observable<Account> {
    const uri = `/accounts/solveInstalments`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account>('post', uri, headers, params, JSON.stringify(prototype));
  }

  /**
  * Method createAccountFromAccountType
  * @param accountTypeName accountTypeName
  * @return Full HTTP response as Observable
  */
  public createAccountFromAccountType(accountTypeName: string): Observable<Account> {
    const uri = `/accounts/${accountTypeName}/new`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account>('get', uri, headers, params, null);
  }

  /**
  * Method getAccountById
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getAccountById(id: string): Observable<Account> {
    const uri = `/accounts/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account>('get', uri, headers, params, null);
  }

  /**
  * Method activateAccount
  * @param id id
  * @return Full HTTP response as Observable
  */
  public activateAccount(id: string): Observable<Account> {
    const uri = `/accounts/${id}/activate`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Account>('get', uri, headers, params, null);
  }

  /**
  * Method getTransactions
  * @param id id
  * @param from from
  * @param to to
  * @param positionType1 positionType1
  * @param positionType2 positionType2
  * @return Full HTTP response as Observable
  */
  public getTransactions(id: string, from: string, to: string, positionType1: string, positionType2: string): Observable<Transaction[]> {
    const uri = `/accounts/${id}/transactions`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (from !== undefined && from !== null) {
      params = params.set('from', from + '');
    }
    if (to !== undefined && to !== null) {
      params = params.set('to', to + '');
    }
    if (positionType1 !== undefined && positionType1 !== null) {
      params = params.set('positionType1', positionType1 + '');
    }
    if (positionType2 !== undefined && positionType2 !== null) {
      params = params.set('positionType2', positionType2 + '');
    }
    return this.sendRequest<Transaction[]>('get', uri, headers, params, null);
  }

  /**
  * Method getCalendars
  * @return Full HTTP response as Observable
  */
  public getCalendars(): Observable<Calendar[]> {
    const uri = `/calendars`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Calendar[]>('get', uri, headers, params, null);
  }


  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<T> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params});
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params});
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params});
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
