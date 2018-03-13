import { TestBed, inject } from '@angular/core/testing';

import { PostDataServiceService } from './post-data-service.service';

describe('PostDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDataServiceService]
    });
  });

  it('should be created', inject([PostDataServiceService], (service: PostDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
