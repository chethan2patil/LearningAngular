import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  Content = "secret password = cp";
  toggle = true;
  count = [];
  constructor() { }

  ngOnInit(): void {
  }
  toggleFunc(){
   // this.count.push(this.count.length +1);
   this.count.push(new Date());
    this.toggle = !this.toggle;
  }

}
