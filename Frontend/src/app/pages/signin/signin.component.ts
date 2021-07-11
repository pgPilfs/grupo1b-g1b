import { Component, OnInit} from '@angular/core';
import { Validators,  FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})



export class SigninComponent implements OnInit {
    signInForm: FormGroup;

    step: number = 1;

    constructor( private formBuilder: FormBuilder) {
      this.signInForm = this.formBuilder.group(
		{
			name:(['',[Validators.required]]),
			lastname: (['',[Validators.required]]),
			username: (['',[Validators.required]]),
			email: (['',[Validators.required, Validators.email]]),
			password:(['',[Validators.required, Validators.minLength(8)]]),
			passwordRepeat:(['',[Validators.required]]),
      	}
	  )
    }

    ngOnInit(): void { }

    anterior(){
      this.step = this.step - 1;
    }

    confirmado(){ }



	// get nameField(){
	// 	return this.signInForm.get("name");
	// }

	// get lastnameField(){
	// 	return this.signInForm.get("lastname");
	// }

	// get usernameField(){
	// 	return this.signInForm.get("username");
	// }

	// get emailField(){
	// 	return this.signInForm.get("email");
	// }

	// get passwordField(){
	// 	return this.signInForm.get("password");
	// }

	// get passwordRepeatField(){
	// 	return this.signInForm.get("passwordRepeat");
	// }

	// get nameInvalid(){
	// 	return this.nameField.touched && !this.nameField.valid;
	// }

	// get lastnameInvalid(){
	// 	return this.lastnameField.touched && !this.lastnameField.valid;
	// }

	// get usernameInvalid(){
	// 	return this.usernameField.touched && !this.usernameField.valid;
	// }

	// get emailInvalid(){
	// 	return this.emailField.touched && !this.emailField.valid;
	// }

	// get passwordInvalid(){
	// 	return this.passwordField.touched && !this.passwordField.valid;
	// }

	// get passwordRepeatInvalid(){
	// 	return this.passwordRepeatField.touched && !this.passRepeatField.valid;
	// }

	siguiente(){}

}