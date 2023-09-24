import { catchError, Observable, of } from 'rxjs';
import {  pluck,map } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { notificacionManagerServ } from './notificacionManagerServ';
import { ILogOn } from '../../Context/User/userProvider';
import { chats } from '../../Paginas/HomeChat/helps';

export class HomeManager{
    getChats(id:number){
        const url="";
        return this.api("https://httpbin.org/delay/3","GET",{}).pipe(
            catchError(this.errorAjax),
            pluck("data"),
            map(d=>{
                return chats??[]
            })
        )
    }
    private errorAjax(e: AjaxError){
        if(e.status>450){
            notificacionManagerServ.setSubjectNotificacion({msg:"Error en servidor",status:"error"})
        }else{
            console.log(e.response)
        }
        return of([]);
    }
    private api=(url:string,method:"DELETE"|"GET"|"POST"|"UPDATE",body:any)=>
                    ajax({
                        url,
                        method,
                        headers:{
                            'Content-Type': 'application/json',
                        },
                        body
                    })
}
