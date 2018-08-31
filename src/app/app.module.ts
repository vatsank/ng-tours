import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BookTourComponent } from './book-tour/book-tour.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { TourComponent } from './tour/tour.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowBranchesComponent } from './show-branches/show-branches.component';
import { FilterPipe } from './filter.pipe';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    BookTourComponent,
    ConfirmBookingComponent,
    TourComponent,
    LoginComponent,
    LogoutComponent,
    ShowBranchesComponent,
    FilterPipe,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule , FormsModule,
           NgbModule , NgxPaginationModule ],
  providers: [HttpClient],
  entryComponents: [ConfirmationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
