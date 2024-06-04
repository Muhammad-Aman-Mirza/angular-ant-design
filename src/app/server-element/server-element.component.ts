import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input('srvElement') element!: {type: string, name: string, content: string};
  @Input() name!: string;
  // @ViewChild('heading', {static: true}) header!: ElementRef;
  // @ContentChild('contentParagraph', {static: true}) paragraph!: ElementRef;

}
