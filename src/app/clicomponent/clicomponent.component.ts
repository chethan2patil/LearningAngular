import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicomponent',
  templateUrl: './clicomponent.component.html',
  styleUrls: ['./clicomponent.component.css']
})
export class ClicomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ServerId= '420';
  serverStatus= 'Online'
}
