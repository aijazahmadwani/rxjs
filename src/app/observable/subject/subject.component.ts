import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
  }
ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
}
}
