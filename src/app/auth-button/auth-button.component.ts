import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './auth-button.component.html',
  styleUrls: ['../app.component.css', '../css/magnific-popup.min.css', '../css/dataTables.bootstrap4.min.css', '../css/styles.css', '../css/custom.css'],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
