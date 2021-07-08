

// Etape 1 : je définis le format des données reçu de l'API

import {Card} from "./card";

export interface Timeline {
  id: number;
  name:string;
  creationDate: Date;
  updateDate: Date;
  category: string;
  cardList:Card[];
}
