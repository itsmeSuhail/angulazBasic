import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JokesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
