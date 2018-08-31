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

  private tourList: Tour[];
  divine = 'assets/images/divine.jpg';
  heritage  = 'assets/images/heritage.jpg';
  adventure = 'assets/images/adventure.jpg';
  constructor( private service: TourAPIService) {

    // this.tourList = [
    //   {id: 101, tourName: 'Singapore', description: ' parks and beaches of singapore',
    //      image: 'assets/images/singapore.jpg',
    //       price: 45000 , type: 'international'}
    // ];
  }

  ngOnInit() {
  }

    getTours(): Observable<Tour[]> {

      return this.service.findAllTours();
    }
}
