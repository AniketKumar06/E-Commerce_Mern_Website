import comparePassword from '../../helpers/encryptDecrypt/passwordDecrypt.js';
import hashpassword from '../../helpers/encryptDecrypt/passwordEncrypt.js';
import userModel from '../../models/user/userModel.js';

/**New user register */

export const userRegisterController = async (req, res, next) => {
    
    try {
        const { firstname, lastname, email, phone, address  ,password, conformpassword  } = req.body;
        // test purpose 

        // console.log(firstname," ",lastname," ",email," ",address," ",phone," ",password," ",conformpassword);
        
        /**User Exist  */

        const userExist = await userModel.findOne({
             email:email.toLowerCase()
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
        const encrptPass = await hashpassword(password);

        /**Save  */

        let newUser = new userModel({
            name : `${firstname.toLowerCase()}  ${lastname.toLowerCase()}`,
            email : `${email.toLowerCase()}`,
            phone:phone,
            address : `${address.toLowerCase()}`,
            password: encrptPass
        });

        newUser.save()
        .then((result)=>{
            res.status(200).json({
                success:true,
                msg:"User Register Sucessfull !",
                user: result
            })
        })
        .catch((err)=>{
            res.status(404).json({
                success:false,
                msg:"Error!! While Register Newuser",
                user : []
            })
        })

        
    } catch (error) {
        console.log("Error in User Register Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
        next(error);
    }
};



/** User login */

export const userLoginControllor  = async(req,res,next)=>{
    try{
        const { email , phone , password } = req.body;

        //test purpose 
        /** 
        res.status(200).json({
            success:true,
            email : email,
            password: password
        })
       
        */

        const userExist = await userModel.findOne({
            email : email.toLowerCase(),
        });

        if(!userExist){
            return  res.status(404).json({
                success:false,
                msg:"No User found!!"
            });
        }

        const decryptPass = await comparePassword(password,userExist.password);
        console.log(decryptPass);

    }
    catch (error) {
        console.log("Error in User Register Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
        next(error);
    }

}