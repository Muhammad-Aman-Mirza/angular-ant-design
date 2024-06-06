import { Component, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { FormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { ReactiveFormsModule, UntypedFormGroup } from "@angular/forms";
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
import { AccountServiceService } from "./account-service.service";
import { SelectEntityEvent, UserMasterRes } from "./interface";
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
    ReactiveFormsModule,
    NzSwitchModule,
    NewAccountComponent,
    GameControlComponent,
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
export class AppComponent {
  basicInfoForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoForm = this.fb.group({
      employeeId: ['',Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: [''],
      remarks: ['']
    });
  }
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  server: { type: string; name?: string; content?: string }[] = [];
  // server: any[] = [];
  newServerName?: string;
  newServerContent?: string;
  extraTemplate: string | TemplateRef<void> | undefined;
  listOfPosition: NzPlacementType[] = ["bottomCenter"];
  addServer() {
    this.server.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent
    });
  }
  onSubmit(): void {
    debugger
    if (this.basicInfoForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form data:', this.basicInfoForm.value);
      this.submitted = true;
      // You can perform further actions here, such as sending the form data to a server
    } else {
      console.error('Form is invalid. Please check the fields.');
    }
  }
}
