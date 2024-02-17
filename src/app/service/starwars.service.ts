import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private api_url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  public getInfo(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }
}
