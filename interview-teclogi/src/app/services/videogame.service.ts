import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideogameInfo } from '../models/videogame-info.interface';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor(private http: HttpClient) { }

  getVideogameByID(gameID:number):Observable<VideogameInfo>{
    return this.http.get<VideogameInfo>(`${environment.API_URL}/games?id=${gameID}`);
  }
}
