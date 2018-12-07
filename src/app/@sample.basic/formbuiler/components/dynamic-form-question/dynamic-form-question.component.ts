import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '@app/@sample.basic/formbuiler/models/control-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input()
  question: ControlBase<any>;
  @Input()
  form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
