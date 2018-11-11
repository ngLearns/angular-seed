import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core';
import { OnlineGuard } from '@ngx-pwa/offline';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    loadChildren: './shell/shell.module#ShellModule',
    canLoad: [OnlineGuard],
    canActivate: [AuthenticationGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule', canLoad: [OnlineGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
