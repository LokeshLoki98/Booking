import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {
  arr:any;
  toggle:any;
  constructor() 
  {
    
    this.arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    this.toggle=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

  } 

  book(i:any)
  {
    this.toggle[i] = !this.toggle[i];
  }  
  ngOnInit(): void {
  }

}
