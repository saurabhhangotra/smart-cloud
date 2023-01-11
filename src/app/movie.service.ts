import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

    API_URL ="https://api.jikan.moe/v4/top/anime?limit=20";

  constructor(private http: HttpClient) {}

  searchMovie() {
    return this.http.get<any>(`${this.API_URL}`);
  }
}
