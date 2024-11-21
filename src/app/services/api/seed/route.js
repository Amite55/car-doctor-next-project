import { connectDB } from "@/lip/connectDB"
import { services } from "@/lip/services";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try{
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return Response.json({message: 'Seeded successfully'});
    } catch(error){
        console.log(error);
    }
}