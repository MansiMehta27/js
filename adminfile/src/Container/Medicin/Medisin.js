import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';

function Medisin(props) {
  const [open, setOpen] = useState(false);
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [expiry, setexpiry] = useState('');
  const [data, setdata] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getdata = () => {

    let localdata = JSON.parse(localStorage.getItem('medisin'));
    if (localdata !== null) {
      setdata(localdata);
    }
  }
  const handleDelet =(params)=>{
      let localdata1=JSON.parse(localStorage.getItem("medisin"));
     let appdata = localdata1.filter((l,i)=>l.id!==params.id);
     localStorage.setItem("medisin",JSON.stringify(appdata));

     getdata();
  }
  useEffect(
    () => {
      getdata();
    },
  [])
  const handlesubmit = () => {
    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      quantity,
      expiry
    };

    let localdata = JSON.parse(localStorage.getItem('medisin'));
    if (localdata === null) {
      localStorage.setItem('medisin', JSON.stringify([data]));
    }
    else {
      localdata.push(data)
      localStorage.setItem('medisin', JSON.stringify(localdata));
    }

    handleClose();
    setname('');
    setprice('');
    setquantity('');
    setexpiry('');
    getdata();
    
    // console.log(data);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    { field: 'expiry', headerName: 'Expiry', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <IconButton aria-label="delete" onClick={()=>handleDelet(params)}>
            <DeleteIcon />
          </IconButton>
        )
      }
    },



  ]
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        add medisin
      </Button>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
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
            onChange={(e) => setname(e.target.value)}
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
            onChange={(e) => setprice(e.target.value)}
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
            onChange={(e) => setquantity(e.target.value)}
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
            onChange={(e) => setexpiry(e.target.value)}
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