import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';



export default function AlertDialog() {
  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // }; 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='Logout-container'>    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to Logout?"}
        </DialogTitle> 
        <DialogActions>

         <Link to="/" style={{textDecoration:'none'}}>
          <Button onClick={handleClose}>Yes</Button>
          </Link>

         <Link to="/home" style={{textDecoration:'none'}}>
          <Button onClick={handleClose} autoFocus>No</Button>
          </Link> 
        </DialogActions>
      </Dialog>
    </div>
  );
}