import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CockpitComponent,ServerElementComponent,CommonModule,NzCardModule,NzButtonModule,NzLayoutModule,NzDropDownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  extraTemplate: string|TemplateRef<void>|undefined;
  evenNumbers:number[] = []
  oddNumbers:number[]  = []

  // intervalFired!:number[]
  intervelFired(firedNumber:number){
    if(firedNumber%2 === 0){
      this.evenNumbers.push(firedNumber)
    }
    else{
      this.oddNumbers.push(firedNumber)
    }
  }
  interval!:any
  lastNumber = 0
  startGame(){
    this.interval = setInterval(()=>{
      this.intervelFired(this.lastNumber+1)
      this.lastNumber++
    },1000)
  }

  pauseGame(){
    clearInterval(this.interval)
  }
  

}
