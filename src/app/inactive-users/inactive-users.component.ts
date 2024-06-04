import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NzListModule } from "ng-zorro-antd/list";
import { UsersService } from "../users.service";
@Component({
  selector: "app-inactive-users",
  standalone: true,
  imports: [NzListModule],
  templateUrl: "./inactive-users.component.html",
  styleUrl: "./inactive-users.component.css"
})
export class InactiveUsersComponent implements OnInit {
  users!: string[]
  constructor(private userService:UsersService){}
  onSetToActive(id: number) {
    this.userService.setToActive(id)
  }
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }
}
