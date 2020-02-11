import { Component, OnInit } from '@angular/core';
import { StudentsGroupService } from 'src/app/services/studentsGroup.service';
import { StudentTimeTableGroupModel, StudentGroupModel, ScheduleModel } from '../../models/studentTimeTableGroupModel';
import { TeacherScheduleGroupModel } from '../../models/teacherScheduleGroupModel';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.css']
})
export class MainInputComponent implements OnInit {

  public todayDate?: string;
  public todaySchedules?: string;
  public tomorrowDate?: string;
  public tomorrowSchedules?: string;
  public employee?: null;
  public studentGroup?: StudentGroupModel;
  public schedules?: ScheduleModel;
  public examSchedules?: ScheduleModel;
  public currentWeekNumber?: number;
  public dateStart?: string;
  public dateEnd?: string;

  constructor(public studentGroupService: StudentsGroupService) { }

  ngOnInit() {}

  public getShedule(group: number) {
    this.studentGroupService.getStudentGroupRequest(group).subscribe((data: StudentTimeTableGroupModel) => {
      this.todayDate = data.todayDate;
      this.todaySchedules = data.todaySchedules;
      this.tomorrowSchedules = data.tomorrowSchedules;
      this.employee = data.employee;
      this.studentGroup = data.studentGroup;
      this.schedules = data.schedules;
      this.examSchedules = data.examSchedules;
      this.currentWeekNumber = data.currentWeekNumber;
      this.dateStart = data.dateStart;
      this.dateEnd = data.dateEnd;
    });
  }

  public getTeacherSchedule(employeeId: number) {
    this.studentGroupService.getTeacherSchedule(employeeId).subscribe((data: TeacherScheduleGroupModel) => {
    });
  }

}
