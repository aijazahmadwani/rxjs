import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  username?:string = '';
  constructor(private _designUtility:DesignUtilityService) { 


  }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
    this._designUtility.username.subscribe(res=>{
      this.username = res;
    })
  }
ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
}
}
