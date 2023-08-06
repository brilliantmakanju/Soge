import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    image: String,
    role: {
        type: String,
        default: 'agent'
    },
    phone: {
        type:String,
        required: false
    },
    provider: {
        type: String,
        default: "credentials"
    }
}, { timestamps: true })

const User = models.user || model('user', userSchema)

export default User










