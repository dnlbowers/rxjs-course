import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // beginnerCourses$: Course[];
    // advancedCourses$: Course[];
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;
    

    ngOnInit() {

        const http$ = createHttpObservable('/api/courses')

        const courses$: Observable<Course[]> = http$.pipe(
            tap(() => console.log('HTTP request executed')),
            map(res => Object.values(res['payload'])),
            shareReplay(),
            catchError(err => 
                //return an observable that emits a single value (catch and replace method of error handling)
                // of ([
                // {
                //     id: 0,
                //     description: "RxJs In Practice Course",
                //     iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
                //     courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
                //     longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
                //     category: 'BEGINNER',
                //     lessonsCount: 10
                // }
            ]))
        );

        courses$.subscribe()

        this.beginnerCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category == 'BEGINNER'))
        );
        this.advancedCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category == 'ADVANCED')),
            
        );

        // The below sunscribe is an rxjs anit-pattern
        // courses$.subscribe(
        //   courses => {
        //     this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');
        //     this.advancedCourses = courses.filter(course => course.category == 'ADVANCED');
        // //   },
        //   noop,
        //   () => console.log('completed')
        // );


    }

}
