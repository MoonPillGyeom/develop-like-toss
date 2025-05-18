import { WordItem } from "@/app/types/word";
import mongoose, { Schema, Document, model } from "mongoose";

export interface WordDocument extends Document {
  data: WordItem[];
}

const wordItemSchema = new Schema<WordItem>({
  korean: { type: String, required: true },
  meaning: { type: String, required: true },
});

const wordSchema = new Schema(
  {
    data: { type: [wordItemSchema], required: true },
  },
  { timestamps: true }
);

const Word = mongoose.models.Word || model<WordDocument>("Word", wordSchema);
export default Word;
