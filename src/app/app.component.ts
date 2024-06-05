import { Component, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountComponent } from "./account/account.component";
import { EvenComponent } from "./even/even.component";
import { OddComponent } from "./odd/odd.component";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzListModule } from "ng-zorro-antd/list";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzPlacementType } from "ng-zorro-antd/dropdown";
import { createStore, select, withProps } from "@ngneat/elf";
import {
  selectAllEntities,
  setEntities,
  withEntities,
  selectAllEntitiesApply,
  getAllEntitiesApply,
  deleteAllEntities,
  deleteEntities,
  moveEntity
} from "@ngneat/elf-entities";
import { localStorageStrategy, persistState } from "@ngneat/elf-persist-state";
import { joinRequestResult, trackRequestResult } from "@ngneat/elf-requests";
import { fromFetch } from "rxjs/fetch";
import { tap } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    OddComponent,
    EvenComponent,
    NewAccountComponent,
    GameControlComponent,
    RouterOutlet,
    CockpitComponent,
    ServerElementComponent,
    CommonModule,
    AccountComponent,
    NzCardModule,
    NzButtonModule,
    NzLayoutModule,
    NzDropDownModule,
    NzSelectModule,
    NzGridModule,
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
  listOfPosition: NzPlacementType[] = ["bottomCenter"];
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  onAddAccount(newAccount: { name: string; status: string }) {
    this.accounts.push({
      name: newAccount.name,
      status: newAccount.status
    });
  }

  onStatusChanged(updateStatus: { id: number; newStatus: string }) {
    this.accounts[updateStatus.id].status = updateStatus.newStatus;
  }
}
