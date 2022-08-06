import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-untyped-form',
  templateUrl: './untyped-form.component.html',
  styleUrls: ['./untyped-form.component.css']
})
export class UntypedFormComponent implements OnInit {
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(null, Validators.required),
    lastName: new UntypedFormControl(null, Validators.required),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(null, Validators.required),
      city: new UntypedFormControl(null, Validators.required),
    }),
    contactNumber: new UntypedFormControl(null, Validators.required),
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmitProfileForm() {}
}
