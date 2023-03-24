import axios from "../axios/axios"

export class AuthServices{
    constructor(){

    }

    async signIn(data){
        const response = await axios.post("/signin",data)
        return response?.data
    }
}