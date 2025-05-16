import mongoose, { Schema } from "mongoose";

export interface WordSchema {
  korean: string;
  meaning: string;
}

const wordSchema = new Schema<WordSchema>({
  korean: String,
  meaning: String,
});

const Word = mongoose.models.Word || mongoose.model("Word", wordSchema);
export default Word;
