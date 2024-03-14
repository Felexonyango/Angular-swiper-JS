import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentItem } from '../interfaces/suggest.interface';

@Injectable({
    providedIn: 'root',
})
export class SuggestService {
    contentItems: ContentItem[] = [
        {
            id: 1,
            description:
                "How do you handle adversity or disagreements in a relationship? Can you share an example from your past?",
            circle: { value: 100, max: 100 },
        },
        {
            id: 2,
            description:
                "If you could spend a year doing anything without any financial or logistical constraints, what would it be and why?",
            circle: { value: 60, max: 100 },
        },
        {
            id: 3,
            description:
                "What are your most cherished memories and what do they reveal about what you value in life?",
            circle: { value: 50, max: 100  },
        },
    ];

    getData(): Observable<ContentItem[]> {
        // Implement your data fetching logic here
        return of(this.contentItems)
    }
}