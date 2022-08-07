import { Component, OnInit } from '@angular/core';
import { FormRecord, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.scss']
})
export class FormRecordComponent implements OnInit {
  folders = new FormRecord({
    home: new FormControl('', { nonNullable: true }),
    music: new FormControl('', { nonNullable: true }),
  });
  constructor() { }

  ngOnInit() {
  }

}
