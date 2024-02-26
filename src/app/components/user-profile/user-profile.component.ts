import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
   name="Dev"
   age=12
   canDisable=false
   myvalue=""
   userInput(e:Event){
      const {value,name}=e.target as HTMLInputElement;
     this.myvalue=value;
       console.log(value,name)
   }
   id=1;
   randomSal=():number=>{
   let num=Math.floor(Math.random()*100000);
   return num;
   }
   userData=[
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
    {id:this.id++,name:`babu${this.id}`,salary:this.randomSal()},
   ]
}
