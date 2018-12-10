import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'sample-basic/home', pathMatch: 'prefix' },
      { path: 'sample-basic', loadChildren: '../@sample.basic/sample-basic.module#SampleBasicModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
