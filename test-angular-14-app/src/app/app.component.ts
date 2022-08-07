import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-angular-14-app';






  skillsForm: FormGroup;

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }
  ngOnInit(): void {

  }

  onSubmitProfileForm() {}

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }
}
