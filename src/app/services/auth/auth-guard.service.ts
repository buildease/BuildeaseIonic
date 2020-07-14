import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    public constructor(private authService: AuthService,
                       private route: ActivatedRoute,
                       private router: Router) {
    }


    public canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('userData')) {
            if (routeSnapshot.routeConfig.path === 'login') {
                this.router.navigate(['/']).then();
            }
            return true;
        } else {
            if (routeSnapshot.routeConfig.path === 'login') {
                return true;
            } else {
                this.router.navigate(['/login']).then();
                return false;
            }
        }
    }

    logout() {
        localStorage.removeItem('userData');
        this.router.navigate(['/login']).then();
    }
}
