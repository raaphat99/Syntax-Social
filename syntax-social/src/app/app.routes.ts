import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'posts', loadChildren: () => import('./features/post/post.module').then(m => m.PostModule) },
    { path: '**', redirectTo: '' }
];
