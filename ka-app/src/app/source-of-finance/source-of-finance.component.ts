import { Component, OnInit } from '@angular/core';

export interface FinanceSource {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-source-of-finance',
  templateUrl: './source-of-finance.component.html',
  styleUrls: ['./source-of-finance.component.css']
})
export class SourceOfFinanceComponent implements OnInit {
	financeSource: FinanceSource[] = [
	    {value: 'option-01', viewValue: 'option1'},
	    {value: 'option-2', viewValue: 'Option2'}
	];

  constructor() { }

  ngOnInit() {
  }

}
