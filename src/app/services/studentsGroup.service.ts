import { Injectable } from '@angular/core';
import { StudentTimeTableGroupModel } from 'src/app/modules/models/studentTimeTableGroupModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsGroupService {
    constructor(private http: HttpClient) { }

    getStudentGroupRequest(studentGroup: string ): Observable<StudentTimeTableGroupModel> {
        return this.http.get<StudentTimeTableGroupModel>('https://journal.bsuir.by/api/v1/studentGroup/schedule' + studentGroup);
    }

    
}