import { Component } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: []
})
export class RegisterComponent {
  email: string ="";
  password: string | undefined;
  confirmPassword!: string ;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}