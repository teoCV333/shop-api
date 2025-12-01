import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'purchase_product' })
export class PurchaseProduct {
  @PrimaryGeneratedColumn()
  purchaseProductsId: number; // --> varchar(36)

  @Column()
  quantity: number;

  @Column()
  productId: number;

  @Column()
  purchaseId: number;
}