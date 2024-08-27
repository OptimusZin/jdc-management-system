import { Component } from '@angular/core';
import { PublicClassesComponent } from "../../head/public-classes/public-classes.component";
import { ActivityComponent } from "../activity/activity.component";
import { AboutJdcComponent } from "../about-jdc/about-jdc.component";

@Component({
  selector: 'app-public-body',
  standalone: true,
  imports: [PublicClassesComponent, ActivityComponent, AboutJdcComponent],
  templateUrl: './public-body.component.html',
  styleUrl: './public-body.component.css'
})
export class PublicBodyComponent {

}
