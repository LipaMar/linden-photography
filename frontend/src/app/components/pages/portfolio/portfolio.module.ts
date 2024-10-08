import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { GalleriaModule } from 'primeng/galleria';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [CommonModule, GalleriaModule, SharedModule],
  exports: [PhotoGalleryComponent],
})
export class PortfolioModule {}
