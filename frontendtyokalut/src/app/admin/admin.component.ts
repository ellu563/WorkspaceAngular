import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: Array<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  editing: boolean = false;

  constructor(private qData: QuestionsService) {
    this.dataSource = this.qData.getQuestions();
  }

  ngOnInit(): void {
  }

  public action(row: any) {
    this.editing = true;
  }


}
