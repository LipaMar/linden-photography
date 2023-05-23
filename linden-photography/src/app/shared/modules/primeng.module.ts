import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  exports: [ButtonModule, DropdownModule, InputTextModule, InputTextareaModule],
})
export class PrimeNgModule {}
