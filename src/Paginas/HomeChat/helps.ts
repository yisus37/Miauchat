import { IChatItem,IMensajes } from "../../Interfaces/generales"

export const chats: IChatItem[] = [
    { id: 1, nombre: "Jose Hernandez", isMensaje: false,email:"jose@hot.com",telefono:"238545164",mensajes:[] }, 
    { id: 2, nombre: "Diana Pacheco", isMensaje: true,email:"may@hot.com",telefono:"238545164",mensajes:[] }]
export const mensajes:IMensajes[]=[
    {id:1,idEmisor:2,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:2,idEmisor:2,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},

        {id:3,idEmisor:1,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:4,idEmisor:1,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false}
]

