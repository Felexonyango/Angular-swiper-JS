import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PlansContentComponent } from '../plans-content/plans-content.component';
import { SuggestContentComponent } from '../suggest-content/suggest-content.component';

@Component({
  selector: 'app-tabcontent',
  standalone: true,
  imports: [
    CommonModule, 
    PlansContentComponent,
    SuggestContentComponent,],
  templateUrl: './tabcontent.component.html',
  styleUrl: './tabcontent.component.scss'
})
export class TabcontentComponent {
  @Input() tabContent!: string;

}
