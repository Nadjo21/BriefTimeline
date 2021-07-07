import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-partieencours',
  templateUrl: './partieencours.component.html',
  styleUrls: ['./partieencours.component.css']
})
export class PartieencoursComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  answerForm = this.formBuilder.group({
    answer: '',

  })

  guessButton(){}

  ngOnInit(): void {
  }

}
