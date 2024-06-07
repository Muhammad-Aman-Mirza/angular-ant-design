import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css"
})
export class UserComponent implements OnInit {
  id!: number;
  constructor(private route: ActivatedRoute,private userService:UsersService) {
    console.log('1')
    
  }

  ngOnInit(): void {
    console.log('2')
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  onActivate() {
    this.userService.activatedEmitter.next(true)
  }
}
