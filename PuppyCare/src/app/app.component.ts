import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receiversName: string = '';
  paymentDate: string = '';
  paymentAmt: number = 0;
  
  onNameChange(event: any){
    this.receiversName = event.target.value;
  }

  onDateChange(event: any){
    this.paymentDate = event.target.value;
  }

  onAmtChange(event: any){
    this.paymentAmt = event.target.value;
  }
}
