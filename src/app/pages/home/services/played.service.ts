import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Played } from 'src/app/shared/Models/played';

@Injectable({
  providedIn: 'root'
})
export class PlayedService {

  newPlayed(): Observable<Played>{
    const arr = this.getRandomListNumbers();

    const newPlayed: Played = {
      num1: arr[0],
      num2: arr[1],
      num3: arr[2],
      num4: arr[3],
      num5: arr[4],
      num6: arr[5],
      numSS: this.getRandomNumber()
    };

    return of(newPlayed);
  } 

  getRandomListNumbers(): number[] {    
    let arr: number[] = [];
    while(arr.length < 6){
        const r: number = this.getRandomNumber();
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr.sort((a, b) => a - b);
  }

  getRandomNumber(): number{
    const min: number = 1;
    const max: number = 90;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
