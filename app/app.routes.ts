import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./dashboard/home/home.component').then(m => m.HomeComponent),
    
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/product-page/product-page.component').then(m => m.ProductPageComponent),
    
  },

  {
    path: 'prodaddbatch',
    loadComponent: () => import('./productbatch/productbatch.component').then(m => m.ProductBatchComponent)
  },

  {
    path: 'prodadd',
    loadComponent: () => import('./prodadd/prodadd.component').then(m => m.ProdaddComponent),
  },

  {
    path: 'catadd',
    loadComponent: () => import('./catadd/catadd.component').then(m => m.CataddComponent)
  },

  {
    path: 'ordadd',
    loadComponent: () => import('./ordadd/ordadd.component').then(m => m.OrdaddComponent)
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },



  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


