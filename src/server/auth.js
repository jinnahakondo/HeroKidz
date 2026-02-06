"use server"

import { collection, connectDb } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const userColl = await connectDb(collection.USERS)

export const postUser = async (payload) => {
    const { name, email, password } = payload;
    if (!email || !password) return null;

    //check is user already exist
    const user = await userColl.findOne({ email })
    if (user) return null

    // create new user 
    const newUser = {
        provider: 'credentials',
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: 'user',
    }

    const result = await userColl.insertOne(newUser)
    if (result.acknowledged) {
        return {
            ...result,
            insertedId: result.insertedId.toString()
        }
    }

}

//for user login
export const loginUser = async (payload) => {
    const { email, password } = payload;
    if (!email || !password) return null;

    //check is user already exist
    const user = await userColl.findOne({ email })
    if (!user) return null
    const isPassMatched = await bcrypt.compare(password, user?.password)
    if (isPassMatched) {
        return user
    }
    else {
        return null
    }

}