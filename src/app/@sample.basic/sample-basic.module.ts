import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleBasicRoutingModule } from './sample-basic-routing.module';
import { SampleBasicComponent } from './sample-basic.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [SampleBasicComponent, HeaderComponent],
  imports: [CommonModule, TranslateModule, NgbModule, SampleBasicRoutingModule]
})
export class SampleBasicModule {}
