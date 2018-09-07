import {Component, OnInit} from '@angular/core';
import {ElementService} from './element/element.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards';
  flips: boolean[] = [];
  icons: string[];

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.icons = this.elementService.getIcons();
    for (const index in this.icons) {
      this.flips[index] = false;
    }
  }
}
