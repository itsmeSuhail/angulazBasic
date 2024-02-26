import { Component } from '@angular/core';
import { HighilightDirective } from '../../directives/highilight.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [HighilightDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

}
