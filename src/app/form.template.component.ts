import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from './Signup';

@Component({
  selector: 'template-form',
  templateUrl: './form.template.component.html'
})

export class TemplateFormComponent implements OnInit{

  welcomeComponentName = "Template Form Example";
  model: Signup = new Signup();
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German'
  ];
  onSubmit(){
    console.log("Inside onSubmit Method");
    if(this.form.valid){
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
  ngOnInit(){
    console.log("Inside ngOnInit Method");
  }
}