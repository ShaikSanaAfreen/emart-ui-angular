import { Component, OnInit } from '@angular/core';
import { EMartService } from '../../e-mart.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  buyer: boolean;
  sign: string;
  seller: boolean;
  errorMessage: string;
  constructor(protected emartService: EMartService, protected router: Router) { }

  ngOnInit(): void {
  }
  validate() {
    if (this.sign == 'buyer') {
      let results = this.emartService.validBuyer(this.username, this.password)
      if (results != null) {
        this.router.navigate(['item-list']);
      }
    }
    else {
      this.errorMessage = 'invalid'
    }
    if (this.sign == 'seller') {
      let results = this.emartService.validSeller(this.username, this.password)
      if (results != null) {
        this.router.navigate(['item-list']);
      }
    }
    else {
      this.errorMessage = 'invalid'
    }
  }
}

