import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-pushed',
  templateUrl: './on-pushed.component.html',
  styleUrls: ['./on-pushed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
