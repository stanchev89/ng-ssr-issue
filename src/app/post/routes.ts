import { Routes } from '@angular/router'

const postRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then(
        (c) => c.PostListComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'entity',
    loadComponent: () =>
      import('./components/post-entity/post-entity.component').then(
        (c) => c.PostEntityComponent
      ),
  },
];

export default postRoutes;
