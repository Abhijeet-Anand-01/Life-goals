import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../model/goal';

@Component({
  selector: 'app-goals-card',
  templateUrl: './goals-card.component.html',
  styleUrls: ['./goals-card.component.css']
})
export class GoalsCardComponent implements OnInit {
  @Input()
  goal!: Goal;

  @Input()
  img!: string;

  @Input()
  bgColor!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
