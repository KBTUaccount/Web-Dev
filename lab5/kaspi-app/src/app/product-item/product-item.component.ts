import { CommonModule } from '@angular/common';
import { Output, Input, EventEmitter, Component, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  likeProduct(){
    this.product.likes++;
  }

  removeProduct(){
    this.remove.emit(this.product);
  }

  shareWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this product: ${encodeURIComponent(link)}`, '_blank');
  }

  shareTelegram(link: string) {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }

}
