import { TourAPIService } from './../tour-api.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  divine = 'assets/images/divine.jpg';
  heritage  = 'assets/images/heritage.jpg';
  adventure = 'assets/images/adventure.jpg';

  private tourList: Tour[];
  constructor( private service: TourAPIService) {


  }

  ngOnInit() {
  }

    getTours(): Observable<Tour[]> {

      return this.service.findAllTours();

    }
}
