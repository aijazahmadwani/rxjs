import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMesg?:string;
  videoSubscription?:Subscription;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    this.videoSubscription = broadCastVideos.subscribe(res=>{
      console.log(res);
      this.obsMesg = 'Video '+res;
      this._designUtility.print(this.obsMesg,"elContainer");
      if(res>=5){
        this.videoSubscription?.unsubscribe();
      }
    })
  }

}
