import userModel from '../models/userModel.js';
import userRoute from '../routes/userRoute.js'

export const userRegisterController = async (req, res, next) => {
    const { firstname, lastname, email, phone, address, password, conformpassword } = req.body;
    try {
        /** Validation All Entites */
        if (!firstname && !lastname && !email && !phone && !address && !password && !conformpassword) {
            return result.status(403).write({ success: false, message: "All Data are required" })
        }
        console.log(req.body);
    } catch (error) {
        console.log("Error in User Register Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
    }
};

