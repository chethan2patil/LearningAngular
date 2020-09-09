import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p{
        padding:20px;
        border: 1px solid red;
        background-color: darksalmon;
    }
    `]
})

export class ServerComponent {
    allowServers = false;
    ServerId = '402';
    serverStatus = 'Offline from method'
    serverMessage = "No Server is available"
    serverName= ''
    showContent = false;

    constructor(){
        setTimeout(() => {
            this.allowServers = true;
        }, 
            2000);
    }
    getStatus(){
        return this.serverStatus;
    }

    onCreateServer(){
        this.showContent = true;
        this.serverMessage = "Server create by click " + this.serverName
    }

onInputServerName(e){
    console.log(e.target.value);
    this.serverName = e.target.value;
}

}