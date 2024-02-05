import { CanActivateFn } from '@angular/router';
// import { LoginserviceService } from './loginservice.service';
// import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state ) => {
  return true;
};
