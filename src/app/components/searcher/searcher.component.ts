import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  @Output() signal = new EventEmitter<any>();

  constructor (){}

  ngOnInit (){}

  submitForm(form: any){
    this.signal.emit(form.search);
  }
}