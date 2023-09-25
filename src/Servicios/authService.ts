import { IUser } from "../Interfaces/generales";
import axios from "./index"
interface ILogon{
    user:IUser,
    token:string,
    status:Boolean,
    msg:string
}
class AuthService{

    logOn(data:{username:string,password:string}){
        return axios.get("4").then(r=>{
            const user=users.find(u=>u.username===data.username)
            if(user===undefined)return {status:false,msg:"Error en credenciales",user:null,token:""}
            return {user,token:"Bearer toke",status:true,msg:"Bienbenido "+user.nombre}
        }).catch(e=>{
            return {status:false,msg:"Error en credenciales",user:null,token:""}
        })
    }
}
export default AuthService
const users:IUser[]=[
    {id:7,nombre:"jesus a",username:"yisus37",rolClave:"adm",chats:[]}
]