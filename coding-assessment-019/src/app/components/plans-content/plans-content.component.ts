import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlansService } from '../../services/plans.service';
import { DaySchedule } from '../../interfaces/plans.interface';

@Component({
  selector: 'app-plans-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans-content.component.html',
  styleUrl: './plans-content.component.scss'
})

export class PlansContentComponent {
  activeBar = [-1, -1]
  dataSubscription: Subscription;
  suggestions: DaySchedule[] = []

  constructor(private plansService: PlansService) {
    this.dataSubscription = this.plansService.getData().subscribe(data => {
      this.suggestions = data;
      // Handle data
    });
  }
  setActive(sIndex: number, sdIndex: number) {
    if (this.activeBar[0] == sIndex && this.activeBar[1] == sdIndex) {
      this.activeBar = [-1, -1];

    } else {
      this.activeBar = [sIndex, sdIndex];
    }
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
