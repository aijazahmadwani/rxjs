import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {fromEvent} from 'rxjs';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  
  constructor(private _designUtility:DesignUtilityService) { }
  @ViewChild('addBtn') addBtn!:ElementRef;
  containerId?:string;
  ngOnInit(): void {
  
  }
ngAfterViewInit(){
  let count = 1  ;

  fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>
    
    {
      let countVal = 'video '+ count++;
      console.log(countVal);
      this._designUtility.print(countVal,"elContainer");
      this._designUtility.print(countVal,"elContainer2");
  });
    
}

}
