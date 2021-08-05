import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required], []);
  mail = new FormControl('', [Validators.required, Validators.email], []);
  issue = new FormControl('', [Validators.required], []);
  msg = new FormControl('', [Validators.required], []);

  constructor() {}

  ngOnInit(): void {}
  get nameField() {
    return this.name;
  }
  get mailField() {
    return this.mail;
  }
  get issueField() {
    return this.issue;
  }
  get msgField() {
    return this.msg;
  }

}
