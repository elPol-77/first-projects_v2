import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValorantInfoApi } from '../common/valorantinterface.ts';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  private URI: string = 'https://valorant-api.com/v1/agents/';
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ValorantInfoApi> {
    return this.http.get<ValorantInfoApi>(`${this.URI}`)
  }
}
