import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './shared/model/goal';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  allGoals: Goal[] = [
    { "id": 1, "title": "Travel", "goalTitle": "Mountain Trip", "totalAmount": "$10,000", "amountSaved": "$340", "image": "assets/svg-icons/mountain.svg" },
    { "id": 2, "title": "Property", "goalTitle": "New House", "totalAmount": "$100,000", "amountSaved": "$56,550", "image": "assets/svg-icons/property.jpg" }];
  constructor(private http: HttpClient) {
  }

  getAllGoals() {
    var storageGoals = this.loadFromLocalStorage();
    if (storageGoals) {
      this.allGoals = storageGoals;
      return this.allGoals;
    }
    return this.allGoals;
  }
  saveInLocalStorage() {
    localStorage.setItem("savedGoals", JSON.stringify(this.allGoals));
  }
  loadFromLocalStorage() {
    var _refGoals: any = localStorage.getItem("savedGoals");
    return JSON.parse(_refGoals);
  }

  addGoal(goal: Goal) {
    goal.id = this.allGoals.length + 1;
    this.allGoals.push(goal);
    this.saveInLocalStorage();
  }
  editGoal(goal: Goal) {
    // based on id update all goals
    this.saveInLocalStorage();
  }

  getAllGoalTypes() {
    return {
      commonGoals: [
        { title: "Property", goalTitle: "New House", image: "assets/svg-icons/property.jpg" },
        { title: "Wedding", goalTitle: "Wedding Day", image: "assets/svg-icons/wedding.svg" },
        { title: "Transport", goalTitle: "New Bike", image: "assets/svg-icons/bike.jpg" },
      ],
      otherGoals: [
        { title: "Travel", goalTitle: "Hiking Trip", image: "assets/svg-icons/hiking.jpg" },
        { title: "Transport", goalTitle: "New Car", image: "assets/svg-icons/car.svg" },
      ]
    };
  }
}
