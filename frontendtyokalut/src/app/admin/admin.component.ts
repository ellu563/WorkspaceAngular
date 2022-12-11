import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: Array<any>;
  editing: boolean;

  constructor(private qData: QuestionsService) {
    this.editing = false;
    this.dataSource = this.qData.getQuestions();
  }

  ngOnInit(): void {
  }

}
