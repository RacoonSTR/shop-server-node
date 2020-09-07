import Category, { ICategory } from '../models/category.model';
import { CreateQuery } from 'mongoose';

async function create({
    title,
    specs
}: CreateQuery<ICategory>): Promise<ICategory> {
    return Category
        .create({
            title,
            specs
        })
        .then((data: ICategory) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function getAll(): Promise<ICategory[]> {
    return Category
        .find({})
        .then((data: ICategory[]) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function getById(id: string): Promise<ICategory | null> {
    return Category
        .findById(id)
        .then((data: ICategory | null) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function deleteById(id: string): Promise<ICategory | null> {
    return Category
        .findByIdAndDelete(id)
        .then((data: ICategory | null) => {
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