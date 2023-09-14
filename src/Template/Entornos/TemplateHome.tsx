import { Grid,Box,Typography,Stack,Paper,Avatar, Icon, IconButton,Button } from "@mui/material";
import { flexColumn } from "../Styles/estilosGeneral";
interface Props{
    children:JSX.Element
}
export default function TemplateHome({children}:Props){
    return (
        <Grid container  height={"100vh"} width={"100vw"} >
            {children}
            <Grid item xs={1}>
            <Box  sx={{...flexColumn,justifyContent:"space-between"}}>

                    <IconButton color="primary" aria-label="add to shopping cart">
                    <Icon>settings</Icon>
                    </IconButton>

                    <Box sx={{...flexColumn,height:"20%"}}>
                        <Icon>logout</Icon>
                        <Button color="secondary" >Cerrar Secion</Button>
                    </Box>
            </Box>
            </Grid>
        </Grid>
    );
}


