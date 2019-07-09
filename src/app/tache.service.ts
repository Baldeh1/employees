import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  getData() {
    // let response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    // let final = await response.json();
    // for (const employee of final) {
    //    return employee;
    // }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees');
    xhr.onload = function () {
      if (this.readyState == 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        return response;
      }
    }
    xhr.send();
  }
}
