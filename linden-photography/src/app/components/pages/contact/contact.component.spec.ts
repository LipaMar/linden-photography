import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeNgModule } from '../../../shared/modules/primeng.module';
import { FormInputComponent } from './form-input/form-input.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, FormInputComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        PrimeNgModule,
      ],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("email field should have only one 'at' symbol", () => {
    const { email } = component.form.controls;
    email.setValue('iza@belka@.pl');
    expect(email.valid).toBe(false);
  });

  it('name field should not be null', () => {
    const { name } = component.form.controls;
    name.setValue(null);
    expect(name.valid).toBe(false);
  });

  it('email field should not be null', () => {
    const { email } = component.form.controls;
    email.setValue(null);
    expect(email.valid).toBe(false);
  });

  it('phoneNr field can be null', () => {
    const { phoneNr } = component.form.controls;
    phoneNr.setValue(null);
    expect(phoneNr.valid).toBe(true);
  });

  it('topic field should not be null', () => {
    const { topic } = component.form.controls;
    topic.setValue(null);
    expect(topic.valid).toBe(false);
  });

  it('validate email field', () => {
    const { email } = component.form.controls;
    email.setValue('iza@belka.pl');
    expect(email.valid).toBe(true);
    email.setValue('iza@be.lka.pl');
    expect(email.valid).toBe(true);
    email.setValue('iz.a@belka.pl');
    expect(email.valid).toBe(true);
    email.setValue('iza3@be4lka.pl');
    expect(email.valid).toBe(true);
    email.setValue(' iza@belka.pl ');
    expect(email.valid).toBe(false);
    email.setValue('iza@ belka.pl');
    expect(email.valid).toBe(false);
    email.setValue('iza@.belka.pl');
    expect(email.valid).toBe(false);
  });

});

