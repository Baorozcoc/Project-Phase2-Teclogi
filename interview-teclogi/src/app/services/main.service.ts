import { Injectable } from '@angular/core';
import { Videogame } from '../models/videogame.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(private http: HttpClient) { }

  get10VideogamesByTitle(title:string,limit:number=10):Observable<Videogame[]>{
      return this.http.get<Videogame[]>(`${environment.API_URL}/games?title=${title}&limit=${limit}`);
  }
}
