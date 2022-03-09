import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Goal } from '../shared/model/goal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  goals: Goal[] | undefined;
  goalTypes: any;
  constructor(private appService: AppService) {
    const goals = this.appService.getAllGoalTypes();
    this.goalTypes = [...goals.commonGoals, ...goals.otherGoals];
  }

  ngOnInit(): void {
    this.goals = this.appService.getAllGoals();
  }
  getGoalImg(goal: Goal) {
    return this.goalTypes.filter((i: any) => i.id == goal.goalTypeId)[0].image;
  }
}
