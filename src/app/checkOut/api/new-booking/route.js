import { connectDB } from "@/lip/connectDB";

export const POST = async(request) => {
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingsCollection = await db.collection('bookings');
    try{
        const resp = await bookingsCollection.insertOne(newBooking);
        return Response.json({message: 'Booked Successful'}, {status: 200})
    } catch(error) {
       return Response.json({message: 'Something is Wrong'}, {status: 400});
    }
}