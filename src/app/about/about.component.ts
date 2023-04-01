import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, fromEvent, interval, noop, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

    const http$ = Observable.create(observer => {
      fetch(`/api/courses`)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      })
    });

    http$.subscribe(
      courses => console.log(courses),
      noop,
      () => console.log('completed')
    );

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
