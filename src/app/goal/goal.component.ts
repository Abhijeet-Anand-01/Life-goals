import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
commonGoals = [
  { title: "Property", goalTitle: "New House", image: "assets/svg-icons/property.jpg" },
  { title: "Wedding", goalTitle: "Wedding Day", image: "assets/svg-icons/wedding.svg" },
  { title: "Travel", goalTitle: "New Bike", image: "assets/svg-icons/bike.jpg" },
];
otherGoals = [
  { title: "Travel", goalTitle: "Hiking Trip", image: "assets/svg-icons/hiking.jpg" },
  { title: "Transport", goalTitle: "New Car", image: "assets/svg-icons/car.svg" },
];
  constructor() { }

  ngOnInit(): void {
  }

}
