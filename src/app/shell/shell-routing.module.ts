import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: '../home/home.module#HomeModule' },
            { path: 'about', loadChildren: '../about/about.module#AboutModule' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ShellRoutingModule { }
