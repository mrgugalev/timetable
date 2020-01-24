import { Component, OnInit } from '@angular/core';
import { StudentsGroupService } from 'src/app/services/studentsGroup.service';
import { StudentTimeTableGroupModel } from '../../models/studentTimeTableGroupModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public studentGroupService: StudentsGroupService;
  public todayDate?: string;
  public todaySchedules?: string;
  public tomorrowDate?: string;
  public tomorrowSchedules?: string;

  constructor(studentGroupService: StudentsGroupService) { }

  ngOnInit() {}

 getShedule(studentGroup: string) {
    this.studentGroupService.getStudentGroupRequest(studentGroup).subscribe((data: StudentTimeTableGroupModel) => {
      this.todayDate = data.todayDate;
      this.todaySchedules = data.todaySchedules;
      this.tomorrowSchedules = data.tomorrowSchedules;
    });
 }

}
