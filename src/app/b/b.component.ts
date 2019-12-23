import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.sass']
})
export class BComponent{
  
  bWorks() {
    console.log("B works");
  }
  constructor() { }

  

    
}
