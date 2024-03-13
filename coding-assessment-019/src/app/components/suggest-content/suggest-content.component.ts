import { CommonModule } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CircleProgressModule } from "nextsapien-component-lib";
import { SuggestService } from "../../services/suggest.service";
import { ContentItem } from "../../interfaces/suggest.interface";

@Component({
  selector: "app-suggest-content",
  standalone: true,
  imports: [CircleProgressModule, CommonModule],
  templateUrl: "./suggest-content.component.html",
  styleUrl: "./suggest-content.component.scss",
})
export class SuggestContentComponent implements OnDestroy {
  contentItems: ContentItem[] = [];
  dataSubscription: Subscription;

  constructor(private suggestService: SuggestService) {
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
