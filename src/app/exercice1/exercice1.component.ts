import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {

interpolation : string = "interpolation"

  clickEvenement(){
    return console.log("Evenement")

  }
}
