import { Component, OnInit } from '@angular/core';
import { QuestionService } from '@app/formbuiler/services/question.service';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit {
  questionOptions: any[];

  ngOnInit() {
  }

  constructor(protected service: QuestionService) {
    this.questionOptions = this.service.createFormQuestion();
  }
}
