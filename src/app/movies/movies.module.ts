import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { BrowserComponent } from './components/browser/browser.component';



@NgModule({
  declarations: [
    SearchComponent,
    BrowserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ]
})
export class MoviesModule { }
