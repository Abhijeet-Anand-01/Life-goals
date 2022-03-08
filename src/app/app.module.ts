import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoalsCardComponent } from './home/goals-card/goals-card.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalComponent } from './goal/goal.component';
import { CommonGoalsComponent } from './goal/common-goals/common-goals.component';
import { OtherGoalsComponent } from './goal/other-goals/other-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoalsCardComponent,
    GoalDetailsComponent,
    GoalComponent,
    CommonGoalsComponent,
    OtherGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
