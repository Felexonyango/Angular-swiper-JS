import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from "@angular/core";
import Swiper from "swiper";
import { Navigation, Pagination, History } from "swiper/modules";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { TabcontentComponent } from "../tabcontent/tabcontent.component";
import { CustomTabsService } from "../../services/custom-tabs.service";
import { ITabs } from "../../interfaces/tab.interface";
import { TabRenderingService } from "../../services/tabsrendering.service";

Swiper.use([Navigation, Pagination, History]);

@Component({
  selector: "app-custom-tabs",
  standalone: true,
  imports: [CommonModule, TabcontentComponent],
  templateUrl: "./custom-tabs.component.html",
  styleUrls: ["./custom-tabs.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CustomTabsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren("swiper", { read: ElementRef })
  swiperContainer!: QueryList<ElementRef>;
  dataSubscription!: Subscription;
  swiperTabs: Swiper | undefined;
  tabs: ITabs[] = [];

  constructor(
    private tabService: CustomTabsService,
    private tabsRenderingService:TabRenderingService
    ) {}

  ngOnInit(): void {
    this.getAllTabs();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  getAllTabs() {
    this.tabService.getTabs().subscribe({
      next: (response) => {
        this.tabs = response;
      },
    });
  }

  initializeSwiper() {
    if (this.swiperContainer) {
      const swiperContainer = this.swiperContainer.first.nativeElement;
  
      this.swiperTabs = new Swiper(swiperContainer, {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: (index, className) => {
            const tab = this.tabs[index];
            return this.tabsRenderingService.renderTabBullet(tab, className);
           
            
            },
          
        },
        loop: true,
      });
    }
  }
  
 
  
}
