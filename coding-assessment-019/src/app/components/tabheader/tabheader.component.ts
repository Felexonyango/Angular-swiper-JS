import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabheader.component.html',
  styleUrl: './tabheader.component.scss'
})
export class TabheaderComponent {
  @Input() tab: any; 
  @Input() index!: number; 
  @Input() isActive!: boolean;
  @Input() className: string | undefined;
  @Output() tabClicked = new EventEmitter<number>();

  
}
