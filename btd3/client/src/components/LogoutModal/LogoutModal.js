import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useNavigate } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('btd-token'); // Remove the token from sessionStorage
    navigate('/'); // Replace '/' with the appropriate route for your home page
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/home'); // Replace '/home' with the appropriate route for the current page
  };

  return (
    <div className="Logout-container">
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
          <Button onClick={handleLogout}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
