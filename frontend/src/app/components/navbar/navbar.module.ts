import { NgZorroModule } from '../../shared/modules/ngzorro.module';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../../shared/modules/primeng.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    PrimeNgModule,
    NgZorroModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
