import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzTabsModule } from "ng-zorro-antd/tabs";
@Component({
  selector: "app-menu",
  standalone: true,
  imports: [NzDropDownModule, NzTabsModule, CommonModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.css"
})
export class MenuComponent {
  // size: "large" | "default" | "small" = "small";
  // @Input() tabsArray: string[] = [];
  // @Output() onTabChange = new EventEmitter<number>();
  // activatedTab: number = 0;
  // constructor() {}
  // setTab(index: number) {
  //   this.activatedTab = index;
  //   this.onTabChange.emit(this.activatedTab);
  // }
  @Input() tabs: string[] = [];
  @Input() size: "small" | "default" | "large" | any;

  @Output() tabChange: EventEmitter<number> = new EventEmitter<number>();

  onTabChange(index: number): void {
    this.tabChange.emit(index);
  }
}
