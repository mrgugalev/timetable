import { Injectable } from '@angular/core';
import { StudentTimeTableGroupModel, StudentGroupModel } from 'src/app/modules/models/studentTimeTableGroupModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherScheduleGroupModel, Employee } from '../modules/models/teacherScheduleGroupModel';
import { FacultyModel } from '../modules/models/faculty';
import { CaphedraModel } from '../modules/models/cafedra';
import { SpecialityModel } from '../modules/models/speciality';

@Injectable()
export class StudentsGroupService {

    constructor(private http: HttpClient) { }

    getStudentGroupRequest(studentGroup: string): Observable<StudentTimeTableGroupModel> {
        return this.http.get<StudentTimeTableGroupModel>('https://journal.bsuir.by/api/v1/studentGroup/schedule' + studentGroup);
    }

    getTeacherSchedule(employeeId: number | string): Observable<TeacherScheduleGroupModel> {
        return this.http.get<TeacherScheduleGroupModel>('https://journal.bsuir.by/api/v1/portal/employeeSchedule' + employeeId);
    }

    getAllGroupsSchedule(): Observable<StudentGroupModel> {
        return this.http.get<StudentGroupModel>('https://journal.bsuir.by/api/v1/groups');
    }

    getAllEmployeeSchedule(): Observable<Employee> {
        return this.http.get<Employee>('https://journal.bsuir.by/api/v1/employees');
    }

    getAllFaculties(): Observable<FacultyModel> {
        return this.http.get<FacultyModel>('https://journal.bsuir.by/api/v1/faculties');
    }

    getAllCaphedraValues(): Observable<CaphedraModel> {
        return this.http.get<CaphedraModel>('https://journal.bsuir.by/api/v1/department');
    }

    getAllSpecialityList(): Observable<SpecialityModel> {
        return this.http.get<SpecialityModel>('https://journal.bsuir.by/api/v1/specialities');
    }
 }