import { Schema, model } from 'mongoose';

const adminModelSchema = new Schema({
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
    role: { type: Number, default: 1 },
    password: { type: String, required: true }


}, { timestamps: true });


export default model("admin", adminModelSchema);