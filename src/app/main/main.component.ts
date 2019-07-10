import { Component, OnInit } from '@angular/core';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employees: object[] = [];
  imgUrls:string[]= [];
  constructor(private tacheService: TacheService) {

  }

  displayData(): void {
   return  this.tacheService.getData();
  }
  ngOnInit() {
    // this.employees.push(this.displayData);
    console.log(this.employees.push({
      id: 5,
      name:'Jhon Doe',
      employee_pass: 500,
      status:'senior'
    },{
      id:25,
      name:'Kojima Hideo',
      employee_pass: 690,
      status:'junior'
    },{
      id: 89,
      name: "Elijah Doe",
      employee_pass: 1254,
      status:'junior'
    },{
      id: 254,
      name: "Fatima Echkenova",
      employee_pass: 1580,
      status:'senior'
    },{
      id: 65,
      name: "Niels Van DerMosten",
      employee_pass: 224,
      status:'mid-level'
    },{
      id: 80,
      name: "Cathy Mabueli",
      employee_pass: 389,
      status:'mid-level'
    },{
      id: 35,
      name: "Pratick Brasseur",
      employee_pass: 3559,
      status:'junior'
    },{
      id: 8,
      name: "Serge Olenge",
      employee_pass: 100,
      status:'senior'
    }));
    console.log(this.employees);
  }


}
