import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-public-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-classes.component.html',
  styleUrl: './public-classes.component.css'
})
export class PublicClassesComponent {
  activeView = 'view1';

  setActiveView(view: string) {
    this.activeView = view;
  }
}
