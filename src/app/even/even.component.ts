import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input() number!:number

}
