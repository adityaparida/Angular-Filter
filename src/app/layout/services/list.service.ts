import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = 'https://my-json-server.typicode.com/adityaparida/json-data/lists';

  getLists() {
    return this.http.get(this.baseUrl);
  }
}
