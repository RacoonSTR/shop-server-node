import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  categoryId: string;
  title: string;
  specs: string[];
}

const ProductSchema: Schema = new Schema({
  categoryId: mongoose.Schema.Types.ObjectId,
  title: String,
  specs: [String] // TODO: Add specs
});

export default mongoose.model<IProduct>('Product', ProductSchema);