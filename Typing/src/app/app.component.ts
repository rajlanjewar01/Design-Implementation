import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = faker.lorem.sentence(5);

  enteredText = '';

  onInput(event: any){
   this.enteredText = event.target.value;
  }

  getClass(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    if(randomLetter === enteredLetter){
      return 'correct';
    }
    else{ 
      return 'incorrect';
    }
  }
}
