import { useState,useRef, useEffect } from "react";
import { Grid, Box, Typography, Stack, Paper, Avatar, Icon, IconButton, FormControl, Card ,Input,InputAdornment, Button, MenuItem, Divider,CircularProgress} from "@mui/material";
import { styled } from '@mui/material/styles';
import { green } from "@mui/material/colors";
import { flexColumn, flexRow } from "../../Template/Styles/estilosGeneral";
import { IChatItem,IMensajes,chats,mensajes } from "./helps";
import AvisoSnackbar from "../../Template/Components/AvisoSnackbar";
import MiniMenu from "../../Template/Components/MiniMenu";
export default function PageHomeChat() {
    const [loading, setloading] = useState(false)
    const [chat,setChat]=useState<IChatItem>()
    const [openAviso,setopenAviso]=useState<boolean>(false)
    const [chatsItem,setChatsItem]=useState<IChatItem[]>(chats)
    const chatSelectId=useRef<IChatItem>()
    const avisoEliminarChat=(item:IChatItem)=>{
        chatSelectId.current=item
        setopenAviso(true)
    }
    const eliminarChat=()=>{
        setChatsItem(
            chatsItem.filter(e=>e.id!==chatSelectId.current?.id)
        )
        setChat(undefined)
    }
    const setMensajes=(msjs:IMensajes[])=>{
        if(chat===undefined)return
        if(chat.mensajes.length>0)return
        const lista=[...chatsItem]
        const chatSelect=lista.find(c=>c.id===chat?.id);
        if(chatSelect===undefined)return
        chatSelect.mensajes=msjs
        const index = lista.findIndex((a) => a.id === chat.id);
        lista[index]=chatSelect
        setChat(chatSelect)
        setChatsItem(lista)
    }
    
    return (
        <>
        
            <Grid item xs={3}>
                <Box width={"100%"} sx={{ ...flexColumn, maxHeight: "25vh", justifyContent: "space-around",marginTop:3 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wgZEqm1TeL7wpBZ6uIyJPkPcBGpKYefKhA&usqp=CAU"
                        sx={{ width: 70, height: 70, }}
                    />
                    <Typography variant="subtitle1">Jesus Antonio</Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap">

                        <Item sx={{...flexColumn}}>
                        <MiniMenu iconnombre="travel_explore">
                            <>
                            <MenuItem><Typography variant="overline">General</Typography></MenuItem>
                            <MenuItem><Button>agregar</Button></MenuItem>
                            </>
                        </MiniMenu>
                        <Typography variant="caption">Contexto</Typography>
                        </Item>

                        <Item>
                        <Box sx={{...flexColumn}}>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>setChat(undefined)}>
                            <Icon>home</Icon>
                        </IconButton>
                            <Typography  variant="caption">Home</Typography>
                        </Box>
                        </Item>

                    
                    </Stack>
                    <Divider light />
                </Box>
                <Box width={"100%"} padding={1} marginTop={2}>
                
                    <Typography textAlign={"center"} variant="inherit" marginBottom={1}>Chats</Typography>
                    <Divider light />
                    <Stack direction="column" spacing={1} flexWrap="wrap">
                        {chatsItem.map(c => <ChatItem item={c} key={c.id} selectChat={()=>setChat(c)} eliminar={()=>avisoEliminarChat(c)}/>)}
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={8} height={"100%"} width={"100%"}>
                {chat?<MensajesChat setMensajes={setMensajes} eliminarChat={()=>avisoEliminarChat(chat)} chatitem={chat}/>:
                 <Box sx={{...flexColumn,}}>

                    <Box textAlign={"center"}>
                        <Typography variant="inherit">MiauChat</Typography>
                        <Typography variant="inherit">Bienvenido a tu chat</Typography>
                        <Typography variant="inherit">Descubre mas de nuestro productos</Typography>
                    </Box>

                 </Box>
                }
                
            </Grid>
            <AvisoSnackbar open={openAviso} setOpen={(isOpen)=>setopenAviso(isOpen)} aviso={"Desea eliminar el chat de "+chatSelectId.current?.nombre} aceptar={eliminarChat}/>
        </>
    )
}

const MensajesChat=({chatitem,eliminarChat,setMensajes}:{chatitem:IChatItem,eliminarChat:()=>void,setMensajes:(msjs:IMensajes[])=>void})=>{
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getMensajes()
    }, [])
    const getMensajes=()=>{
       
            setTimeout(() => {
                const items=mensajes.filter(e=>e.idReceptor===7)
                setMensajes(items)
            }, 1000);
        
    }
    
    return(
        
        <Grid container spacing={1} height={"100%"} width={"100%"}>
        <Grid item xs={8} style={{position:"relative"}} >
        <Box sx={{ position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%" }}>
      <CircularProgress />
    </Box>
            <Grid container spacing={1} height={"100%"} width={"100%"}>
                <Grid item xs={12}  sx={{...flexColumn,height:"90%",padding:2}}>
                    <Stack direction="column"  flexWrap="wrap" sx={{width:"98%",height:"95%",flexDirection:"column-reverse"}}>
                        {
                            chatitem.mensajes.length!==0?
                            chatitem.mensajes.map(m=>m.isMio?<ItemMensajeset>{m.mensaje}</ItemMensajeset>:<ItemMensajeget>{m.mensaje}</ItemMensajeget>)
                            :
                            <Box sx={{...flexColumn,}}>

                                <Box textAlign={"center"}>
                                    <Typography variant="inherit">Chatea con</Typography>
                                    <Typography variant="inherit">{chatitem.nombre}</Typography>
                                </Box>
        
                            </Box>

                        }
                        
                    </Stack>
                </Grid>
                <Grid item xs={12} height={"10%"}>

                    <FormControl variant="standard" sx={{width:"100%"}}>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Icon>chat</Icon>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4} >
            <Box width={"100%"} sx={{ ...flexColumn, justifyContent: "space-around" }}>
                {/* <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wgZEqm1TeL7wpBZ6uIyJPkPcBGpKYefKhA&usqp=CAU"
                    sx={{ width: 90, height: 90, }}
                /> */}
                <Avatar sx={{  bgcolor: chatitem.isMensaje && green[500], width: 70, height: 70}}>{chatitem.nombre[0].toUpperCase()}</Avatar>
                <Card sx={{ textAlign: "center", padding: 2 }}>
                    <Typography variant="h6">{chatitem.nombre}</Typography>
                    <Typography>Email: {chatitem.email}</Typography>
                    <Typography>Telefono: {chatitem.telefono}</Typography>
                </Card>
                <Stack direction="row" spacing={2} flexWrap="wrap" marginTop={25}>
                    <Item onClick={eliminarChat}><Icon>delete</Icon><Typography variant="inherit">Eliminar</Typography></Item>
                    <Item ><Icon>archive</Icon><Typography variant="inherit">Archivar</Typography></Item>
                </Stack>
                
            </Box>
        </Grid>
    </Grid>
    )
}


const ChatItem = ({ item,selectChat,eliminar}: { item: IChatItem,selectChat:()=>void,eliminar:()=>void}) => {
    return (
        <Box sx={{...flexRow,justifyContent:"space-between"}}>

        <Button 
        
        component="label" 
        onClick={selectChat}
                variant="contained"
                sx={{...flexRow,fontSize:"0.7rem",justifyContent:"space-around"}}
                startIcon={<Avatar sx={{  bgcolor: item.isMensaje && green[500], width: 30, height: 30,float:"left" }}>{item.nombre[0].toUpperCase()}</Avatar>}
                >
                    {item.nombre}
                </Button>
                <MiniMenu iconnombre="more_vert">
                    <MenuItem onClick={eliminar}><Icon>delete</Icon><Typography variant="overline">Eliminar</Typography></MenuItem>
                </MiniMenu>
        </Box>

    )
}

const Item:any = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight:50,
    maxWidth:50
}));

const ItemMensajeget = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    maxWidth:"70%",
    marginRight:"auto",
    marginTop:10,
    color: theme.palette.text.secondary,
}));
const ItemMensajeset = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    maxWidth:"70%",
    marginLeft:"auto",
    marginTop:10,
    color: theme.palette.text.secondary,
}));



