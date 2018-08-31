import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { CompAdderService } from './../comp-adder.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
  })
export class ConfirmBookingComponent implements OnInit {

  @ViewChild('detail', { read: ViewContainerRef})
          viewRef: ViewContainerRef;


  @Input() seats: number;
   @Input() tourRequested: string;
            @Output() confirmMsg:
                  EventEmitter<string> = new EventEmitter();
  constructor(private adder: CompAdderService) { }

  ngOnInit() {
  }

    send() {

      this.confirmMsg.emit(this.tourRequested + '  is confirmed -details sent to registred mail');
      this.adder.setViewRef(this.viewRef);

    }
}
