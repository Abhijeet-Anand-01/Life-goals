import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  searchGoal = "";
  goalTypes: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.goalTypes = this.appService.getAllGoalTypes();
  }

}
