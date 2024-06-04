import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NzListModule } from "ng-zorro-antd/list";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  standalone: true,
  imports: [NzListModule],
  templateUrl: "./active-users.component.html",
  styleUrl: "./active-users.component.css"
})
export class ActiveUsersComponent implements OnInit {
  users!: string[]
  constructor(private userService:UsersService){}
  onSetToInactive(id: number) {
    this.userService.setToInactive(id)
  }
  ngOnInit(): void {
    this.users = this.userService.activeUsers
  }
  
}
