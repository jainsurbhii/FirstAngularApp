import {Component} from '@angular/core';
@Component( {
  selector:'app-server',
  templateUrl:'./Server.component.html',
})
export class ServerComponent {
  status = 'online';

  getServerStatus() {
    return this.status;
  }
}


