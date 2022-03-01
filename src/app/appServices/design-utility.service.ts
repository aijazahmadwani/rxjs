import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

exclusive = new Subject<boolean>();

  constructor() { }
  print(val:string,containerId:string){
    let el = document.createElement('li');
    el.innerText = val;
    let e =  <HTMLVideoElement>document.getElementById(containerId);
    e.appendChild(el);
  }
}
