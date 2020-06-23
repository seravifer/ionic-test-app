import { FilterPipe } from './filter.pipe';
import { ImageService } from '../services/image.service';

describe('Test FilterPipe', () => {

  let pipe: FilterPipe;
  let imageService: ImageService;

  beforeEach(() => {
    pipe = new FilterPipe();
    imageService = new ImageService();
  });

  it('should find an image by ID', () => {
    const images = imageService.getImages(4000);
    const searchResults = pipe.transform(images, '1000');
    expect(searchResults[0].id).toBe(1000);
  });

});
