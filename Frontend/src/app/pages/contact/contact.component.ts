import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';
import { AbstractControl } from '@angular/forms';
import { 
  FormBuilder,
  FormControl,
  FormGroup,
  Validators 
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  get name(): AbstractControl {
    return this.contactForm.controls['name'];
  }
  get email(): AbstractControl {
    return this.contactForm.controls['email'];
  }
  get issue(): AbstractControl {
    return this.contactForm.controls['issue'];
  }
  get msg(): AbstractControl {
    return this.contactForm.controls['msg'];
  }
  constructor( private formBuilder: FormBuilder ) {
    this.contactForm = this.formBuilder.group(
      {
        name:['',[Validators.required]],
        email:['', [Validators.required, Validators.email]],
        issue:['',[Validators.required]],
        msg:['',[Validators.required]],
      });
  }

  ngOnInit(): void {}
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.contactForm.value;
  }

  get nameField() {
    return this.contactForm.get('name');
  }
  get emailField() {
    return this.contactForm.get('email');
  }
  get issueField() {
    return this.contactForm.get('issue');
  }
  get msgField() {
    return this.contactForm.get('msg');
  }

}
