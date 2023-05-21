import { MaterialsModule } from './../../shared/materials/materials.module';

import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
