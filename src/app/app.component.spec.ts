import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './components/navbar/navbar.module';
import { PagesModule } from './components/pages/pages.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterComponent } from './components/footer/footer.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule,
        PagesModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        NavbarModule,
        FormsModule,
        HttpClientTestingModule,
        FontAwesomeModule
      ],
      providers: [],
      declarations: [AppComponent, FooterComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'linden'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('linden');
  });
});
