import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApiDisney } from '../common/disneyinterface2';

@Injectable({
  providedIn: 'root',
})
export class Disney2Service {
    private URI: string = 'https://api.disneyapi.dev/character/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number= 1 ,pageSize: number=20, name: string= ""): Observable<InfoApiDisney> {
    return this.http.get<InfoApiDisney>(`${this.URI}?page=${page}&pageSize=${pageSize}&name=${name}`)
  }
  
}
