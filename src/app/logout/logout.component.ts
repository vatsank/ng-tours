import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: CompCommunicationService) { }

  ngOnInit() {
  }
  logout() {

    this.service.changeMessage('logout');
  }
}
