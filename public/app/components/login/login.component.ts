import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector:    'login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.styles.css'],
  providers:  [ LoginService ]
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;

  user = {
    name: '',
    password: ''
  };

   radioButtons = [
    {value: 'admin', display: 'Admin', id: 'Role-0'},
    {value: 'customer', display: 'Customer', id: 'Role-1'},
    {value: 'waiter', display: 'Waiter', id: 'Role-2'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLogin(): any {
    this.loading = true;

    this.loginService.login(this.user.name, this.user.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.error(error);
                this.loading = false;
            });
  }
}
