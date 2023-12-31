import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
logOut() {
  this.tokenService.remove();
  this.accountService.changeStatus(false);
  this.router.navigateByUrl("/login");
}

  currentUser: null | undefined;

  constructor(private router: Router, private accountService: AccountService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
      this.currentUser = this.tokenService.getInfos();

  });

}}
