import { connectDB } from "@/lip/connectDB"

export const GET = async () =>{
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try{
        const services = await servicesCollection.find().toArray();
        return Response.json({services});
    } catch(error) {
        console.log(error);
    }
}