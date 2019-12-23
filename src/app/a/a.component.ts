import { Component, OnInit } from '@angular/core';
import { BComponent } from '../b/b.component';
import { cClass } from '../c';
import { prototype } from 'events';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.sass']
})

export class AComponent implements OnInit {

  constructor() {
    console.log("A works");
    BComponent.prototype.bWorks();    
    cClass.prototype.cWorks();
  }
  
  
  // allComponents()
  // console.log("What what");
  
  ngOnInit() {
  }
  
}