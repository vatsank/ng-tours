import { TourAPIService } from './../tour-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  divine = 'assets/images/divine.jpg';
  heritage  = 'assets/images/heritage.jpg';
  adventure = 'assets/images/adventure.jpg';
  list: Destination[];

  constructor(private route: ActivatedRoute,
                       private router: Router, private service: TourAPIService) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
       const val = data['code'];
       const srch = tourCode[val];

       this.service.findAllDestinations(srch).subscribe(resp => {
            this.list = resp;
       }) ;
         });
  }

}

export enum tourCode{

  Divine = 101,
  Adventure = 102,
  Heritage = 103
}
