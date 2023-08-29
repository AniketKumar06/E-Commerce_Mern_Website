import userModel from '../models/userModel.js';
import hashpassword from '../helpers/userHelper.js';


export const userRegisterController = async (req, res, next) => {
    const { firstname, lastname, email, phone, address  ,password, conformpassword  } = req.body;
  
    try {
        /** Validation All Entites */
        if (!firstname) {
            return res.status(403).write({ success: false, message: "Firstname is required" })
        }
        if (!lastname) {
            return res.status(403).write({ success: false, message: "Lastname is required" })
        }
        if (!email) {
            return res.status(403).write({ success: false, message: "Email is required" })
        }
        if (!phone) {
            return res.status(403).write({ success: false, message: "Phone Number  is required" })
        }

        if (!address) {
            return res.status(403).write({ success: false, message: "Address is required" })
        }
        if (!password) {
            return res.status(403).write({ success: false, message: "Password is required" })
        }
        if (!conformpassword) {
            return res.status(403).write({ success: false, message: "ComformPassword is required" })
        }
    

        // test purpose 

        console.log(firstname," ",lastname," ",email," ",address," ",phone," ",password," ",conformpassword);
        /**User Exist  */

        const userExist = await userModel.findOne({
             email
        });

        if(userExist){
            return res.status(409).json({
                success:true,
                msg : "User all ready Exist with this email"
            });
        }
        

        /**New User Register */
        
        /**Matching Password */

        var isMatchPassword = (password === conformpassword);
        if (!isMatchPassword) {
            return res.status(402).json({
                success: true,
                error: 'password does not match'
            });
        }

        /** Encrpting password */
        // const encrptPass = await hashpassword(password);



    } catch (error) {
        console.log("Error in User Register Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
    }
};

