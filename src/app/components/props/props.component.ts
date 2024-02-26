import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
function Upper(val:string):string{
return val.toUpperCase();
}
@Component({
  selector: 'app-props',
  standalone: true,
  imports: [],
  templateUrl: './props.component.html',
  styleUrl: './props.component.css'
})
export class PropsComponent {
@Input({alias:"username",transform:Upper}) name=""
@Input({transform:numberAttribute}) age!:number
@Input({transform:numberAttribute}) salary!:number
@Input({transform:booleanAttribute}) isAdmin!:boolean

}
