import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabRenderingService {
  renderTabBullet(tab: any, className: string): string {
    return `
      <div class="${className}">
        <div class="tab f-calistoga" [ngClass]="{ 'tab_icon_active': tab.isActive }">
          <div class="circle">
            <img src="assets/images/12121.png" />
            <div class="tab_icon_block">
              ${this.renderTabContent(tab)}
            </div>
          </div>
          <div class="tab_label">${tab.label}</div>
        </div>
      </div>
    `;
  }

  renderTabContent(tab: any): string {
    if (!tab?.time) {
      return `<img src="assets/icons/${tab.content}.svg" class="tab_icon" />`;
    } else {
      return `
        <div class="tab_time"*ngIf="tab?.time">
          <div>${tab.time.hours}<span>h</span></div>
          <div>${tab.time.minutes}<span>m</span></div>
          <div>${tab.time.seconds}<span>s</span></div>
        </div>
      `;
    }
  }
}
