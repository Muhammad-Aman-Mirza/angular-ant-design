import { Component, EventEmitter, Output } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
@Component({
  selector: "app-new-account",
  standalone: true,
  imports: [NzGridModule],
  templateUrl: "./new-account.component.html",
  styleUrl: "./new-account.component.css"
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
  }
}
