import { Component, OnInit } from '@angular/core';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employees: object[] = [{
    id: 5,
    name: 'John Doe',
    employee_pass: 500,
    status: 'senior',
    imgUrls: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=a-l-interieur-a-la-mode-beau-2379005.jpg&fm=jpg'
  }, {
    id: 25,
    name: 'Kojima Hideo',
    employee_pass: 690,
    status: 'junior',
    imgUrls: 'http://blog.otaku-streamers.com/wp-content/uploads/2017/04/39648a46d11d6b5047a2e242_1491847264.jpg'
  }, {
    id: 89,
    name: "Elijah Doe",
    employee_pass: 1254,

    status: 'junior',
    imgUrls: 'https://images.pexels.com/photos/2379886/pexels-photo-2379886.jpeg?cs=srgb&dl=a-l-interieur-adulte-africain-2379886.jpg&fm=jpg'
  }, {
    id: 254,
    name: "Fatima Echkenova",
    employee_pass: 1580,
    status: 'senior',
    imgUrls: 'https://images.pexels.com/photos/355018/pexels-photo-355018.jpeg?cs=srgb&dl=attirant-beau-boucle-d-oreille-355018.jpg&fm=jpg'
  }, {
    id: 65,
    name: "Niels Van DerMosten",
    employee_pass: 224,
    status: 'medior',
    imgUrls: 'https://images.pexels.com/photos/2095544/pexels-photo-2095544.jpeg?cs=srgb&dl=adult-attractive-beautiful-2095544.jpg&fm=jpg'
  }, {
    id: 80,
    name: "Cathy Mabueli",
    employee_pass: 389,
    status: 'medior',
    imgUrls: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?cs=srgb&dl=boucle-cheveux-boucles-coiffure-718978.jpg&fm=jpg'
  }, {
    id: 35,
    name: "Pratick Brasseur",
    employee_pass: 3559,
    status: 'junior',
    imgUrls: 'https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?cs=srgb&dl=adult-bald-beard-2380795.jpg&fm=jpg'
  }, {
    id: 8,
    name: "Serge Olenge",
    employee_pass: 100,
    status: 'senior',
    imgUrls: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?cs=srgb&dl=blur-casual-close-up-462680.jpg&fm=jpg'
  }];
  constructor(private tacheService: TacheService) {

  }


  displayData(): void {
    return this.tacheService.getData();
  }


  ngOnInit() {
    // this.employees.push(this.displayData);

  }


}
