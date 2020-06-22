import { ImageService } from './image.service';

describe('Test ImageService', () => {

  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('getImages should return 4000 images on array', () => {
    expect(service.getImages(4000).length).toBe(4000);
  });

});
