"use server";

import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const register = async (values: any) => {
  const { email, password, name } = values;
  console.log("password : ", password);
  console.log("password Type : ", typeof password);
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

    // 저장된 사용자 정보 출력
    console.log("Saved User:", savedUser); // 저장된 사용자 정보 콘솔에 출력

    return {
      success: true,
      user: savedUser, // 저장된 사용자 정보 반환
    };
  } catch (e) {
    console.log(e);
  }
};
/* eslint-enable @typescript-eslint/no-explicit-any */
