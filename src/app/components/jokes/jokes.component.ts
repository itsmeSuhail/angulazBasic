import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
//service is also dependency
constructor(private jokeFun:JokeService){}
joke="loading"
ngOnInit(){
  this.jokeFun.getJoke().subscribe((data:any)=>{
   this.joke=data?.value;
  });
}
getNewJoke(){
  this.joke="loading"
 try {
  this.jokeFun.getJoke().subscribe((data:any)=>{
    this.joke=data?.value;
   });
 } catch (error) {
  this.joke="error"
  
 }
}
}
