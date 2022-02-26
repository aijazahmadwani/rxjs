import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    // OF
    const obs1 = of('Aijaz','Zahid','Ahmad');
    obs1.subscribe(res=>{
      //console.log(res);
      this._designUtility.print(res,"elContainer");
    }) 



    //FROM-array
    const obs2 = from(['Aijaz','Zahid','Ahmad']);
    obs2.subscribe(res=>{
     // console.log(res);
      this._designUtility.print(res,"elContainer2");
    }) 
    //FROM- promise
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve("Promise resolved");
      },3000)
    })
    const obs3 = from(promise);
    obs3.subscribe(res=>{
      //console.log(res);
      this._designUtility.print(JSON.stringify(res),"elContainer3");
    }) 
        //FROM- string
        const obs4 = from('hello world');
        obs4.subscribe(res=>{
          console.log(res);
          this._designUtility.print(JSON.stringify(res),"elContainer4");
        })

  }

}
