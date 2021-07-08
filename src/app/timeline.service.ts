import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Timeline} from "./timeline";



@Injectable({
  providedIn: 'root'
})
export class TimelineService {

   baseAPIUrl = 'http://localhost:8080/api/timeline';



  constructor(private http: HttpClient) { }

// Recuperer la liste des timelines
 getTimelineList(){
  return this.http.get<Timeline[]>(this.baseAPIUrl);
 }
}







