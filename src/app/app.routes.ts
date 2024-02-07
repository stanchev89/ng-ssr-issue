import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'post',
    loadChildren: () => import('./post/routes')
  }
];
