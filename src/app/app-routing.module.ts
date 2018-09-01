import { DestinationComponent } from './destination/destination.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { BookTourComponent } from './book-tour/book-tour.component';
import { ContentComponent } from './content/content.component';
import { ShowBranchesComponent } from './show-branches/show-branches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { UniversalGuard } from './universal.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'branches', component: ShowBranchesComponent, canActivate: [UniversalGuard]},
  {path: 'tours', component: TourComponent, canActivate: [UniversalGuard] , children: [
    {path: 'destination/:code', component: DestinationComponent} ]},
  {path: 'home', component: ContentComponent, canActivate: [UniversalGuard] },
  {path: 'booking', component: BookTourComponent , canActivate: [UniversalGuard] },
  {path: '**', redirectTo: 'home'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
