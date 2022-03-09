import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
commonGoals = [
  { title: "Property", goalTitle: "New House", img: "./path" },
  { title: "Wedding", goalTitle: "Wedding Day", img: "./path" },
];
otherGoals = [
  { title: "Travel", goalTitle: "Hiking Trip", img: "./path" },
  { title: "Transport", goalTitle: "New Car", img: "./path" },
];
  constructor() { }

  ngOnInit(): void {
  }

}
