import bycrpt from 'bcryptjs';
import hashedpassword from './passwordEncrypt.js';

const comparePassword = async(plainPassword, hashedpassword)=>{
    return bycrpt.compare(plainPassword,hashedpassword);
}

export default comparePassword;