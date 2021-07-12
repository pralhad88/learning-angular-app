import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allServerDisable = false;
  serverCreationStatus = "";
  serverName = 'Testserver';
  serverWasCreated = false;
  servers = ["Server", "TestServer 2"]
  constructor() { 
    setTimeout(() => {
      this.allServerDisable = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onClickButton() {
    this.serverWasCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server is created! the server name is " + this.serverName
  }

  onChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }
}
