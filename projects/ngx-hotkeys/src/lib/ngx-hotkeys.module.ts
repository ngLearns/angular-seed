import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxCheatsheetComponent } from './ngx-cheatsheet/ngx-cheatsheet.component';
import { NgxHotkeysDirective } from './ngx-hotkeys.directive';
import { NgxHotkeysService } from './ngx-hotkeys.service';
import { IHotkeyOptions, HotkeyOptions } from './hotkey.options';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHotkeysDirective, NgxCheatsheetComponent],
  exports: [NgxHotkeysDirective, NgxCheatsheetComponent],
  providers: [NgxHotkeysService]
})
export class NgxHotkeysModule {
  static forRoot(options?: IHotkeyOptions): ModuleWithProviders {
    return {
      ngModule: NgxHotkeysModule,
      providers: [
        NgxHotkeysService,
        { provide: HotkeyOptions, useValue: options }
      ]
    };
  }
}
