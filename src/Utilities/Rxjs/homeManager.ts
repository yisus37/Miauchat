import { catchError, Observable, of ,fromEvent,tap} from 'rxjs';
import {  pluck,map,throttleTime,mergeAll, filter } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { notificacionManagerServ } from './notificacionManagerServ';
import { ILogOn } from '../../Context/User/userProvider';
import { chats, mensajes } from '../../Paginas/HomeChat/helps';

export class HomeManager{

    constructor(){

    }
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
    scrollChat(divChat:HTMLElement,idReceptor:number,idEmisor:number){
        return fromEvent(divChat,"scroll").pipe(
            throttleTime(200),
            map((e:any)=>e.target.scrollTop),
            filter(e=>e===0),
            map(e=>{
                    this.isLoading(true)
                    return this.api("https://httpbin.org/delay/2","GET",{})
            }),
            mergeAll(),
            tap(console.log),
            map(d=>mensajes.filter(m=>m.idEmisor===idEmisor&&m.idReceptor===idReceptor)),
            tap((d)=>{
                this.isLoading(false)
                return d;
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
    private isLoading(is:boolean){
        const loading=document.getElementById("loadingChat");
        if(!loading)return
        loading.style.display=is?"flex":"none"
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
