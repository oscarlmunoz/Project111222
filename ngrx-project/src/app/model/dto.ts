import { courseLevel } from './local-enums';

export interface IBaseComponent {
  Id: string;
}

export interface ICourse extends IBaseComponent {
  Name: string;
  Level: courseLevel;
}
