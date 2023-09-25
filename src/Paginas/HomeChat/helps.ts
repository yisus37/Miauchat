import { IChatItem,IMensajes } from "../../Interfaces/generales"

export const chats: IChatItem[] = [
    { id: 1, nombre: "Jose Hernandez", isMensaje: false,email:"jose@hot.com",telefono:"238545164",idEmisor:1,mensajes:[
        {id:1,idEmisor:2,idReceptor:7,mensaje:"Jose ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:2,idEmisor:2,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:3,idEmisor:2,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:4,idEmisor:2,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:5,idEmisor:2,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        
    ] }, 
    { id: 2, nombre: "Diana Pacheco", isMensaje: true,email:"may@hot.com",telefono:"238545164",idEmisor:2,mensajes:[
        {id:6,idEmisor:1,idReceptor:7,mensaje:"Diana ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:7,idEmisor:1,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:8,idEmisor:1,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:9,idEmisor:1,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:10,idEmisor:1,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:11,idEmisor:1,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false}
    ] }]

export const mensajes:IMensajes[]=[
    
        {id:12,idEmisor:1,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
        {id:13,idEmisor:1,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:14,idEmisor:2,idReceptor:7,mensaje:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quaerat,dolores impedit obcaecati nisi ad nihil est error consequatur laudantium, cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:false},
        {id:15,idEmisor:2,idReceptor:7,mensaje:"animi quaerat,dolores impedit obcaecati nisi ad nihil est error  , cum fuga quidem nostrum minus! Magni facilis blanditiis ad.",
        fecha:"14/14/14",isMio:true},
]

