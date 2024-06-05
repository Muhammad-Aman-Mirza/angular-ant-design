import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AccountServiceService } from '../account-service.service';
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

  constructor(private accountService:AccountServiceService){}
  
  onSetTo(status: string) {
    this.accountService.onSetToService(this.id,status)
  }
}
