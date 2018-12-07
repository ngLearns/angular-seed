import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', loadChildren: '../@sample.basic/home/home.module#HomeModule' },
      { path: 'about', loadChildren: '../@sample.basic/about/about.module#AboutModule' },
      { path: 'joke', loadChildren: '../@sample.basic/jokes/jokes.module#JokesModule' },
      { path: 'formbuiler', loadChildren: '../@sample.basic/formbuiler/formbuiler.module#FormbuilerModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
