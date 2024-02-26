import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  standalone: true,
  imports: [],
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.css'
})
export class LifeCyclesComponent implements OnInit,OnDestroy,OnChanges {
  @Input()username="";
  myname="dev"
  
  @ViewChild("userInput") input?:ElementRef;
  changeName(){
    console.log(this.input?.nativeElement)
  }
  constructor(){
  console.log("I'm constructor");
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log("On Destroy------");
  }
ngOnInit(){
  console.log("ngoninit")
}
}
