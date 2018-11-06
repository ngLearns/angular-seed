import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, ShellRoutingModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
