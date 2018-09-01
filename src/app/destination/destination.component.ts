import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  divine = 'assets/images/divine.jpg';
  heritage  = 'assets/images/heritage.jpg';
  adventure = 'assets/images/adventure.jpg';
  msg: string;

  constructor(private route: ActivatedRoute,
                       private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
       const val = data['code'];
       this.msg = 'Details of ' + val  + 'will be shown'
       console.log(val);
    });
  }

}
