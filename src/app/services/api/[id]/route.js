import { connectDB } from "@/lip/connectDB"

export const GET = async (request, {params}) => {
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try{
        const service = await servicesCollection.findOne({_id: params.id});
        return Response.json({service});
    } catch(error) {
        console.log(error);
    }
}