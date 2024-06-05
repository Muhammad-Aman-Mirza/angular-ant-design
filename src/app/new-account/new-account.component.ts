import { Component, EventEmitter, Output } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { AccountServiceService } from "../account-service.service";
@Component({
  selector: "app-new-account",
  standalone: true,
  imports: [NzGridModule],
  templateUrl: "./new-account.component.html",
  styleUrl: "./new-account.component.css"
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private accountService: AccountServiceService) {
    this.accountService.statusChanged.subscribe((status: string) =>
      alert("New Status:" + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAddAccountService(accountName, accountStatus);
  }
}
