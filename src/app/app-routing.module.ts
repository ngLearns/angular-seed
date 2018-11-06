import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', loadChildren: './shell/shell.module#ShellModule', canActivate: [AuthenticationGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
