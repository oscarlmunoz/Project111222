import { delay, Observable, of } from 'rxjs';
import { ICourse } from '../model/dto';

export class CourseService {
  constructor() {}

  public getCoursesList(): Observable<ICourse[]> {
    const response: ICourse[] = [
      {
        Id: '1',
        Level: 0,
        Name: 'Course 1',
      },
      {
        Id: '2',
        Level: 0,
        Name: 'Course 2',
      },
      {
        Id: '3',
        Level: 0,
        Name: 'Course 3',
      },
    ];
    return of(response).pipe(delay(5000));
  }
}
