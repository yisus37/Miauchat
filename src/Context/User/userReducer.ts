import { Switch } from "@mui/material";
import { IUser,IUserAuth } from "../../Interfaces/generales";

type UserActionType = 
   | { type: 'LOGON', payload: IUser } 
   | { type: 'LOGOUT' } 

   export const  userReducer = ( state: IUserAuth, action: UserActionType ): IUserAuth => {

        switch (action.type) {
            case "LOGON":
                return {
                    ...state,
                    isLoggedIn: true,
                    user: action.payload
                }
                break;
            case "LOGOUT":
                return {
                    ...state,
                    isLoggedIn: false,
                    user: undefined,
                }
                break;
        
            default:
                return state;
        }
   }