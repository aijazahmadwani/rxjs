import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(val:string,containerId:string){
    let el = document.createElement('li');
    el.innerText = val;
    let e =  <HTMLVideoElement>document.getElementById(containerId);
    e.appendChild(el);
  }
}
