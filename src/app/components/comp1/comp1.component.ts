import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username?:string;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.username.subscribe(res=>{
      this.username = res;
    })
  }
onChange(uname:string){
  console.log(uname);
  this._designUtility.username.next(uname);
}
}
