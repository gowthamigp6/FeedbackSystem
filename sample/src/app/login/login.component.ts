import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule,ReactiveFormsModule, FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  invalidLogin = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private formModule : FormsModule,
    private router: Router
  ) { }

  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit() {
   
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if(this.loginForm.controls.userName.value == 'hackfse' && 
        this.loginForm.controls.password.value == 'pass') {
          this.router.navigate(['navigation']);
        }else{
          this.invalidLogin = true;
        }
  }

 
}
