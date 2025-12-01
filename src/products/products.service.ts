import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async getAll(): Promise<Product[]> {
        const products = await this.productRepository.find();
        if (!products || products.length == 0) {
           return []; 
        }
        return products;
    }
    
    async getById(id: number): Promise<Product> {
        const product = await this.productRepository.findOneBy({productId: id});
        if (!product) {
            throw new NotFoundException({message: "Not Found"});
        }
        return product;
    }

}
