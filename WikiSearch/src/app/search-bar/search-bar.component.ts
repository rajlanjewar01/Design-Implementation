import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();


  input: string = '';

  SearchFrm = new FormGroup({
    input: new FormControl('',
    Validators.required
    )
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.SearchFrm.value.input !== ''){
      this.input = this.SearchFrm.value.input;

      this.submitted.emit(this.input);
    }
    
  }

}
