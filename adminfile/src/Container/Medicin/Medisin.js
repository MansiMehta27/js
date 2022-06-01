import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

function Medisin(props) {
    const [open, setOpen] = useState(false);
    const [name,setname] = useState('');
    const [price,setprice] = useState('');
    const [quantity,setquantity] = useState('');
    const [expiry,setexpiry] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handlesubmit =()=>{
            let data={
                id: Math.floor(Math.random() * 1000),
                name,
                price,
                quantity,
                expiry
            };
            localStorage.setItem('medisin', JSON.stringify(data));
            handleClose();
            setname('');
            setprice('');
            setquantity('');
            setexpiry('');

            console.log(data);
    }
    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
        add medisin
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>medisin data</DialogTitle>
          <DialogContent>
           
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name='name'
              label="Medisin Name"
              type="name"
              fullWidth
              variant="standard"
              onChange={(e) => setname (e.target.value)}
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              name='price'
              label="Medisin Price"
              type="price"
              fullWidth
              variant="standard"
              onChange={(e) => setprice (e.target.value)}
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              name='quantity'
              label="Medisin Quantity"
              type="quantity"
              fullWidth
              variant="standard"
              onChange={(e) => setquantity (e.target.value)}
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              name='expiry'
              label="Medisin Expiry"
              type="expiry"
              fullWidth
              variant="standard"
              onChange={(e) => setexpiry (e.target.value)}
            />
            

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlesubmit}>submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default Medisin;