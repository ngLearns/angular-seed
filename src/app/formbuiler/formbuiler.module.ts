import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormbuilerRoutingModule } from './formbuiler-routing.module';
import { FormMainComponent } from './containers/form-main/form-main.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';

import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [FormMainComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    FormbuilerRoutingModule
  ],
  providers: [QuestionService]
})
export class FormbuilerModule { }
