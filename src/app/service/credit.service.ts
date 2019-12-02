import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  url: string = "http://localhost:8080/credits/";

  constructor(private http: HttpClient) {}


  list(): Observable<JsonResponse> {
 
      return this.http.get(this.url) as Observable<JsonResponse>;

  }


  get(id: number): Observable<JsonResponse> {

    return this.http.get(this.url+id) as Observable<JsonResponse>;

  }



}
