import {Component, Input, OnInit} from '@angular/core';
import {ElementService} from './element.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input() innerFlip: boolean;
  @Input() index: number;

  numberOfClicks = 0;
  flipped = false;

  icon = '';

  flip = this.innerFlip;

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.icon = this.elementService.getIcon(this.index);
  }

  rotate() {
    if (!this.flipped && this.elementService.clickable) {
      this.flipped = true;
      this.numberOfClicks = this.elementService.getClickCount();
      console.log(this.numberOfClicks);
      console.log(this.icon);
      if (this.numberOfClicks === 0) {
        this.flip = !this.flip;
        this.elementService.addClickCount();
        this.elementService.setPrevious(this.icon);

      }

      if (this.numberOfClicks === 1) {
        this.flip = !this.flip;
        this.elementService.addClickCount();
        this.elementService.setClickable(false);
        console.log('we are here');
        // check for equal
        if (this.icon.toString() === this.elementService.getPrevious().toString()) {
          console.log('equal baby');
        }
      }
    }
  }

}
