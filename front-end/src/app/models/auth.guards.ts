import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    UrlTree, CanActivate, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    private allowedRoles: string[];
    constructor(
        public authService: RegistrationService,
        public router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let user = JSON.parse(localStorage.getItem('user'));
        if (user.role == 'admin') {
            return true;
        }
        return false;
    }


}