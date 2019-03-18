import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultImageDirective } from './directives/default-image.directive';
import { LoaderComponent } from './commons/loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, DefaultImageDirective],
  exports: [LoaderComponent, DefaultImageDirective]
})
export class SharedModule {}
