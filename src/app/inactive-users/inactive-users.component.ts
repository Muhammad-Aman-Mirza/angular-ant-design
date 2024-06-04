import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NzListModule } from "ng-zorro-antd/list";
@Component({
  selector: "app-inactive-users",
  standalone: true,
  imports: [NzListModule],
  templateUrl: "./inactive-users.component.html",
  styleUrl: "./inactive-users.component.css"
})
export class InactiveUsersComponent {
  @Input() users!: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
