import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Goal } from '../shared/model/goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  goalType: any;
  currentGoal = {} as Goal;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {
    this.route.params.subscribe((res: any) => {
      const goals = this.appService.getAllGoalTypes();
      this.goalType = [...goals.commonGoals, ...goals.otherGoals].filter(g => g.id == res.id)[0];
    });
    const editId = this.route.snapshot.queryParamMap.get("id");
    if(editId){
      this.fetchAndPopulateData(editId);
    }
  }

  ngOnInit(): void {
  }

  changeToDollar(ev: any) {
    this.currentGoal.totalAmount = ev.target.value.replace(/[^0-9.-]+/g, '');
  }

  saveGoal() {
    if (!this.currentGoal.id) {
      this.currentGoal.amountSaved = "0";
      this.currentGoal.goalTypeId = this.goalType.id;
    }
    this.appService.addGoal(this.currentGoal);
    this.router.navigate(["/dashboard"]);
  }

  fetchAndPopulateData(id: string | number){
    this.currentGoal = this.appService.getAllGoals().filter(i => i.id == id)[0];
  }

}
