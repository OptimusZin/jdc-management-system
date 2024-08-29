import { Component, input, signal } from '@angular/core';
import { Course, COURSES } from '../../../data/course.data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = signal(COURSES);
}
