import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-material-reference',
  templateUrl: './demo-material-reference.component.html',
  styleUrls: ['./demo-material-reference.component.scss'],
})
export class DemoMaterialReferenceComponent implements OnInit {
  @Input() linkName: string;
  @Input() linkUrl: string;
  @Input() toolbarColor = 'accent';

  constructor() {}

  ngOnInit() {}
}
