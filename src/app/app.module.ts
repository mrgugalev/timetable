import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInputComponent } from './modules/components/main-input/main-input.component';
import { TeacherScheduleComponent } from './modules/components/teacher-schedule/teacher-schedule.component';
import { TableComponent } from './modules/components/table/table.component';
import { TextAreaComponent } from './modules/components/text-area/text-area.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainTextComponent } from './modules/components/main-text/main-text.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'main-input', component: MainInputComponent },
  { path: 'teacherSchedule', component: TeacherScheduleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainInputComponent,
    TableComponent,
    TextAreaComponent,
    MainTextComponent,
    TeacherScheduleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
