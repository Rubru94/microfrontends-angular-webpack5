import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('mfShoppingApp/Component').then((m) => m.ProductsComponent),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('mfPaymentApp/Component').then((c) => c.PaymentComponent),
  },
];
