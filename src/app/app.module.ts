import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchAndListComponent } from './components/search-and-list/search-and-list.component';
import { NgWelcomeComponent } from './components/ng-welcome/ng-welcome.component';
import {FormsModule} from '@angular/forms';
import { FilterResultsPipe } from './pipes/filter-results.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndListComponent,
    NgWelcomeComponent,
    FilterResultsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
