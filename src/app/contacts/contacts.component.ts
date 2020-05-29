import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  sendContacts() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
