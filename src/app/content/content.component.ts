import { Destination } from './../destination';
import { Component, OnInit } from '@angular/core';
import { TourAPIService } from '../tour-api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  list: Destination[];
  items = [];

  service: string;
  constructor(private api: TourAPIService) {

   }
  ngOnInit() {

    this.api.findTrendingDestinations('trending').
             subscribe(resp => this.list = resp);

  }
addItem(val:any) {

  console.log(val);
  this.items.push(this.service);
  this.service = '';
}
}
