import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  /*
  long way
  we can use 
  private public
  isko dependency inject krna kehte hai
  ways to inject
 1
  http:HttpClient
  constructor(http:HttpClient) { 
    this.http=http;
  }
  2 class mai use krna thik hai isko
 constructor(private http:HttpClient){}
  3 function mai use krna thik hai
  private http=inject(HttpClient)
  */
 constructor(private http:HttpClient){}
 apiURL="https://api.chucknorris.io/jokes/random?category=dev"
  getJoke():Observable<Object>{
  return this.http.get(this.apiURL);
 
   }

 
}
