import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ionic-page',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {

  images: Image[];
  searchText = new FormControl();
  imageSize: number;

  /**
   * ion-virtual-scroll seems to be broken
   * https://github.com/ionic-team/ionic/issues/18409
   */

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.setImageSize();
  }

  trackByFn(index: number, item: Image) {
    return item?.id ?? index;
  }

  private setImageSize() {
    const marginOfCard = 20; // 10px + 10px
    this.imageSize = Math.max(window.innerWidth ?? 0) - marginOfCard;
  }
}
