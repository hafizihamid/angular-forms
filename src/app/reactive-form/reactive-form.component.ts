import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submittedForm = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  get registerFormControl() { return this.registerForm.controls; }


  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submittedForm = true;
  }

  onReset() {
    this.submittedForm = false;
    this.registerForm.reset();
}
}
