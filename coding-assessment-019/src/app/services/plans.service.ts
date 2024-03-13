import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DaySchedule } from '../interfaces/plans.interface';

@Injectable({
    providedIn: 'root',
})
export class PlansService {
    suggestions: DaySchedule[] = [
        {
            day: 'Mon',
            suggests: [
                {
                    freeTime: '5',
                    time: '5pm',
                    blocked: false,
                    suggested: [
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: true,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                    ]
                }
            ]
        },
        {
            day: 'Tues',
            suggests: [
                {
                    freeTime: '5',
                    time: '10 am',
                    blocked: false,
                    suggested: [
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: true
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                    ]
                },
                {
                    freeTime: '5',
                    time: '3 am',
                    blocked: false,
                    suggested: [
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                    ]
                }
            ]
        },
        {
            day: 'Wed',
            suggests: [
                {
                    freeTime: '5',
                    time: '3am',
                    blocked: true,
                    suggested: [
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                    ]
                },
                {
                    freeTime: '5',
                    time: '7am',
                    blocked: false,
                    suggested: [
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                        {
                            text: 'Cafe > Temple > Palace > Walk/Firewo... ',
                            checked: false,
                            canceled: false
                        },
                    ]
                }
            ]
        }
    ]

    getData(): Observable<any> {
        // Implement your data fetching logic here
        return of(this.suggestions)
    }
}