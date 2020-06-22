import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'image-component',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnChanges {

  @Input() image: Image;
  @Input() imageSize: number;

  isImgLoaded = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.isImgLoaded = true;
  }

  onLoadImg(event) {
    this.isImgLoaded = false;
  }
}
