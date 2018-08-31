import { TourAPIService } from './../tour-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Branch } from '../branch';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrls: ['./show-branches.component.css']
})
export class ShowBranchesComponent implements OnInit {

  branch: Branch = {
   id: 0,
   location: '',
   incharge: '',
   mobileNumber: 0
  };

  branchList: Branch[];
  srchCondition = '';
  p = 1;
  showForm = false;

  @ViewChild('f') form: any;
  constructor(private service: TourAPIService) { }

  ngOnInit() {


    this.service.findAllBranches().
              subscribe(data => this.branchList = data);
  }

  change() {
    this.showForm = true;
  }
  edit(branch) {

    console.log(this.form);
    this.branch = branch;

    this.showForm = true;

  }
  delete(branch) {

   this.service.removeBranch(branch).subscribe(data => {
     const pos = this.branchList.indexOf(branch);
     this.branchList.splice(pos, 1);

   });
  }
   submit() {

      console.log(this.branch);

     // this.service.updateBranch(branch).subscribe();

      this.service.addBranch(this.branch).subscribe(data => {

        this.branchList.push(data);

        this.form.reset();

      });


   }
}
