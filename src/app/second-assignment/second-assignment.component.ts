import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {

  userName = "";
  constructor() { }

  ngOnInit(): void {
  }
 
  emptyUserNameString(){
    console.log(this.userName)
    this.userName= ""
  }
}
