import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  contactNumber?: FormControl<number | null>;
  query?: FormControl<string | null>;
}
@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.css']
})
export class TypedFormComponent implements OnInit {
  contactForm = new FormGroup<ContactForm>({
    name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true }),
    contactNumber: new FormControl<number>(0, { nonNullable: false }),
    query: new FormControl<string>('I would like to connect!', {
      nonNullable: false,
    }),
  });

  dataOutput: string = '';

  constructor() { }

  ngOnInit() {
    this.contactForm.valueChanges.subscribe((x) => {
      console.log({ contactForm: x });
    });
  }
  onSubmitContactForm() {
    console.log({ submit: true, frm: this.contactForm.value });
  }

  resetSubmitContactForm() {
    this.contactForm.reset();
    this.dataOutput = '';
  }
  removeQuery() {
    this.contactForm.removeControl('query'); //This code removes the optional control from typed model
  }
}
