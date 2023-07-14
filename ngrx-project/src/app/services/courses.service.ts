import { delay, Observable, of } from 'rxjs';
import { ICourseCard, ICourseInfo } from '../model/dto';

export class CourseService {
  constructor() {}

  protected currentCourses: ICourseInfo[] = [
    {
      Id: '1',
      Level: 0,
      Name: 'Course 1',
      Description: 'This is a course description.',
    },
  ];

  public getCourseSummaryList(): Observable<ICourseCard[]> {
    const response: ICourseCard[] = [
      {
        Id: '1',
        Level: 0,
        Name: 'Course 1',
      },
      {
        Id: '2',
        Level: 1,
        Name: 'Course 2',
      },
      {
        Id: '3',
        Level: 2,
        Name: 'Course 3',
      },
    ];
    return of(response).pipe(delay(5000));
  }

  public getCourseInfo(
    courseId: string | undefined
  ): Observable<ICourseInfo | undefined> {
    const response: ICourseInfo | undefined = this.currentCourses.find(
      (course) => course.Id === courseId
    );

    // This should never be reached unless the app is broken.
    if (!response) {
      throw new Error('Course not found');
    }

    return of(response).pipe(delay(5000));
  }
}
