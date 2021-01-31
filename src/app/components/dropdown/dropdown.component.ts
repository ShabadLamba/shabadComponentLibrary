import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        // query(
        //   ':leave',
        //   [stagger(100, [animate('0.5s', style({ opacity: 0 }))])],
        //   { optional: true }
        // ),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  constructor() {}

  isDropDownClicked: boolean;

  @Input() defaultTextForDropDown: string = 'select from options below';
  @Input() optionsInputArray: Array<string> = [
    'option 1',
    'option 2',
    'Option 3',
    'option 4',
  ];

  listOfOptions = [];

  ngOnInit(): void {
    this.isDropDownClicked = false;
    this.optionsInputArray.unshift(this.defaultTextForDropDown);
  }

  toggleDropDownClicked() {
    this.isDropDownClicked = !this.isDropDownClicked;
    console.log(this.isDropDownClicked);
  }

  logAnimation(_event) {
    console.log(_event);
  }

  showItems() {
    this.optionsInputArray.map((i) => {
      this.listOfOptions.push(i);
    });
  }

  hideItems() {
    this.listOfOptions = [];
  }

  toggle() {
    this.toggleDropDownClicked();
    this.listOfOptions.length ? this.hideItems() : this.showItems();
  }
}
