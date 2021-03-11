import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  SERVER ='http://localhost:8000/';

   constructor(private httpClient:HttpClient) { }

    get():Observable<any>{
      return this.httpClient.get(this.SERVER +"team");
    }
    getOne(identifi):Observable<any>{
      return this.httpClient.get(this.SERVER +"person/"+ identifi);
    }

    get_category():Observable<any>{
      return this.httpClient.get(this.SERVER +"category");
    }
    get_origin():Observable<any>{
      return this.httpClient.get(this.SERVER +"origin");
    }
    get_person():Observable<any>{
      return this.httpClient.get(this.SERVER +"person");
    }


    post_team(team:any){
      let json = JSON.stringify(team); //aqui ya tiene los datos
      let headers= new HttpHeaders().set('content-Type','applicatios/json');
  
      return this.httpClient.post(this.SERVER + "team",json,{headers:headers});
    }

}
