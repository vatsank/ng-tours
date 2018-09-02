import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: CompCommunicationService, private router: Router) { }

  ngOnInit() {

    sessionStorage.removeItem('isUserLogged');
    this.service.changeMessage('logout');
    this.router.navigate(['/login']);

  }

}
