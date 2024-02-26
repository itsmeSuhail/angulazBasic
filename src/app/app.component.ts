import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PropsComponent } from './components/props/props.component';
import { CommonModule } from '@angular/common';
import { ChildPropsComponent } from './components/child-props/child-props.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { LifeCyclesComponent } from './components/life-cycles/life-cycles.component';
import { JokesComponent } from './components/jokes/jokes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,PropsComponent,CommonModule,ChildPropsComponent,PipesComponent,CustomDirectivesComponent,LifeCyclesComponent,JokesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angobasic';
  userData=[
    {name:"babu",salary:"100",age:"90",isAdmin:"false"},
    {name:"sona",salary:"120",age:"20",isAdmin:"true"},
  ]
  receivedProp(e:Event){
    console.log(e,"child data")
  }
}
