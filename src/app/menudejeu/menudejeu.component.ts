import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";



@Component({
  selector: 'app-menudejeu',
  templateUrl: './menudejeu.component.html',
  styleUrls: ['./menudejeu.component.css']
})
export class MenudejeuComponent implements OnInit {


  timelineList= this.timelineService.getTimelineList()

  constructor(private timelineService: MainService) { }

  ngOnInit(): void {
  }




  deleteButton(){

  }

}


