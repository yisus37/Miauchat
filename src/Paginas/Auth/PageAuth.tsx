import { Grid,Card, CardContent, Button,Typography,CardActions, TextField,InputAdornment, Icon, IconButton } from "@mui/material";
import TemplateAuth from "../../Template/Entornos/TemplateAuth";
import { useContext, useState } from "react";
import { initialFormAuth,zodFormAuth} from "./helps";
import { UserContext } from "../../Context/User/userProvider";
import { useForm } from "../../Utilities/Hooks/useForm";
import { notificacionManagerServ } from "../../Utilities/Rxjs/notificacionManagerServ";

export default function PageAuth(){
    const { formValue, handleInputChange, isCompletedZod, getMensageError, falta,setFalta} = useForm(initialFormAuth)
    const {logOn} = useContext(UserContext);
    const aceptar=async()=>{
        const isComplete=await isCompletedZod(zodFormAuth)
        if(!isComplete)return notificacionManagerServ.setSubjectNotificacion({msg:"Revise sus datos",status:"warning"})
        await logOn(formValue)
    }

    return(
        <TemplateAuth>

                <Card sx={{ maxWidth: 345,padding:2 }}>
                    
                    <CardContent >
                        <Typography gutterBottom variant="body1" component="div"  sx={{background:"rgb(0, 95, 121)",textAlign:"center",fontWeight:"bold",color:"whitesmoke",padding:2,borderRadius:20,marginBottom:3}}>
                            Inicia Secion
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                        <TextField
                        label="Usuario"
                        name="username"
                        value={formValue.username}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{marginBottom:3}}
                        error={falta.includes("username")}
                        helperText={falta.includes("username") ? getMensageError("username") : ""}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Icon>account_circle</Icon>
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                            />
                        <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={formValue.password}
                        onChange={handleInputChange}
                        fullWidth
                        error={falta.includes("password")}
                        helperText={falta.includes("password") ? getMensageError("password") : ""}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Icon>password</Icon>
                            </InputAdornment>
                        ),
                        endAdornment:(
                            <IconButton color="primary" aria-label="add to shopping cart">
                            <Icon>visibility</Icon>
                            </IconButton>
                        )
                        }}
                        variant="standard"
                            />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={aceptar}>Aceptar</Button>
                    </CardActions>
                </Card>
        </TemplateAuth>
                

    )
}