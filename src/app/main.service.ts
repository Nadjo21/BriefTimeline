import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Timeline} from "./timeline";
import {Card} from "./card";


@Injectable({
  providedIn: 'root'
})

export class MainService {

   baseAPIUrl = 'http://localhost:8080/api/timeline';
constructor(private http: HttpClient) { }

// Recuperer la liste des timelines 'OK'
 getTimelineList(){
  return this.http.get<Timeline[]>(this.baseAPIUrl);
 }


 //Recuperer la liste des cartes
  getCardList(timelineId : number){
       return this.http.get<Card[]>(this.baseAPIUrl +'/' + timelineId + '/card');


  }


}







