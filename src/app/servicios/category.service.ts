import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';// exportamos
import { Observable } from 'rxjs'; //importamos
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  obtener():Observable<any>{
    return this.httpClient.get("http://localhost:8000/category");
}
}
