import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  projectName: string = "Home work - lesson 1";

  myName: string = "Dmitriy Tkachenko";

  constructor() { }

  ngOnInit() {
  }

}
