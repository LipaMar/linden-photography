import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryComponent } from './photo-gallery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeNgModule } from '../../../../shared/modules/primeng.module';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoGalleryComponent],
      imports: [HttpClientTestingModule, PrimeNgModule],
    });
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
