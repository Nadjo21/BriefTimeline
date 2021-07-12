import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
import {Card} from "../card";
import {Observable} from "rxjs";



@Component({
  selector: 'app-menuedition',
  templateUrl: './menuedition.component.html',
  styleUrls: ['./menuedition.component.css']
})
export class MenueditionComponent implements OnInit {

  cardList = this.cardService.getCardList(1)


  constructor(private cardService: MainService) {
  }

  ngOnInit(): void {


  }
}












