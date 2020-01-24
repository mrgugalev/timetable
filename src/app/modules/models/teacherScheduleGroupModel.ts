import { StudentGroupModel, ScheduleModel } from './studentTimeTableGroupModel';

export class TeacherScheduleGroupModel {
    public employee?: Employee;
    public studentGroup?: StudentGroupModel;
    public schedules?: ScheduleModel;
    public examSchedules?: ScheduleModel;
    public todayDate?: string;
    public todaySchedules?: string;
    public tomorrowDate?: string;
    public tomorrowSchedules?: string;
    public currentWeekNumber?: number;
}

export class Employee {
    public firstName?: string;
    public lastName?: string;
    public middleName?: string;
    public rank?: null;
    public photoLink?: string;
    public calendarId?: string;
    public academicDepartment?: Array<[string]>;
    public id?: number;
    public fio?: string;
}