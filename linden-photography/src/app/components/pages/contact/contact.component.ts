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
