import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewSuggestionComponent } from './addNewSuggestion/add-new-suggestion.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: 'add-new-suggestion', component: AddNewSuggestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

