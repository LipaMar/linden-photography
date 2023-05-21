import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, HomeModule, ContactModule, RouterModule.forRoot([])],
  exports: [PagesComponent],
})
export class PagesModule {}
