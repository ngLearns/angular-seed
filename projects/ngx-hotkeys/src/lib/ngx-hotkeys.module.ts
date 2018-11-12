import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxHotkeysComponent } from './ngx-hotkeys.component';
import { NgxHotkeysDirective } from './ngx-hotkeys.directive';
import { NgxHotkeysService } from './ngx-hotkeys.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHotkeysDirective, NgxHotkeysComponent],
  exports: [NgxHotkeysDirective, NgxHotkeysComponent]
})
export class NgxHotkeysModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxHotkeysModule,
      providers: [NgxHotkeysService]
    };
  }
}
