import { NgModule, OnInit,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormGroupExampleComponent } from './form.group.example.component';

import { TemplateFormComponent } from './form.template.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent,    
    TemplateFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
