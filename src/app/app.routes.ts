import { Routes } from '@angular/router';
import { PostService } from './post/services/post.service';
import { PostStore } from './post/+store/post.store';

export const APP_ROUTES: Routes = [
  {
    path: 'post',
    providers: [PostService, PostStore],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./post/components/post-list/post-list.component').then(
            (c) => c.PostListComponent
          ),
        pathMatch: 'full',
      },
      {
        path: 'entity',
        loadComponent: () =>
          import('./post/components/post-entity/post-entity.component').then(
            (c) => c.PostEntityComponent
          ),
      },
    ]
  }
];
