import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from '../../../shared/modules/primeng.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
