import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpServicesService } from '../services/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class WebGuard implements CanActivate {
  constructor(
    private httpService: HttpServicesService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('from guards');
    console.log(next.params.email);
    if (this.httpService.verifyStudent(next.params)) {
      return true;
    }
    this.router.navigate(['util']);
    return true;
  }
}
