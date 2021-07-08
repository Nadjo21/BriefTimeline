import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-ajoutertimeline',
  templateUrl: './ajoutertimeline.component.html',
  styleUrls: ['./ajoutertimeline.component.css']
})
export class AjoutertimelineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  timelineForm = this.formBuilder.group({
    name: 'testname',
    category: 'testcat',
    creationDate: '01/07/2021',
  })

  saveTimeline(){}

  cardForm = this.formBuilder.group({
    name: '',
    creationDate: '',
    imageurl: '',
    description:'',
  })

  saveCard(){}

  ngOnInit(): void {
  }

}



