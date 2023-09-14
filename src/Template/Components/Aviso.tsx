import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Aviso({
    open,
    aceptar,
    setOpen,
    aviso
}:{
    open:boolean,
    aceptar:()=>void,
    setOpen:(isOpen:boolean)=>void,
    aviso:string
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Aviso"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {aviso}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={()=>{
            handleClose()
            aceptar()
            }} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
  );
}