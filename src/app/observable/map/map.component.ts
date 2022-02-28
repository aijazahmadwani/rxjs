import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub1?:Subscription;
  constructor() { }

  ngOnInit(): void {

    //example -01

    const broadcastVideo = interval(1000);
    this.sub1 = broadcastVideo.pipe(
      map(data=>
        'Video '+data
      )
    ).subscribe(res=>{
      console.log(res);

    })
    setTimeout(()=>{
      this.sub1?.unsubscribe();
    },10000);
  }


}
