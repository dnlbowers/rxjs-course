import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, concat, fromEvent, interval, merge, noop, of, timer } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //example of merge
    // const interval1$ = interval(1000);

    // const interval2$ = interval1$.pipe(map(val => 10 * val))

    // const result$ = merge(interval1$, interval2$);

    // result$.subscribe(console.log);

    //example of concat
    // const source1$ = of(1,2,3);
    // const source2$ = of(4,5,6);
    // const source3$ = of(7,8,9);

    // const result$ = concat(source1$, source2$, source3$);

    // result$.subscribe(console.log);

    // const http$ = createHttpObservable('/api/courses')

    // const courses$ = http$.pipe(
    //   map(res => Object.values(res['payload']))
    // );

    // courses$.subscribe(
    //   courses => console.log(courses),
    //   noop,
    //   () => console.log('completed')
    // );

    // Example of streams without rxjs
    // document.addEventListener('click', evt => {
    //   console.log(evt)
    //   setTimeout(() => {
    //     let counter = 0;

    //     setInterval(() => {
    //       console.log(counter);
    //       counter++;
    //     }, 1000);
    //     console.log('Timeout completed...');
    //   }, 3000);
    // });

    // Example of streams with rxjs
    // const interval$ = timer(3000, 1000);

    // const sub = interval$.subscribe(val => console.log("stream 1: " + val));

    // setTimeout(() => sub.unsubscribe(), 5000);

    // const click$ = fromEvent(document, 'click')

    // click$.subscribe(
    //   evt => console.log(evt),
    //   err => console.log(err),
    //   () => console.log('completed')
    //   );



  }

}
