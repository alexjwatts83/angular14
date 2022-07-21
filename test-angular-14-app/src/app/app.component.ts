import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-angular-14-app';

  /**
   *
   */
  constructor() {}
  ngOnInit(): void {
    // v14 partial typed form, migrating `UntypedFormGroup` -> `FormGroup`
    const cat = new FormGroup({
      lives: new UntypedFormControl(9),
    });
  }
}
