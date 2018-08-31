import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showButton = true;
  loginForm: FormGroup;

   formConfig = [
     {type: 'text', label: 'userName' ,
      name: 'userName', constraint: Validators.required},
      {type: 'password', label: 'PassWord' ,
      name: 'passWord', constraint: Validators.required},

    ];
  constructor(private service: CompCommunicationService,
            private frmBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

   this.loginForm = this.frmBuilder.group({});

    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(eachControl.name,
              new FormControl('',
                {validators: eachControl.constraint}));
    });
  }

   submit() {

    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.passWord.value;

    this.service.changeMessage('logged');

    if (uname === 'india' && pwd === 'india') {

      sessionStorage.setItem('isUserLogged', 'yes');
      this.router.navigate(['/home']);
    } else {

    }

    this.showButton = false;
   }

}
