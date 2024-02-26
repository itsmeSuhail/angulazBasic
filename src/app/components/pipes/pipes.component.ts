import { Component } from '@angular/core';
import { FomatPipe } from '../../pipes/fomat.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [FomatPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 name="suhail"
}
