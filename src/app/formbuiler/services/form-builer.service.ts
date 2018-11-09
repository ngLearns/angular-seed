import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../models/control-base';


@Injectable()
export class FormBuilerService {
    constructor() { }

    toFormGroup(options: ControlBase<any>[]) {
        const group: any = {};

        options.forEach(opt => {
            group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
                : new FormControl(opt.value || '');
        });
        return new FormGroup(group);
    }
}
