import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  // providers:[CounterService],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  //agar mai providers provide kr deta hu toh dono alag alag behave krenge 
  //A component or B component
  constructor(private CounterService: CounterService) { }
  decrement() {
    this.CounterService.decrement()
  };
}
