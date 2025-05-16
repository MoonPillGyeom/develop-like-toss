import mongoose, { Schema, Document, model } from "mongoose";

export interface WordItem {
  korean: string;
  meaning: string;
}

export interface WordDocument extends Document {
  data: WordItem[];
}

const wordItemSchema = new Schema<WordItem>({
  korean: { type: String, required: true },
  meaning: { type: String, required: true },
});

const wordSchema = new Schema<WordDocument>({
  data: { type: [wordItemSchema], required: true },
});

const Word = mongoose.models.Word || model<WordDocument>("Word", wordSchema);
export default Word;
