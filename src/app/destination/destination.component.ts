import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
                       private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
       const val = data['code'];
       console.log(val);
    });
  }

}
