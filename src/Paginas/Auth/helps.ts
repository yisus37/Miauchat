import { z } from "zod"

export const initialFormAuth={
    username:"",password:""
}
export const zodFormAuth=z.object({
    username:z.string().nonempty({message:"No puede estar vacio"}).min(3,{message:"Minimo de 4 caracteres"}),
    password:z.string().nonempty({message:"No puede estar vacio"}).min(6,{message:"Minimo de 6 caracteres"}),
})