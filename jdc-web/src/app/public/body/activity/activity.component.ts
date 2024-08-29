import { Component, signal } from '@angular/core';
import { ACTIVITIES } from '../../../data/activity.data';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  activities = signal(ACTIVITIES);
}
