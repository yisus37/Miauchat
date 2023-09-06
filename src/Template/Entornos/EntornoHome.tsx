import { Grid,Box,Typography,Stack,Paper,Avatar, Icon, IconButton,Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { flexColumn } from "../Styles/estilosGeneral";
import { green } from "@mui/material/colors";
export default function EntornoHome(){
    return (
        <Grid container spacing={2} height={"100vh"} width={"100vw"}>
            <Grid item xs={3}>
                <Box width={"100%"} sx={{...flexColumn,maxHeight:"25vh",background:"red",justifyContent:"space-around"}}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wgZEqm1TeL7wpBZ6uIyJPkPcBGpKYefKhA&usqp=CAU"
                    sx={{ width: 60, height: 60,}}
                    />
                 <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Item >Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                 </Stack>
                </Box>
                <Box width={"100%"}>
                    <Typography textAlign={"center"}>Chats</Typography>
                    <Stack direction="column" spacing={1} flexWrap="wrap">
                        {chats.map(c=><ChatItem item={c} key={c.id}/>)}
                 </Stack>
                </Box>
            </Grid>
            
            <Grid item xs={7}></Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}
const chats:IChatItem[]=[{id:1,nombre:"Jose Hernandez",isMensaje:false},{id:2,nombre:"Diana Pacheco",isMensaje:true}]
interface IChatItem{
    id:number
    nombre:string,
    isMensaje:Boolean
}

const ChatItem=({item}:{item:IChatItem})=>{
    return(
        <ItemChat >
                    <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-around">
                    <Avatar  sx={{ bgcolor: item.isMensaje&&green[500],marginRight:"auto",marginLeft:2}}>{item.nombre[0].toUpperCase()}</Avatar>
                    <Typography noWrap>{item.nombre}</Typography>
                    <IconButton color="primary" aria-label="add to shopping cart">
                    <Icon>more_vert</Icon>
                    </IconButton>
                    </Stack>

        </ItemChat>
    )
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    minWidth:70,
    color: theme.palette.text.secondary,
  }));

  const ItemChat:any = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#66b2ff' : '#66b2ff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    minWidth:70,
    color: theme.palette.text.secondary,
  }));