import { MaterialsModule } from './../../shared/materials/materials.module';

import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialsModule, RouterModule.forRoot([]),],
  exports: [NavbarComponent],
})
export class NavbarModule {}
