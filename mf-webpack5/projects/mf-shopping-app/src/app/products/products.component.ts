import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AnimeService } from '../services/anime.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _animeService: AnimeService) {}
  products: IProductCard[] = [];

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      this.products = response;
    });
  }
}
