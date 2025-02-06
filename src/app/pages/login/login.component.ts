import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      loginModel={
        email : "",
        password: ""
      };

      constructor(
        private global: GlobalService,
           private router: Router,
           private toastr: ToastrService
) {}

submitForm(form: NgForm) {
  if (form.valid) {
    this.global.login(this.loginModel).subscribe(
      () => {
        this.loginModel.email = '';
        form.resetForm();
      this.toastr.success('Email sent successfully!');
      this.router.navigate(['/']); },
      (err) => {
      console.error(err);  // Log the error for debugging
      this.toastr.error('Wrong email or password');
        } );    }  }


}
