import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [PagesRoutingModule, HomeModule, ContactModule,  RouterModule.forRoot([]),],
    });
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
