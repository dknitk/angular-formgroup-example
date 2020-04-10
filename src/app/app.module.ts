import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormGroupExampleComponent } from './form.group.example.component';
import { ReactiveModelFormComponent } from './form.reactive.module.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent,
    FormGroupExampleComponent, ReactiveModelFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
