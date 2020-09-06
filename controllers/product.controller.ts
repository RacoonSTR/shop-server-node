
import Product, { IProduct } from '../models/product.model';
import { CreateQuery } from 'mongoose';

async function create({
    categoryId,
    title,
    specs
}: CreateQuery<IProduct>): Promise<IProduct> {
    return Product
        .create({
            categoryId,
            title,
            specs
        })
        .then((data: IProduct) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function getAll(): Promise<IProduct[]> {
    return Product
        .find({})
        .then((data: IProduct[]) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function getById(id: string): Promise<IProduct | null> {
    return Product
        .findById(id)
        .then((data: IProduct | null) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function deleteById(id: string): Promise<IProduct | null> {
    return Product
        .findByIdAndDelete(id)
        .then((data: IProduct | null) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

export default {
    create,
    getAll,
    getById,
    deleteById
};