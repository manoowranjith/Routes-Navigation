import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {
  constructor(private router:Router)
  {

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("Role")=="admin")
    {
      return true
    }
    else if(localStorage.getItem("Role")=="no-access"){
      alert("Not logged in")
      return false
    }
    else{
      alert("You are not in ADMIN role to access")
      // this.router.navigate(['/home'])
      return false
    }
  }
  
}
