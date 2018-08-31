import { BookTourComponent } from './book-tour/book-tour.component';
import { ContentComponent } from './content/content.component';
import { ShowBranchesComponent } from './show-branches/show-branches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'branches', component: ShowBranchesComponent},
  {path: 'tours', component: TourComponent},
  {path: 'home', component: ContentComponent },
  {path: 'booking', component: BookTourComponent },

  {path: '**', component: ContentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
