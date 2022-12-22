import { Injectable } from '@angular/core';
import { CourseService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class MyAppService {
  public courseService: CourseService;

  constructor() {
    this.courseService = new CourseService();
  }
}
