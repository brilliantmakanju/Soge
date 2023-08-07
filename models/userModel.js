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
    image: {
        type:String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
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










