import hashpassword from "../../helpers/encryptDecrypt/passwordEncrypt.js";
import adminModel from "../../models/admin/adminModel.js";

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

   }
};