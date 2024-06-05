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

interface Todo {
  id: number;
  label: string;
}

const store = createStore({ name: "todos" }, withEntities<Todo>());
const entities = store.pipe(selectAllEntities(), joinRequestResult(["todos"]));
entities.subscribe(
  ({
    isLoading,
    isError,
    isSuccess,
    data,
    status,
    successfulRequestsCount
  }) => {
    console.log(
      isLoading,
      isError,
      isSuccess,
      status,
      successfulRequestsCount + 1,
      data // typed as Todo[]
    );
  }
);

function setTodos(todos: Todo[]) {
  store.update(setEntities(todos));
}

function fetchTodos() {
  return fromFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
    selector: response => response.json()
  }).pipe(tap(setTodos, trackRequestResult(["todos"])));
}
let data = fetchTodos().subscribe();
console.log("data=", data);

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
}
