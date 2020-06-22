import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'ionic-page',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {

  images: Image[];
  searchText: string;

  /**
   * ion-virtual-scroll seems to be broken
   * https://github.com/ionic-team/ionic/issues/18409
   */

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  trackByFn(index: number, item: Image) {
    return item?.id ?? index;
  }
}
