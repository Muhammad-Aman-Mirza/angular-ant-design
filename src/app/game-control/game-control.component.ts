import { Component, EventEmitter, Output } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
@Component({
  selector: "app-game-control",
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: "./game-control.component.html",
  styleUrl: "./game-control.component.css",
  preserveWhitespaces: true
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;
  startGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  pauseGame() {
    clearInterval(this.interval);
  }
}
