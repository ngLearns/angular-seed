import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotkey } from '../hotkey.model';
import { NgxHotkeysService } from '../ngx-hotkeys.service';

@Component({
  selector: 'ngx-hotkeys-cheatsheet',
  templateUrl: `./ngx-cheatsheet.component.html`,
  styleUrls: [`./ngx-cheatsheet.component.scss`]
})
export class NgxCheatsheetComponent implements OnInit, OnDestroy {
  helpVisible = false;
  @Input()
  title = 'Keyboard Shortcuts:';
  subscription: Subscription;

  hotkeys: Hotkey[];

  constructor(private hotkeysService: NgxHotkeysService) { }

  public ngOnInit(): void {
    this.subscription = this.hotkeysService.cheatSheetToggle.subscribe(isOpen => {
      if (isOpen !== false) {
        this.hotkeys = this.hotkeysService.hotkeys.filter(hotkey => hotkey.description);
      }

      if (isOpen === false) {
        this.helpVisible = false;
      } else {
        this.toggleCheatSheet();
      }

    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleCheatSheet(): void {
    this.helpVisible = !this.helpVisible;
  }
}
