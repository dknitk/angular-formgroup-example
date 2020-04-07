import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'formgroup-example',
  templateUrl: './form.group.example.component.html'
})

export class FormGroupExampleComponent implements OnInit {

  welcomeComponentName = "FormGroup Example";
  myform: FormGroup;

  langs: string[] = [
    'Hindi',
    'English',
    'German',
    'French'
  ];

  ngOnInit() {

    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")

      ]),
      password: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(8)
      ]
      ),
      language: new FormControl()
    });

  }
}