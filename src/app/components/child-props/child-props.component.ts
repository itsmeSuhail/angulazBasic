import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-props',
  standalone: true,
  imports: [],
  templateUrl: './child-props.component.html',
  styleUrl: './child-props.component.css'
})
export class ChildPropsComponent {
@Output()myEvents=new EventEmitter();
sendData(){
  this.myEvents.emit({
    name:"Suhail",
    email:"letxandy@gmail.com",
    password:"1234"
  })
}
}
