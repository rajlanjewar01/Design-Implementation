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
    console.log(this.useLetter);
  }


}
