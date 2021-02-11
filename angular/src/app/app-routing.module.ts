import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchAndListComponent} from './components/search-and-list/search-and-list.component';
import {NgWelcomeComponent} from './components/ng-welcome/ng-welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full',},
  {path: 'welcome', component: NgWelcomeComponent},
  {path: 'dynasearch', component: SearchAndListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
