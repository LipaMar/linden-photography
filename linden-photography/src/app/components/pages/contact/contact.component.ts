import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactForm } from './contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup = new FormGroup<ContactForm>({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    phoneNr: new FormControl(null),
    topic: new FormControl(null),
  });
}
