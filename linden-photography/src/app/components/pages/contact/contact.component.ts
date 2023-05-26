import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactForm } from './contact-form';
import { pageAnimations } from '../../../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [pageAnimations],
})
export class ContactComponent {
  @HostBinding('@pageAnimations')
  form: FormGroup = new FormGroup<ContactForm>({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNr: new FormControl(),
    topic: new FormControl(),
  });

  sendForm() {
    console.log(this.form.value);
  }
}
