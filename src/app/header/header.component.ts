import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading = 'Sree Tours and Travels';

  logo = 'assets/images/leftLogo.jpg';

   links: Link[] = [
    {linkRef: '/home', linkText: 'Home'},
    {linkRef: '/tours', linkText: 'Destinations'},
    {linkRef: '/booking', linkText: 'Book tour'},
    {linkRef: '/branches', linkText: 'Branches'},


   ];
  constructor() { }

  ngOnInit() {
  }

}
