import { Directive, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Hotkey, ExtendedKeyboardEvent } from './hotkey.model';
import 'mousetrap';
import { NgxHotkeysService } from './ngx-hotkeys.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[ngxhotkeys]',
    providers: [NgxHotkeysService]
})
export class NgxHotkeysDirective implements OnInit, OnDestroy {
    @Input() hotkeys: { [combo: string]: (event: KeyboardEvent, combo: string) => ExtendedKeyboardEvent }[];

    private mousetrap: MousetrapInstance;
    private hotkeysList: Hotkey[] = [];
    private oldHotkeys: Hotkey[] = [];

    constructor(private _hotkeysService: NgxHotkeysService, private _elementRef: ElementRef) {
        // Bind hotkeys to the current element (and any children)
        this.mousetrap = new Mousetrap(this._elementRef.nativeElement);
    }

    ngOnInit() {
        for (const hotkey of this.hotkeys) {
            const combo = Object.keys(hotkey)[0];
            const hotkeyObj: Hotkey = new Hotkey(combo, hotkey[combo]);
            const oldHotkey: Hotkey = <Hotkey>this._hotkeysService.get(combo);
            if (oldHotkey !== null) { // We let the user overwrite callbacks temporarily if you specify it in HTML
                this.oldHotkeys.push(oldHotkey);
                this._hotkeysService.remove(oldHotkey);
            }
            this.hotkeysList.push(hotkeyObj);
            this.mousetrap.bind(hotkeyObj.combo, hotkeyObj.callback);
        }
    }

    ngOnDestroy() {
        for (const hotkey of this.hotkeysList) {
            this.mousetrap.unbind(hotkey.combo);
        }
        this._hotkeysService.add(this.oldHotkeys);
    }

}
