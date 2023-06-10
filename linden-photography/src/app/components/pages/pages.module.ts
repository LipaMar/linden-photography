import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutMeModule } from './about-me/about-me.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, HomeModule, ContactModule, AboutMeModule],
  exports: [PagesComponent],
})
export class PagesModule {}
