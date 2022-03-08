import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './shared/model/goal';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  allGoals: Goal[] = [
    { "id": 1, "title": "Travel", "goalTitle": "Mountain Trip", "totalAmount": 10000, "amountSaved": 340, "image": "assets/svg-icons/house.svg" },
    { "id": 2, "title": "property", "goalTitle": "New House", "totalAmount": 100000, "amountSaved": 56550, "image": "assets/svg-icons/house.svg" }];
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
    return [{ title: "Property", img: "./path" }];
  }
}
