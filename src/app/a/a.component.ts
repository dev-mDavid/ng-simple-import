import { Component, OnInit } from '@angular/core';
import { BComponent } from '../b/b.component';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.sass']
})

export class AComponent implements OnInit {
  isWorking: BComponent;

  constructor() {
    console.log("A works");
    this.isWorking = new BComponent();
  }
  
  allComponents() {
    return this.isWorking.bWorks();
  }
  // allComponents()
  
  ngOnInit() {
  }

}
