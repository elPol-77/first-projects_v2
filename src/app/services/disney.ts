import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disneyinterface } from '../common/disneyinterface'; 

@Injectable({
  providedIn: 'root',
})
export class DisneyService {
  private URI: string = 'https://api.disneyapi.dev/character';
  
  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<Disneyinterface> {
    return this.http.get<Disneyinterface>(`${this.URI}?page=${page}`);
  }
}
