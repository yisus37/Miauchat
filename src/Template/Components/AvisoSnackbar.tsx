import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export default function AvisoSnackbar({
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



  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={(e)=>{
        aceptar()
        handleClose(e)
      }}>
        Aceptar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        X
      </IconButton>
    </React.Fragment>
  );

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={aviso}
        action={action}
      />
  );
}
