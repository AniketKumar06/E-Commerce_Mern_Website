import comparePassword from "../../helpers/encryptDecrypt/passwordDecrypt.js";
import hashpassword from "../../helpers/encryptDecrypt/passwordEncrypt.js";
import adminModel from "../../models/admin/adminModel.js";


/**Admin Register */

export const adminRegisterController = async(req,res,next)=>{
    const {firstname, lastname, email, phone, password,conformpassword} =req.body;
   try{
    const adminExist = await adminModel.findOne({
        email:email.toLowerCase()
   });

   if(adminExist){
       return res.status(409).json({
           success:true,
           msg : "Admin already Exist with this email"
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

   let newAdmin = new adminModel({
       name : `${firstname.toLowerCase()}  ${lastname.toLowerCase()}`,
       email : `${email.toLowerCase()}`,
       phone:phone,
       password: encrptPass
   });

   newAdmin.save()
   .then((result)=>{
       res.status(200).json({
           success:true,
           msg:"Adminuser Register Sucessfull !",
           user: result
       })
   })
   .catch((err)=>{
       res.status(404).json({
           success:false,
           msg:"Error!! While Register NewAdmin",
           user : []
       })
   })


   }catch(error){
    console.log("Error in User Register Controller", error);
    return res.status(500).json({
        sucess: false,
        msg: 'Internal Server Error'
    })
    next(error);


   }
};

/** Admin login */

export const adminLoginControllor  = async(req,res,next)=>{
    try{
        const { email , password } = req.body;

        //test purpose 
        /** 
        res.status(200).json({
            success:true,
            email : email,
            password: password
        })
       
        */

        const adminExist = await adminModel.findOne({
            email : email.toLowerCase(),
        });

        if(!adminExist){
            return  res.status(404).json({
                success:false,
                msg:"No User found!!"
            });
        }

        const decryptPass = await comparePassword(password,adminExist.password);
        console.log(decryptPass);

        if(decryptPass === false){
            return res.status(409).json({
                success: false,
                msg: "Incorrect Password!"
            })
        }else{
            return res.status(200).json({
                success:true,
                msg: "Login Successfully!!"
            })
        }

    }
    catch (error) {
        console.log("Error in Admin Login Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
        next(error);
    }

}