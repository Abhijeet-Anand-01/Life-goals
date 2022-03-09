import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  num: number = 10000;
  constructor() { }

  ngOnInit(): void {
  }

  changeToDollar(ev: any){
    this.num = Number(ev.target.value.replace(/[^0-9.-]+/g,''));
    console.log(this.num)
  }

}
