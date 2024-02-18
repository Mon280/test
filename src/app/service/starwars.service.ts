import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class starWarsService {
  private api_url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public getCharacterByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
