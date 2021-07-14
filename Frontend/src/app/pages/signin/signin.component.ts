import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

 step: any = 1;

 formsign: FormGroup;

 constructor(private formBuilder: FormBuilder) {
  this.formsign= this.formBuilder.group(
    {
      name:['', [Validators.required, Validators.email]],
      lastname:['', [Validators.required, Validators.email]],
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.email]],
	  password:['',[Validators.required, Validators.minLength(8)]],
      cpassword:['', [Validators.required, Validators.minLength(8)]]
    }
  )

 }

	ngOnInit(): void {
	}

	next(){
		this.step  = this.step + 1;
	}
	anterior(){
		this.step = this.step - 1;
	}
	confirmado(){
		this.step = 4;
	}

	get nameField(){
		return this.formsign.get("name");
	}

	get lastnameField(){
		return this.formsign.get("lastname");
	}
	get usernameField(){
		return this.formsign.get("username");
	}
	get emailField(){
		return this.formsign.get("email");
	}

	get passwordField(){
		return this.formsign.get("password");
	}

	get cpasswordField(){
		return this.formsign.get("cpassword");
	}

	get nameInvalid(){
	return this.formsign.touched && !this.formsign.valid;
	}

	get lastnameInvalid(){
	return this.formsign.touched && !this.formsign.valid;
	}

	get usernameInvalid(){
	return this.formsign.touched && !this.formsign.valid;
	}

	get emailInvalid(){
	return this.formsign.touched && !this.formsign.valid;
	}

	get passwordInvalid(){
	return this.formsign.touched && !this.formsign.valid;
	}

	get cpasswordInvalid()
	{
	return this.formsign.touched && !this.formsign.valid;
	}

onSiguiente(event: Event){
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.formsign.valid)
    {
      console.log(this.formsign.value); //se puede enviar al servidor...
    }
    else
    {
      this.formsign.markAllAsTouched(); //Activa todas las validaciones
    }
  }

}