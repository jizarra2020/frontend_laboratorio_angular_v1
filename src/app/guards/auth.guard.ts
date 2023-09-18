import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
 // return true;
  let _router = inject(Router);
  try {
    let token = localStorage.getItem("token");
    if (token){
      return true;
    }
     localStorage.removeItem("token");
     _router.navigate(["/auth/login"]);
     return false;
  }
  catch(error){
     localStorage.removeItem("token");
     _router.navigate(["/auth/login"]);
     return false;
  }

};
