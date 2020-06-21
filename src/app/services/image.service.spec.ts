import { ImageService } from './image.service';

describe('Test ImageService', () => {

  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('getImages should return 4000 images on array', () => {
    expect(service.getImages().length).toBe(4000);
  });

  it('generateText should return a string', () => {
    // @ts-ignore
    expect(service.generateText().length).toBeGreaterThan(0);
  });

  it('genereteImage should return a URL', () => {
    // @ts-ignore
    expect(service.genereteImage('50')).toBe('https://picsum.photos/seed/50/500');
  });

});
