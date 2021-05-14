import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  cargarPersonajes(): Observable<any> {
    return this.http.get('http://localhost:4000/personajes').pipe(map((resp: any) => resp));
  }

}
