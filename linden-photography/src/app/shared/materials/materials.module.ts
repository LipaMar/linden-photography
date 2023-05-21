import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    MatCommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class MaterialsModule {}
