import { Directive, Input, HostListener, ElementRef, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

/**
 * This directive transforms the path of an image with another if it is not found.
 * <br>
 * <strong>Usage :</strong>
 * `<img src="this.image.is.not" alt="description" [default]="YOUR/NEW/IMAGE" >`
 *
 * @attribute default (String) Path of another image.
 * @returns Returns an another image defined in attribute "default", if image is not found.
 * <br><br>
 * @author sophielongo <img src="https://avatars.githubusercontent.com/sophielongo?size=30" alt="sophielongo">
 * @version 0.0.1
 */

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'img[default]'
})
export class DefaultImageDirective {

    _default: string = '/assets/images/no-image-available.png';

    element: HTMLElement;
    stopError: boolean;

    @Input()
    get default(): string {
        return this._default;
    }

    set default(value: string) {
        if (value && value !== '') {
            this._default = value;
        }
    }

    @HostListener('error')
    onError() {
        this.updateUrl();
    }

    constructor(private elementRef: ElementRef) {
        this.element = this.elementRef.nativeElement;
    }

    private updateUrl() {
        // If the replacement image is not found , a loop is not generated
        if (this.stopError) {
            return;
        }

        this.stopError = true;
        this.element.setAttribute('src', this.default);
    }
}
