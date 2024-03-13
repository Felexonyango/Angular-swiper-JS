import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITabs } from '../interfaces/tab.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomTabsService {

  tabs:ITabs[] = [
    { label: "Notes", content: "notes" },
    { label: "Plans", content: "plans" },
    {
      label: "Suggest",
      content: "suggest",
      time: {
        hours: "05",
        minutes: "04",
        seconds: "35",
      },
    },
    { label: "Profile", content: "profile" },
    { label: "Automate", content: "automate" },
  ];

  getTabs():Observable<ITabs[]> {
   
    return of(this.tabs)
}

}
