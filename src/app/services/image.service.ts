import { Injectable } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { Image } from '../models/image';

@Injectable({ providedIn: 'root' })
export class ImageService {

  constructor() { }

  getImages(numberOfImages: number = 4000): Image[] {
    return this.generateArrayByFn(numberOfImages, (index) => {
      return {
        id : index,
        photo: this.genereteImage(index),
        text: this.generateText()
      } as Image;
    });
  }

  private generateArrayByFn<T>(length: number, mapFn: (index: number) => T): T[] {
    return Array.from({ length }, mapFn);
  }

  private generateText(): string {
    return loremIpsum({
      format: 'plain',
      units: 'sentences',
      count: 1,
      random: Math.random,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15
    });
  }

  private genereteImage(seed: string | number): string {
    return `https://picsum.photos/seed/${seed}/500`;
  }

}
