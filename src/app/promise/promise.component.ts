import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  promiseVal?: any;

  dellAvailable() {
      return true;
  }
  HPAvailable() {
      return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve("Laptop is bought");
      // reject("Laptop is not bought");
      if (this.dellAvailable()) {
        setTimeout(() => {
          resolve('Dell is purchased');
        }, 3000);
       
      } else if(this.HPAvailable()){
        setTimeout(() => {
          resolve("HP is purchased");
        },3000);
       
      }
      else{
        reject("Laptop is not purchased");
      }
    });

    buyLaptop
      .then((res) => {
        console.log('success ' + res);
        this.promiseVal = res;
      })
      .catch((err) => {
        console.log(err);
        this.promiseVal = err;
      });
  }
}
