import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  signIn() {

  }

}
