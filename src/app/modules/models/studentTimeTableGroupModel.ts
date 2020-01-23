export class StudentTimeTableGroupModel {
    public employee?: null;
    public studentGroup?: StudentGroupModel;
    public schedules?: ScheduleModel;
    public examSchedules?: ScheduleModel;
    public todayDate?: string;
    public todaySchedules?: string;
    public tomorrowDate?: string;
    public tomorrowSchedules?: string;
    public currentWeekNumber?: number;
}

export class StudentGroupModel {
    public name?: string;
    public facultyId?: number;
    public specialityDepartmentEducationFormId?: number;
    public course?: number;
    public id?: number;
    public calendarId?: string;
}

export class ScheduleModel {
    public weekDay?: string;
    public name?: string;
    public name?: string;

    public name?: string;
    public name?: string;
    public name?: string;
    public name?: string;
    public name?: string;

    public name?: string;
}

export class ScheduleExamsModel {

}
