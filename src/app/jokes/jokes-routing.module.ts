import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './containers/jokes/jokes.component';

const routes: Routes = [
  { path: '', component: JokesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
