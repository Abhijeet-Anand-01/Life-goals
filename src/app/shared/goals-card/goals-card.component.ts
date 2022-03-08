import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Goal } from '../model/goal';

@Component({
  selector: 'app-goals-card',
  templateUrl: './goals-card.component.html',
  styleUrls: ['./goals-card.component.css']
})
export class GoalsCardComponent implements OnInit {
  @Input()
  goal!: Goal;

  constructor() {
   }

  ngOnInit(): void {
  }

}
