import { Injectable } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { Image } from '../models/image';

@Injectable({ providedIn: 'root' })
export class ImageService {

  constructor() { }

  getImages(numberOfImages: number = 4000) {
    return Array.from({ length: numberOfImages }, (_, index) => {
      return {
        id : index,
        photo: this.genereteImage(index),
        text: this.generateText()
      } as Image;
    });
  }

  private generateText() {
    return loremIpsum({
      format: 'plain',
      units: 'sentences',
      count: 1,
      random: Math.random,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15
    });
  }

  private genereteImage(seed: string | number) {
    return `https://picsum.photos/seed/${seed}/500`;
  }

}
