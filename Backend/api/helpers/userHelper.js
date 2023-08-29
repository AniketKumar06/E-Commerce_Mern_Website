import bycrpt from 'bcryptjs';


const hashpassword = async (password) => {
    try {
        const saltRound = 10;
        const hashedpassword = await bycrpt.hash(password, saltRound);
        return hashedpassword;
    } catch (error) {
        console.log("Error to Encrypt Password", error);
    }
};

const comparepassword = async (password, hashedpassword) => {
    return bycrpt.compare(password, hashedpassword);
};


export default {hashpassword,comparepassword};
