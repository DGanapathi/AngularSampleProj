import { Component, OnInit } from '@angular/core';
import { MasterdataService } from '../shared/masterdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: any[] = [];
  constructor(private dataservice : MasterdataService) { }
  
  fillUserStaticData()
  {
    this.Users = [
      {
        'ID': 101,
        'FirstName': 'Ganaptahi',
        'LastName': 'Diddi',
        'Address': 'Hyderabad'
      },
      {
        'ID': 102,
        'FirstName': 'Hari',
        'LastName': 'P',
        'Address': 'Warangal'
      },
      {
        'ID': 103,
        'FirstName': 'Rajendra',
        'LastName': 'Keerthi',
        'Address': 'Hyderabad'
      },
      {
        'ID': 104,
        'FirstName': 'Vijay',
        'LastName': 'Dabba',
        'Address': 'Chennai'
      },
      {
        'ID': 105,
        'FirstName': 'Kondi',
        'LastName': 'Gaadu',
        'Address': 'Hyderabad'
      }
    ];
  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    //this.Users = [];
    this.dataservice.getUsers1().subscribe((data: any) => {
      //console.log(data);
      this.Users = data;
    });
  }
}
