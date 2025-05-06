"use server";

import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: false,
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};
/* eslint-enable @typescript-eslint/no-explicit-any */
