import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '../../../shared/modules/ngzorro.module';
import { PrimeNgModule } from '../../../shared/modules/primeng.module';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    PrimeNgModule,
    NgZorroModule,
  ],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
