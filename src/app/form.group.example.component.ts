import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'formgroup-example',
  templateUrl: './form.group.example.component.html'
})

export class FormGroupExampleComponent implements OnInit {

  welcomeComponentName = "FormGroup Example";
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'Hindi',
    'English',
    'German',
    'French'
  ];

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){

    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);

  }
  createForm(){
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
}