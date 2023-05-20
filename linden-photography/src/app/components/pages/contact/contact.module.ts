import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactComponent} from "./contact.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
