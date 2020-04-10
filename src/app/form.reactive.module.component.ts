import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'reactive-model-form',
  template:`
    <h2>{{welcomeComponentName}}</h2>
    <label> Enter the Search Item </label> <br>
    <input type="search"
      class="form-control"
      placeholder="Please enter the search term"
      [formControl]="searchField">
    <hr/>
    <ul>
      <li *ngFor="let search of searches">{{search}}></li>
    </ul>  `  
})
// Export a class for external usage.
export class ReactiveModelFormComponent implements OnInit{

  welcomeComponentName = "Reactive Module Form Example";
  // Decalre Form Control
  searchField: FormControl;
  // Decalre Array of String
  searches: string[] = [];

// Override ngOnInit method
  ngOnInit(){
    // Instantiate FormControl object
    this.searchField = new FormControl();
    // Set the Reactive Form Module related things like subscribe
    this.searchField.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe(term => {
          this.searches.push(term);
        });
  }
}