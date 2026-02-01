import { collection, connectDb } from "@/lib/dbConnect"

export const prodctColl = await connectDb(collection.PRODUCTS)
export const getProducts = async () => {
    const result = await prodctColl.find().toArray()
    return result;
}