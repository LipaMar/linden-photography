import { TestBed } from '@angular/core/testing';

import { EmailSendService } from './email-send.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmailSendService', () => {
  let service: EmailSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmailSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
