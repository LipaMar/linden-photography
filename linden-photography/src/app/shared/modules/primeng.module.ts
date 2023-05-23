import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  exports: [ButtonModule, DropdownModule]
})
export class PrimeNgModule {}