import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup<ContactForm> = new FormGroup<ContactForm>({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl([Validators.required, Validators.email]),
    phoneNr: new FormControl([Validators.pattern('d{9}')]),
    topic: new FormControl([Validators.required]),
  });

  constructor(private emailService: EmailSendService) {}

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
