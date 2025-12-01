import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
/* import { PurchaseProduct } from './PurchaseProduct'; */

@Entity({ name: 'purchase' })
export class Purchase {
  @PrimaryGeneratedColumn()
  purchaseId: number; // --> varchar(36)

  @Column()
  total: number;

  /* @OneToMany(
    () => PurchaseProduct,
    (purchaseProduct) => purchaseProduct.purchase,
  )
  purchaseProducts: PurchaseProduct[]; */
}