import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular-14-app';

  /**
   *
   */
  constructor() {
  }
  ngOnInit(): void {
    const cat = new FormGroup({
      lives: new FormControl(9)
   });
  }
}
