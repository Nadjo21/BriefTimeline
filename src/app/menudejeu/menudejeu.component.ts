import { Component, OnInit } from '@angular/core';
import {TimelineService} from "../timeline.service";



@Component({
  selector: 'app-menudejeu',
  templateUrl: './menudejeu.component.html',
  styleUrls: ['./menudejeu.component.css']
})
export class MenudejeuComponent implements OnInit {


  timelineList= this.timelineService.getTimelineList()

  constructor(private timelineService: TimelineService) { }


  ngOnInit(): void {
  }

  deleteButton(){

  }

}


