import { NgZorroModule } from '../../shared/modules/ngzorro.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../../shared/modules/primeng.module';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        PrimeNgModule,
        NgZorroModule,
      ],
      providers: [provideAnimations()],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
