import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [PagesComponent],
  imports:[PagesRoutingModule, HomeModule],
  exports: [PagesComponent]
})
export class PagesModule {}
