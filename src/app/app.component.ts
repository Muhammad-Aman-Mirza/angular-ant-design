import { Component, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { EvenComponent } from "./even/even.component";
import { OddComponent } from "./odd/odd.component";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzListModule } from "ng-zorro-antd/list";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    OddComponent,
    EvenComponent,
    GameControlComponent,
    RouterOutlet,
    CockpitComponent,
    ServerElementComponent,
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzLayoutModule,
    NzDropDownModule,
    NzListModule,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  preserveWhitespaces: true
})
export class AppComponent {
  extraTemplate: string | TemplateRef<void> | undefined;
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
