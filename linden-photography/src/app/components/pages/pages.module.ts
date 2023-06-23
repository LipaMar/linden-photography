import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutMeModule } from './about-me/about-me.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleriaModule } from 'primeng/galleria';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [PagesComponent, PortfolioComponent],
  imports: [
    PagesRoutingModule,
    HomeModule,
    ContactModule,
    AboutMeModule,
    GalleriaModule,
    PortfolioModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
