import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:FormGroup


  constructor(
    builder:FormBuilder,
    private router:Router) {
    this.form = builder.group({
      id: ['', [Validators.required, Validators.min(6)]],
      password: ['', [Validators.required, Validators.min(4)]]
    })
  }


  signIn() {

  }

  signUp() {

  }

  getFieldCssClass(fieldName: string): string {
    const control = this.form.get(fieldName);
    return control && control.touched && control.invalid ? 'is-invalid' : '';
  }

}
