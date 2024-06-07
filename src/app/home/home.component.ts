import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import {map,filter} from 'rxjs/operators'

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription?: Subscription;
  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log("Count:", count);
    // });
    const customIntervalObservable = Observable.create((observer:any) => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        if (count === 5) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'))
        }
        count++
      },1000)
    })
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data:any) => {
      return data > 0
    }), map((data: number) => {
      return "Round: " + (data+1)
    })).subscribe((data: any) => {
      console.log(data);
      
    }, (error: Error) => {
      console.log("error:", error);
      alert(error.message)
      
      
    }, () => {
      console.log('Completed!');
      
    })
  }
  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe()
  }
}
