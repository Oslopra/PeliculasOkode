import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html'
})
export class BrowserComponent implements OnInit {
  placeholder = 'Search a movie by name';
  @Output() debounce:EventEmitter<string> = new EventEmitter();
  @Output() enter:EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  input = '';

  ngOnInit() {
      this.debouncer.pipe(
        debounceTime(300)
        ).subscribe(info => {
          this.debounce.emit(info);
        });
  }

  fKey() {
    this.debouncer.next(this.input);
  }

  fEnter() {
    this.enter.emit(this.input);
  }
}
