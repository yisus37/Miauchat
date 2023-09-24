import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Icon, IconButton, Typography } from "@mui/material";
import { flexColumn } from "../Styles/estilosGeneral";
import { useState } from "react";

export default function TemplateAuth({children}:{children:JSX.Element}){
    const [isCommers,setisCommers]=useState(false)

    return(
        <Grid container sx={{width:"100vw",height:"100vh"}}>

        <Grid item xs={isCommers?9:11} sx={{...flexColumn,justifyContent:"normal",background:"linear-gradient(to right,rgb(0, 95, 121) 0%,rgb(0, 95, 121) 65%,white 65%, white 0%)"}}>
            <Typography sx={{float:"left",marginBottom:"15%",fontWeight:"bold",color:"whitesmoke",width:"80%",padding:2}} variant="h3">MiauChat</Typography>
            {children}
        </Grid>
        
        <Grid item xs={isCommers?3:1} >
            <Card sx={{...flexColumn}} onMouseOver={()=>setisCommers(true)} onMouseOut={()=>setisCommers(false)}>
                {
                    isCommers?
                    <Box sx={{...flexColumn,position:"relative"}}>
                        <Box textAlign={"center"} sx={{marginTop:2}}>
                        <Typography variant="body1" sx={{color:"gray"}}>Descubre Nuestros Servicios</Typography>
                        <Icon sx={{color:"gray"}}>pets</Icon>
                        </Box>

                        <Box sx={{...flexColumn}}>
                                    <Card sx={{width:"80%" }}>
                                        <CardActionArea sx={{...flexColumn,marginTop:2}}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" style={{width:80,height:88}}/>
                                            <CardContent>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color:"gray"}}>
                                                    Integra Whatsap a tus servicios
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <Card sx={{width:"80%" }}>
                                        <CardActionArea sx={{...flexColumn,marginTop:2}}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" style={{width:80,height:88}}/>
                                            <CardContent>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color:"gray"}}>
                                                    Integra Whatsap a tus servicios
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    
                        </Box>
                    </Box>
                    :
                    
                    <Icon sx={{color:"gray"}}>pets</Icon>
                    
                }
            </Card>
        </Grid>

    </Grid>
    )
}