import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './../product-card/product-card.component';
import { ProductsComponent } from './products.component';

import { RouterModule } from '@angular/router';
import { routes } from './products.routes';

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ProductCardComponent],
})
export class ProductsModule {}
