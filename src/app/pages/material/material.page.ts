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

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  trackByFn(index: number, item: Image) {
    return item?.id ?? index;
  }
}
