import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public selected: string;

  @Input()
  public required = false;

  @Input()
  public disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
