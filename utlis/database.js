import mongoose from "mongoose"

const connectDB = async () => {
    if (mongoose.connection.readyState) {
        return true
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Mongodb Connected')
        return true
    } catch (error){
        console.log(error)
    }
}

export default connectDB