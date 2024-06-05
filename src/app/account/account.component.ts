import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NzGridModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account!: { name: string, status: string }
  @Input() id!: number
  @Output() statusChanged = new EventEmitter<{id:number,newStatus:string}>()
  
  onSetTo(status: string) {
    this.statusChanged.emit({
      id:this.id,newStatus:status
    })
  }
}
