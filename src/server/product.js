import { ObjectId } from "mongodb";
import { collection, connectDb } from "@/lib/dbConnect"

// collection 
export const productColl = await connectDb(collection.PRODUCTS)

// get all products 
export const getProducts = async () => {
    const result = await productColl.find().toArray()
    return result || [];
}

//get single product
export const getSingleProduct = async (id) => {
    if (!ObjectId.isValid(id)) return null
    const result = await productColl.findOne({ _id: new ObjectId(id) })
    return { ...result, _id: result._id.toString() }
}