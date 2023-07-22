import { hash, compare } from 'bcryptjs';

const hashpassword = async (password) => {
    try {
        const saltRound = 10;
        const hashedpassword = await hash(password, saltRound);
        return hashedpassword;
    } catch (error) {
        console.log("Error to Encrypt Password", error);
    }
};

const comparepassword = async (password, hashedpassword) => {
    return compare(password, hashedpassword);
};


export default { hashpassword, comparepassword };
