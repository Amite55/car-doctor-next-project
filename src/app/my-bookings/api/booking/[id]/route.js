import { connectDB } from "@/lip/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection('bookings');
    try{
       const resp = await bookingsCollection.deleteOne({_id: new ObjectId(params.id)});
        return Response.json({message: 'Item Deleted', response: resp})

    } catch(error){
        return Response.json({message: "something in wrong "})
    }
}


export const PATCH = async (request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection('bookings');
    const updateDoc = await request.json();
    try{
       const resp = await bookingsCollection.updateOne(
        {_id: new ObjectId(params.id)},
        {
            $set: {...updateDoc}
        },
        {upsert: true}
    );
    const updatedBooking = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({message: 'Item Deleted', updatedBooking})

    } catch(error){
        return Response.json({message: "something in wrong "})
    }
}


export const GET = async (request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection('bookings');
    try{
       const resp = await bookingsCollection.findOne({_id: new ObjectId(params.id)});
       console.log(resp, 'get resp');
        return Response.json({message: 'booking found', data: resp})

    } catch(error){
        return Response.json({message: "get something in wrong "})
    }
}