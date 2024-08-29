import { Component } from "@angular/core";




@Component(
{
  selector:'app-counter',
  template:`
<h3>Counter: {{counter}}</h3>
<button (click)="increaseby(1)">+1</button>
<button (click)="increaseby(0)">Reset</button>
<button (click)="increaseby(-1)">-1</button>
  `
}

)

export class CounterComponent{
  public counter: number=10;

  public increaseby( value : number):void {

   if(value===0){
     this.counter =10;
   }
     this.counter += value;
   }


}



