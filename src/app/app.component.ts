import { Component } from '@angular/core';
import {TimelineService} from "./timeline.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brief-Timeline';

 //timelineList= this.timelineService.getTimelineList()


  constructor(private timelineService: TimelineService) {
  }

  returnToTheList(){
  }
  addATimeline(){
  }
}
