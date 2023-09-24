import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useRef, useState } from 'react';
import { Alert, Box, CircularProgress } from '@mui/material';
import { INotificacionManager } from '../../Utilities/Rxjs/notificacionManager';
import { notificacionManagerServ } from '../../Utilities/Rxjs/notificacionManagerServ';
const INITIALFORM:INotificacionManager={msg:"",status:"success"}
export default function NotificacionManagerComp(){
    const [openNoti,setopenNoti]=useState<boolean>(false)
    const [isLoading,setisLoading]=useState<boolean>(false)
    const notiRef=useRef<INotificacionManager>(INITIALFORM)
    const subscription$=notificacionManagerServ.getSubject;
    useEffect(() => {
        subscription$.asObservable().subscribe(value=>{
            if(value.isLoading){
                setisLoading(value.loadingSts??false)
                return
            }
            notiRef.current=value;
            setopenNoti(true)
        })
    }, []);
    return(
        <>
        <Box sx={{ position: "absolute", display: isLoading?"flex":"none", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh",zIndex:100}}>
                    <CircularProgress />
        </Box>
        <Snackbar
        open={openNoti}
        autoHideDuration={6000}
        onClose={()=>setopenNoti(false)}>
            <Alert onClose={()=>setopenNoti(false)} severity={notiRef.current.status} sx={{ width: '100%' }}>
              {notiRef.current.msg}
            </Alert>
        </Snackbar>
        </>
    )
}