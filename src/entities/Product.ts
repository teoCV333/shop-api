import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
/* import { PurchaseProduct } from './PurchaseProduct';
 */
@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  productId: number; // --> varchar(36) en MySQL

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  urlImg: string;

  @Column({ default: 0})
  reviews: number;

  @Column({
    nullable: false
  })
  price: number;

  @Column({
    nullable: true,
  })
  previousPrice: number;

 /*  @OneToMany(
    () => PurchaseProduct,
    (purchaseProduct) => purchaseProduct.product,
  )
  purchaseProducts: PurchaseProduct[]; */
}