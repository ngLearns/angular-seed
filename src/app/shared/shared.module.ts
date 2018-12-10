import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultImageDirective } from './directives/default-image.directive';
import { LoaderComponent } from './commons/loader/loader.component';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbAlert],
  declarations: [LoaderComponent, DefaultImageDirective],
  exports: [LoaderComponent, DefaultImageDirective]
})
export class SharedModule {}
