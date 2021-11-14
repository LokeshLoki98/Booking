import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent implements OnInit {

  constructor(private data:ChatService) { }
  msgs=[]

  send(msg:any){
  
     this.msgs=this.data.chat(msg);
  
  }
  ngOnInit(): void {
  }

}
