import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../models/image';
import Fuse from 'fuse.js';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

   fuseOptions: Fuse.IFuseOptions<Image> = {
    findAllMatches: false,
    keys: ['id', 'text']
  };

  transform(list: Image[], searchText: string) {
    if (!searchText) return list;
    const fuse = new Fuse(list, this.fuseOptions);
    console.log(searchText, fuse.search(searchText))
    return fuse.search(searchText).map(el => el.item);
  }
}
