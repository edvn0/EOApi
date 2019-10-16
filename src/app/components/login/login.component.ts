import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  minPw = 8;
  loading = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('example@example.com', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.minLength(5), Validators.maxLength(30), Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = !this.loading;
    console.log(this.form.value);
  }

  /**
   * Send info to Header component with image / initials of user
   */
  sendInfo() {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  checkInput() {
    return this.email && this.password;
  }

}
