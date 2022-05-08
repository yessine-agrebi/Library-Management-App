import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livres } from '../models/livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  url = "http://localhost:3001/api/livres";
  constructor(private http:HttpClient) { }

  ListLivres = ():Observable<Livres[]> => {
    return this.http.get<Livres[]>(this.url);
  }
}
