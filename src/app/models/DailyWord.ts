import { WordItem } from "@/app/types/word";
import mongoose, { Schema, model, Document } from "mongoose";

export interface DailyWordDocument extends Document {
  data: WordItem[];
  createdAt: Date;
}

const wordItemSchema = new Schema<WordItem>({
  korean: { type: String, required: true },
  meaning: { type: String, required: true },
});

const dailyWordSchema = new Schema({
  data: { type: [wordItemSchema], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const DailyWord =
  mongoose.models.DailyWord ||
  model<DailyWordDocument>("DailyWord", dailyWordSchema);

export default DailyWord;
