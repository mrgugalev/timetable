import { Employee } from './teacherScheduleGroupModel';

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
    public schedule?: Array<ScheduleModel1>;
}

export class ScheduleModel1 {
    public weekNumber?: Array<any>;
    public studentGroup?: string;
    public numSubgroup?: number;
    public auditory?: Array<string>;
    public lessonTime?: string;
    public startLessonTime?: string;
    public endLessonTime?: string;
    public subject?: string;
    public note?: string;
    public lessonType?: string;
    public employee?: Employee;
    public zaoch?: false;
}
