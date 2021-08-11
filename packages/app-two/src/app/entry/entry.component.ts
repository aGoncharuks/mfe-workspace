import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent implements OnInit {
	
	value: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
