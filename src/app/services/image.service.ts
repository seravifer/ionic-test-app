import { Injectable } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

@Injectable({ providedIn: 'root'})
export class ImageService {

  constructor() { }

  getImages() {
    return Array(4000).fill(undefined).map((_, i) => {
      return {
        id : i,
        photo: this.genereteImage(i),
        text: this.generateText()
      }
    });
  }

  private generateText() {
    return loremIpsum({
      count: 1,                // Number of "words", "sentences", or "paragraphs"
      format: 'plain',         // "plain" or "html"
      paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
      random: Math.random,     // A PRNG function
      sentenceLowerBound: 5,   // Min. number of words per sentence.
      sentenceUpperBound: 15,  // Max. number of words per sentence.
      suffix: '\n',            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: 'sentences'      // paragraph(s), "sentence(s)", or "word(s)
    });
  }

  private genereteImage(seed: string | number) {
    return `https://picsum.photos/id/${seed}/500`;
  }

}
