import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-creation',
  templateUrl: './username-creation.component.html',
  styleUrls: ['./username-creation.component.css']
})
export class UsernameCreationComponent implements OnInit {
  userName = "";

  constructor() {}

  ngOnInit(): void {

  }

  deleteUserName() {
    this.userName = ""
  }

}
