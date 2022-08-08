import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
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

  ngOnInit() {}
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
