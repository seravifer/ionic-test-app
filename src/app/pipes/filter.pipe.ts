import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../models/image';
import Fuse from 'fuse.js';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

  private fuseOptions: Fuse.IFuseOptions<Image> = {
    findAllMatches: false,
    keys: ['id', 'text']
  };

  transform(list: Image[], searchText: string): Image[] {
    if (!searchText) return list;
    const fuse = new Fuse(list, this.fuseOptions);
    return fuse.search(searchText).map(el => el.item);
  }
}
