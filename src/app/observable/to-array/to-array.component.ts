import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users= [{name:'aijaz',skill:'full stack'},
  {name:'sam',skill:'front end stack'},
  {name:'haider',skill:'backend stack'},];
  constructor() { }
  sourceSub?:Subscription;

  ngOnInit(): void {
//example 1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
      
      ).subscribe(res=>{
     // console.log(res);
      // if(res>=8){
      //   this.sourceSub?.unsubscribe();
      // }
    })

//example 2
const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res);
    })

  }

}
