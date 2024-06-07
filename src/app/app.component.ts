import { Component, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { FormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, UntypedFormGroup } from "@angular/forms";
import { createStore, select, withProps } from "@ngneat/elf";
import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";
import { Test3Component } from "./test3/test3.component";
import { Test4Component } from "./test4/test4.component";
import { MenuComponent } from "./menu/menu.component";
import { TabStore } from "./tab.repository";
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
import { Subscription, tap } from "rxjs";
import { AccountServiceService } from "./account-service.service";
import { SelectEntityEvent, UserMasterRes } from "./interface";

import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzFlexModule } from "ng-zorro-antd/flex";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { UsersService } from "./users.service";
export enum EntityType {
  Corporate = 21,
  Individual = 22,
  Employee = 154,
  Bank = 158,
  CounterParty = 159
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    OddComponent,
    EvenComponent,
    NzFormModule,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    ReactiveFormsModule,
    NzCheckboxModule,
    RouterLink,
    NzDatePickerModule,
    NzFlexModule,
    NzInputModule,
    NzTableModule,
    NzTypographyModule,
    NzSwitchModule,
    NzTabsModule,
    NewAccountComponent,
    GameControlComponent,
    MenuComponent,
    RouterOutlet,
    FormsModule,
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
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub?: Subscription;
  constructor(private userService: UsersService) {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      didActivate => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.activatedSub?.unsubscribe()
  }
}
