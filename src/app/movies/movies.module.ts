import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { BrowserComponent } from './components/browser/browser.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    BrowserComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SearchComponent
  ]
})
export class MoviesModule { }
