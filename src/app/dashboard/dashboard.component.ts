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
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.goals = this.appService.getAllGoals();
  }
}
