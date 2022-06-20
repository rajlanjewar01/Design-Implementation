import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  useLetter = false;
  useNumber = false; 
  useSymbol = false;
  password = '';

  onChangeLength(event: any){
    //type casting
    this.length = parseInt(event.target.value);
  }

  onChangeUseLetter(){
    this.useLetter = !this.useLetter;
  }

  onChangeUseNumber(){
    this.useNumber = !this.useNumber;
  }

  onChangeUseSymbol(){
    this.useSymbol = !this.useSymbol;
  }

  //generate random password
  onClick(){
    const numbers = 1234567890;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.useLetter){
      validChars += letters;
    }
    if(this.useNumber){
      validChars += numbers;
    }
    if(this.useSymbol){
      validChars += symbols;
    }

    let generatedPass = '';

    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];

      this.password = generatedPass;
    }
  }
 


}
