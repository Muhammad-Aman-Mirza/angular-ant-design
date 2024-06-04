import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NzListModule } from "ng-zorro-antd/list";

@Component({
  selector: "app-active-users",
  standalone: true,
  imports: [NzListModule],
  templateUrl: "./active-users.component.html",
  styleUrl: "./active-users.component.css"
})
export class ActiveUsersComponent {
  @Input() users!: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
