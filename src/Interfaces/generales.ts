export interface IChatItem {
    id: number
    nombre: string,
    email: string,
    telefono: string,
    isMensaje: Boolean,
    mensajes:IMensajes[],
}
export interface IMensajes{
    id:number,
    idEmisor:number,
    idReceptor:number,
    mensaje:string,
    fecha:string,
    isMio:boolean
}
export interface IUser{
    id:number,
    nombre?:string
    username:string,
    chats:IChatItem[],
    rolClave:string,

}
export interface IUserAuth{
    user?:IUser,
    isLoggedIn: boolean;
}