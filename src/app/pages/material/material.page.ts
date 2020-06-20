import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'app-material',
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
    console.log(this.images);
  }

  trackByFn(index: number, item: Image) {
    return item ? item.id : index;
  }
}
