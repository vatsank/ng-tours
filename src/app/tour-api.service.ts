import { Destination } from './destination';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour';
import { Branch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class TourAPIService {

  baseURL = 'http://localhost:3000/';

  branchURL = this.baseURL + 'branches';

  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private service: HttpClient) { }


  findTrendingDestinations(srchString): Observable<Destination[]> {
    return this.service.get<Destination[]>(this.baseURL + 'destinations?category=' + srchString);
  }

  findAllDestinations(srchString): Observable<Destination[]> {
    return this.service.get<Destination[]>(this.baseURL + 'destinations?type=' + srchString);
  }

  findAllTours(): Observable<Tour[]> {
    return this.service.get<Tour[]>(this.baseURL + 'tours');

  }


  findAllBranches(): Observable<Branch[]> {

    return this.service.get<Branch[]>(this.branchURL);

  }

  addBranch(branch: Branch): Observable<Branch> {


    return this.service.post<Branch>(this.branchURL, branch, {headers: this.headers});
  }

  removeBranch(branch: Branch): Observable<Branch> {

     const deleteURL = this.branchURL + '/' + branch.id;
    return this.service.delete<Branch>(deleteURL, {headers: this.headers});
  }

  updateBranch(branch: Branch): Observable<Branch> {

    const updateURL = this.branchURL + '/' + branch.id;
   return this.service.put<Branch>(updateURL, branch, {headers: this.headers});
 }
}
