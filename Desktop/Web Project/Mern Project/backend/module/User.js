import mongoose from 'mongoose';


//1.need to build schema

const Schema = mongoose.Schema;

// 2.collect user collection for this
// create field for


const userSchema = new Schema({
    //field name
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
});

//export mongoose.model schema to controller
export default mongoose.model("User", userSchema);

//in mongodb its save as users