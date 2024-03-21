import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'izysafar';
}
