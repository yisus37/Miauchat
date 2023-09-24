import { Subject } from 'rxjs';
export class NotificacionManager{
    private subject$=new Subject<INotificacionManager>()

    get getSubject(){
        return this.subject$;
    }
    setSubjectNotificacion(data:INotificacionManager){
         this.subject$.next({...data,isLoading:false,loadingSts:false});
    }
    setSubjectLoading(data:boolean){
        this.subject$.next({msg:"",status:"success",isLoading:true,loadingSts:data});
   }
}

export interface INotificacionManager{
    msg:string,status:"error"|"warning"|"info"|"success",isLoading?:boolean,loadingSts?:boolean
}