import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MainService} from "../main.service";
import {Card} from "../card";


@Component({
  selector: 'app-partieencours',
  templateUrl: './partieencours.component.html',
  styleUrls: ['./partieencours.component.css']
})
export class PartieencoursComponent implements OnInit {


  cardsToGuess: Card[] = [];
  guessingCard: Card | undefined;
  cardsAlreadyGuessed: Card[] = [];


  constructor(private formBuilder: FormBuilder, private cardService: MainService) {
  }

  answerForm = this.formBuilder.group({
    dateD: ''

  })

  submitButton() {
    // this.answerForm;
    console.log(this.answerForm.value)
  }



  ngOnInit(): void {


    //fonction pour afficher les cartes dans la zone a jouer
    // Vous irez récupérer l'ID depuis la route mais moi je suis pressé
    //le suscribe permet de lister les etapes qui suivent après récéption de la cardList
    this.cardService.getCardList(1).subscribe(cardList => {

      // remplir la liste des cartes à deviner
      this.cardsToGuess = cardList;
      // mise en place du tirage aléatoire
      this.guessingCard = this.cardsToGuess[Math.floor(Math.random() * this.cardsToGuess.length)];
    });

      //Fonction pour vérifier la réponse du formulaire
    // function  checkIfDateIsTrue() {
    //   if (this.answerForm.value === this.guessingCard.date){
    //     //j'affiche la carte suivante
    //     this.guessingCard
    //   }
    //   else{
    //     console.log("Recommence")
    //   }
    // }


  }


}



