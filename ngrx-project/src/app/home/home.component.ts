import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICourseCard } from 'src/app/model/dto';
import { courseSelectors } from 'src/app/ngrx/courses/course.selectors';
import { MyAppState } from 'src/app/ngrx/state.interface';
import { LoadingStatus } from '../model/local-enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public courseList: Observable<ICourseCard[]>;
  public loadingStatus: Observable<LoadingStatus>;

  public LoadingStatus = LoadingStatus;

  public ngOnInit(): void {
    this.courseList = this.store.pipe(select(courseSelectors.selectCourses));
    this.loadingStatus = this.store.pipe(select(courseSelectors.selectStatus));
  }

  protected onOpenCourseInfo(courseId: string): void {
    this.router.navigate(['course-info', courseId]);
  }

  constructor(private store: Store<MyAppState>, private router: Router) {}
}
