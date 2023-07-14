import { CourseLevel } from './local-enums';

export interface IBaseComponent {
  Id: string;
}

export interface ICourseCard extends IBaseComponent {
  Name: string;
  Level: CourseLevel;
}

export interface ICourseInfo extends IBaseComponent {
  Name: string;
  Level: CourseLevel;
  Description: string;
}

export interface ICourse extends IBaseComponent {
  Name: string;
  Level: CourseLevel;
  Description: string;
  somethingElse: string;
}
