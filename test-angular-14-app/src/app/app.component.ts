import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormRecord, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(null, Validators.required),
    lastName: new UntypedFormControl(null, Validators.required),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(null, Validators.required),
      city: new UntypedFormControl(null, Validators.required)
    }),
    contactNumber: new UntypedFormControl(null, Validators.required),
  });

  folders = new FormRecord({
    home: new FormControl('', { nonNullable: true }),
    music: new FormControl('', { nonNullable: true })
  });
  dataOutput: string = '';
  skillsForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  }
  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(x => {
      console.log({contactForm: x});
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
  }
}
