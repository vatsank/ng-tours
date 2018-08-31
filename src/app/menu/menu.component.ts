import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   @Input() linkList: Link[];

   showLogin = true;
   showLogout = false;
  constructor(private service: CompCommunicationService) { }

  ngOnInit() {

    this.service.currentMessage.subscribe(msg => {

      if (msg === 'logged') {
        this.change();
      }
      if (msg === 'logout') {
         this.change();
      }
    });
  }

    change() {
      this.showLogin = !this.showLogin;
      this.showLogout = !this.showLogout;
    }

}
