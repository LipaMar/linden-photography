import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../../../shared/modules/primeng.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [HomeComponent],
})
export class HomeModule {}
