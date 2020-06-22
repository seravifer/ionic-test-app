import { ImageService } from './image.service';

describe('Test ImageService', () => {

  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('getImages should return 4000 images on array', () => {
    const images = service.getImages(4000);
    expect(images.length).toBe(4000);
    expect(images[0].id).toBeDefined();
    expect(images[0].photo).toBeDefined();
    expect(images[0].text).toBeDefined();
  });

});
