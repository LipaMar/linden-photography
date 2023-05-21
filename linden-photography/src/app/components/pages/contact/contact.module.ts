import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from '../../../shared/materials/materials.module';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [ContactComponent, FormInputComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
