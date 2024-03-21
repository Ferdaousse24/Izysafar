import { Component } from '@angular/core';
import {CarrouselComponent} from "../carrousel/carrousel.component";
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
