import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  model = {
    email: ""
  };

  constructor(
    private global: GlobalService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.global.login(this.model).subscribe(
        () => {
          this.model.email = '';
          form.resetForm();
          this.toastr.success('Email sent successfully!');
          this.router.navigate(['/']);
        },
        (err) => {
          console.error(err);  // Log the error for debugging
          this.toastr.error('Wrong email or password');
        }
      );
    }
  }
}
