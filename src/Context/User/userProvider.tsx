import { createContext, useReducer } from "react";
import { IUser,IUserAuth } from "../../Interfaces/generales";
import { userReducer } from "./userReducer";
import AuthService from "../../Servicios/authService";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { notificacionManagerServ } from "../../Utilities/Rxjs/notificacionManagerServ";


interface Props{
    isLoggedIn: boolean;
    user?: IUser;
    logOn:(data:ILogOn)=>void
}
const INICIAL:IUserAuth={
    isLoggedIn:false,
    user:undefined
  }
export const UserContext = createContext({} as Props );
export function UserProvider({ children }: { children: JSX.Element; }) {
    
    const navigate = useNavigate();
    const authService = new AuthService();
    const [state, dispatch] = useReducer(userReducer, INICIAL);
    const logOn = (data:ILogOn) => {
        notificacionManagerServ.setSubjectLoading(true)
         authService.logOn(data).then(r => {
             setTimeout(() => {
                if(!r.status||!r.user){
                    notificacionManagerServ.setSubjectLoading(false)
                     notificacionManagerServ.setSubjectNotificacion({msg:r.msg,status:"error"})
                     return
                }
                notificacionManagerServ.setSubjectNotificacion({msg:r.msg,status:"success"})
                dispatch({ type: "LOGON", payload: r.user });
                Cookies.set('token', r.token);
                notificacionManagerServ.setSubjectLoading(false)
                setTimeout(() => {
                    navigate("/home/")
                }, 500);
            }, 1000);
        }).catch(e => {
            console.log(e);
            notificacionManagerServ.setSubjectLoading(false)
        });
    };
    return (
        <UserContext.Provider
        value={{...state,logOn}}>
            {children}
        </UserContext.Provider>
    )
}

export interface ILogOn{username: string, password: string}
interface ILogOnResul{msg: string, status: Boolean}
