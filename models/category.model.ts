import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    title: string;
    specs: string[];
}

const CategorySchema: Schema = new Schema({
    title: String,
    specs: [String]
});

export default mongoose.model<ICategory>('Category', CategorySchema);