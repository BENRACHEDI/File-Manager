  import { Component } from '@angular/core';

  import { Router } from '@angular/router';

  import { User } from '../../_models';
  import { UserService, AuthenticationService } from '../../_services';

  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  })
  export class NavbarComponent {

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
    ) {
      //this.currentUser = this.authenticationService.currentUserValue;
    }


    logout() {
      alert('je suis en train de deconnecter');
      this.authenticationService.logout();
      this.router.navigate(['/']);
    }

  }
