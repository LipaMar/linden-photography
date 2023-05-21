import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, HomeModule, ContactModule],
  exports: [PagesComponent],
})
export class PagesModule {}
