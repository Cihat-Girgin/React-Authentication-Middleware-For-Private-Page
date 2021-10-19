import jwt from "jsonwebtoken"
import {secret_key} from "../config"
import {admin_account} from "../config"

export const userCheck = async (username, password) => {
    try {
        if(admin_account.email==username && admin_account.password == password){
         const token =jwt.sign({
             email: username
         }, secret_key, { expiresIn: 60 * 60 });
         
         signIn(token)
        return {status:true,message:"User verified."}
        }
        return {status:false,message:"Wrong password or email."}
        
    }
    catch (e) {
        return  {status:false,message:"Something went wrong!"}
    }
}

const signIn = token => {
    localStorage.setItem("jwtToken", token);
}

export const authMiddleware = () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
        return false
    }
    try {
        const user = jwt.verify(token, secret_key)
        return true
    } catch (e) {
        return false
    }
}

export const logout = () => {
    localStorage.removeItem("jwtToken");
}
