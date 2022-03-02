import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
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
