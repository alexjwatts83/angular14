import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { first, last } from 'rxjs';

export interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  contactNumber?: FormControl<number | null>;
  query?: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-angular-14-app';
  contactForm = new FormGroup<ContactForm>({
    name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true}),
    contactNumber: new FormControl<number>(0, { nonNullable: false}),
    query:new FormControl<string>('I would like to connect!', { nonNullable: false })
  });
  /**
   *
   */
  constructor() {}
  ngOnInit(): void {
    // v14 partial typed form, migrating `UntypedFormGroup` -> `FormGroup`
  }
}
