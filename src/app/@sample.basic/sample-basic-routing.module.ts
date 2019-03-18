import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleBasicComponent } from './sample-basic.component';

const routes: Routes = [
  {
    path: '',
    component: SampleBasicComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule', data: { name: 'Home', icon: 'fa-home' } },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: { name: 'About', icon: ' fa-question-circle' }
      },
      { path: 'joke', loadChildren: './jokes/jokes.module#JokesModule', data: { name: 'Joker', icon: 'fa-home' } },
      {
        path: 'formbuiler',
        loadChildren: './formbuiler/formbuiler.module#FormbuilerModule',
        data: { name: 'Form builer', icon: 'fa-home' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleBasicRoutingModule {}
