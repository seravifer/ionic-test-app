import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'material-page',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {

  images: Image[];
  searchText: string;
  imageSize: number;

  constructor(
    private imageService: ImageService
  ) {}

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
