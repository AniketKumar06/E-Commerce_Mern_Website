import { Schema, model } from 'mongoose';

const userModelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        required: true
    },
    address: {
        type: String,
        maxlength: 256,
        required: true
    },
    role: { type: Number, default: 0 },
    password: { type: String, required: true }


}, { timestamps: true });


export default model("user", userModelSchema);