import { HomeService } from './home.service';

describe('HomeService', () => {
  const service: HomeService = new HomeService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
