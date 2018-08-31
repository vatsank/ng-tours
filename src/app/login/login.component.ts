import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showButton = true;
  constructor(private service: CompCommunicationService) { }

  ngOnInit() {
  }

   submit() {

    this.service.changeMessage('logged');

    this.showButton = false;
   }

}
