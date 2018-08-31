import { TourComponent } from './../tour/tour.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Tour } from '../tour';

@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.css']
})
export class BookTourComponent implements OnInit, AfterViewInit {

  status: any;
  tour: string;
  info = 'badge';
  list: Tour[];
  startDate = new Date();
  birthDate = new Date(1998, 8, 30);

  @ViewChild(TourComponent) child: TourComponent;

  constructor()  {


  }

  ngOnInit() {


  }

  update(val) {

     this.status = val;
  }

  ngAfterViewInit(): void {
     this.child.getTours().subscribe(data => this.list = data);
  }
}
