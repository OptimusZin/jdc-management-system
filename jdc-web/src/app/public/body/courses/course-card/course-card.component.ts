import { Component, input } from '@angular/core';
import { Course } from '../../../../data/course.data';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  course = input.required<Course>();
}
