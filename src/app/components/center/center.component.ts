import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  host: { class: "flex-grow" }
})
export class CenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
