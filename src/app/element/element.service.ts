import {Injectable} from '@angular/core';

@Injectable()
export class ElementService {
  numberOfClicks = 0;
  clickable = true;
  icon: string;
  icons: string[] = [
    'fab fa-windows',
    'fab fa-android',
    'fab fa-apple',
    'fab fa-fly',
    'fab fa-git',
    'fab fa-google',
    'fab fa-firefox',
    'fab fa-chrome',
    'fab fa-windows',
    'fab fa-android',
    'fab fa-apple',
    'fab fa-fly',
    'fab fa-git',
    'fab fa-google',
    'fab fa-firefox',
    'fab fa-chrome'
  ];

  addClickCount() {
    this.numberOfClicks++;
  }

  getClickCount() {
    return this.numberOfClicks;
  }

  setClickable(status: boolean) {
    this.clickable = status;
  }

  getIcon(index) {
    return this.icons[index].slice();
  }

  getIcons() {
    return this.icons.slice();
  }

  setPrevious(icon: string) {
    this.icon = icon;
  }

  getPrevious() {
    if (this.icon) {
      return this.icon;
    }
  }
}
