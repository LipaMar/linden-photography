import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm, ContactRequest } from './contact-form';
import { pageAnimations } from '../../../animations';
import { EmailSendService } from '../../../services/email/email-send.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [pageAnimations],
})
export class ContactComponent {
  @HostBinding('@pageAnimations')
  form: FormGroup<ContactForm> = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phoneNr: [null, Validators.pattern('d{9}')],
    topic: [null, Validators.required],
  });

  constructor(
    private emailService: EmailSendService,
    private formBuilder: FormBuilder
  ) {}

  submitForm() {
    const request = this.mapToRequest(this.form);
    this.emailService.sendViaHttpClient(request).subscribe();
  }

  private mapToRequest(form: FormGroup<ContactForm>): ContactRequest {
    const { topic, email, name, phoneNr } = form.value;
    return {
      name: name,
      email: email,
      topic: topic,
      phoneNr: phoneNr,
      _captcha: 'false',
      _template: 'table',
    } as ContactRequest;
  }
}
