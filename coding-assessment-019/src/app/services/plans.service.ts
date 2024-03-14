import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DaySchedule } from "../interfaces/plans.interface";

@Injectable({
  providedIn: "root",
})
export class PlansService {
  suggestions: DaySchedule[] = [
    {
      day: "Mon",

      suggests: [
        {
          freeTime: "5",
          time: "5pm",
          suggestion: "3 fun suggestion",

          blocked: false,
          suggested: [
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: true,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
          ],
        },
      ],
    },
    {
      day: "Tues",

      suggests: [
        {
          suggestion: "3 fun suggestion",
          freeTime: "3",
          time: "10 am",
          blocked: false,
          suggested: [
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: true,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
          ],
        },
        {
          freeTime: "7",
          suggestion:'6 fun suggestion',
          time: "3 am",
          blocked: false,
          suggested: [
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
          ],
        },
      ],
    },
    {
      day: "Wed",
      suggests: [
        {
          freeTime: "7",
          time: "3am",
          blocked: true,
          suggested: [
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
          ],
        },
        {
          freeTime: "18",
          time: "7am",
          blocked: false,
          suggestion:'33 fun suggestion',
          suggested: [
            
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
            {
              text: "Cafe > Temple > Palace > Walk/Firewo... ",
              checked: false,
              canceled: false,
            },
          ],
        },
      ],
    },
  ];

  getData(): Observable<any> {
    // Implement your data fetching logic here
    return of(this.suggestions);
  }
}
