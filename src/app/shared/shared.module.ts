import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DefaultImageDirective } from './directives/default-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, DefaultImageDirective],
  exports: [LoaderComponent, DefaultImageDirective],
})
export class SharedModule { }
