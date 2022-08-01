import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server> </app-server>',
  templateUrl:'servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
allowNewServer=false;
  serverCreatedStatus='No server was created';
  serverName= '';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
      }, 2000)
  }

  ngOnInit(): void {
  }
onCreateServer(){
    this.serverCreatedStatus="server eas created"
}
onUpdateServerName(event:any){
console.log(event)
}
}
