import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '@app/formbuiler/models/control-base';
import { FormBuilerService } from '@app/formbuiler/services/form-builer.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FormBuilerService]
})

export class DynamicFormComponent implements OnInit {
  @Input()
  options: ControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormBuilerService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.options);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
