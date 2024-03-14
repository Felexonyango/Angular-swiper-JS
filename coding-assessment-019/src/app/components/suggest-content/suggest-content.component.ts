import { CommonModule } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CircleProgressComponent, CircleProgressModule } from "nextsapien-component-lib";
import { SuggestService } from "../../services/suggest.service";
import { ContentItem } from "../../interfaces/suggest.interface";

@Component({
    selector: "app-suggest-content",
    standalone: true,
    templateUrl: "./suggest-content.component.html",
    styleUrl: "./suggest-content.component.scss",
    imports: [CircleProgressModule, CommonModule, ],
  
})
export class SuggestContentComponent implements OnDestroy {
  contentItems: ContentItem[] = [];
  dataSubscription: Subscription;

  constructor(private suggestService: SuggestService,
  
    ) {
    this.dataSubscription = this.suggestService.getData().subscribe((data) => {
      this.contentItems = data;
      // Handle data
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
