import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactForm } from './contact-form';
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
  form: FormGroup = new FormGroup<ContactForm>({
    name: new FormControl(),
    email: new FormControl(),
    phoneNr: new FormControl(),
    topic: new FormControl(),
  });

  constructor(private emailService: EmailSendService) {}

  submitForm() {
    this.emailService.sendViaHttpClient(this.form.value).subscribe();
  }
}
