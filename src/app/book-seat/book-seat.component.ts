import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
  arr:any;
  toggle:any;
  p:any;
  r:any;
  pr:any;
  count:any;
  isShown: boolean;
  permpselect:any;
  dateobj:any;
  constructor() 
  {
    
    this.arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    this.toggle=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    this.isShown = false;
    this.permpselect=[...this.toggle];

  }

  ngOnInit(): void {
     let retrived = localStorage.getItem("noofseats")
    if(retrived)
    {

      this.permpselect=[...retrived.split(",")]
      console.log("before:",this.permpselect);
    }else{
      return;
    }
    for(let i=0;i<this.permpselect.length;i++){
      if(this.permpselect[i]=="true")
      {
        this.permpselect[i]=true;
      }else{
        this.permpselect[i]=false;
      }
    }
    this.toggle=[...this.permpselect];
    console.log("after:",this.permpselect);
  }

  book(i:any)
  
  {
    if(this.permpselect[i])
    {
      alert("This seat is Booked Please select available seat");
      return;
    }
    this.toggle[i] = !this.toggle[i];
    const count = this.toggle.filter(Boolean).length;
    this. p=count;
    this.r = 120;
    this.pr=count*120;
    this.isShown = true;
    console.log(count);
   
  }
block()

{
  localStorage.getItem("")
  this.permpselect=[...this.toggle];
  localStorage.setItem ("noofseats",this.permpselect.toString());
  new Date(new Date("your date").getTime());
  this.dateobj = new Date(new Date().getTime());

}
  
 

}
