import { Injectable, computed, signal ,Signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private counter=signal(0);
doubleCount:Signal<number>=computed(()=>this.counter()*2);
getCounter(){
return this.counter();
}
increment(){
  // this.counter.set(this.counter()+1);
  this.counter.update(prev=>prev+1);
}
decrement(){
  this.counter.set(this.counter()-1);

};

}
