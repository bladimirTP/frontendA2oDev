import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  SERVER ='http://localhost:8000/';

  constructor(private httpClient:HttpClient) { }

   get():Observable<any>{
     return this.httpClient.get(this.SERVER +"game");
   }
   getOne(identifi):Observable<any>{
     return this.httpClient.get(this.SERVER +"teamshow/"+ identifi);
   }

   get_league():Observable<any>{
     return this.httpClient.get(this.SERVER + "league");
   }
   get_team():Observable<any>{
     return this.httpClient.get(this.SERVER + "team");
   }


   post_game(league:any){
     let json = JSON.stringify(league); //aqui ya tiene los datos
     let headers= new HttpHeaders().set('content-Type','applicatios/json');
 
     return this.httpClient.post(this.SERVER + "game",json,{headers:headers});
   }

}
