import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
