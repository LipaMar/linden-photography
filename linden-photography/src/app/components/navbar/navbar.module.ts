import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../../shared/modules/primeng.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule.forRoot([]), PrimeNgModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
