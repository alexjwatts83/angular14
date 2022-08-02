import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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
    email: new FormControl<string>('', { nonNullable: true }),
    contactNumber: new FormControl<number>(0, { nonNullable: false }),
    query: new FormControl<string>('I would like to connect!', {
      nonNullable: false,
    }),
  });
  profileForm = new FormGroup({
    firstName: new UntypedFormControl(null, Validators.required),
    lastName: new UntypedFormControl(null, Validators.required),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(null, Validators.required),
      city: new UntypedFormControl(null, Validators.required)
    }),
    contactNumber: new UntypedFormControl(null, Validators.required),
  });
  dataOutput: string = '';
  constructor() {}
  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(x => {
      console.log({contactForm: this.contactForm});
    })
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
  
  onSubmitProfileForm() {
    console.log({ submit: true, frm: this.profileForm.value });
  }
}
