# Router customing
## shell-router:
```
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
```

## sample basic router:
```
const routes: Routes = [
  {
      path: '',
      component: SampleBasicComponent,
      children: [
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        { path: 'about', loadChildren: './about/about.module#AboutModule' },
        { path: 'joke', loadChildren: './jokes/jokes.module#JokesModule' },
        { path: 'formbuiler', loadChildren: './formbuiler/formbuiler.module#FormbuilerModule' }
      ]
  }
];
```