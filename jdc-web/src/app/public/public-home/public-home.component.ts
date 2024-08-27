import { Component } from '@angular/core';
import { NavbarComponent } from "../head/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-public-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.css'
})
export class PublicHomeComponent {

}
