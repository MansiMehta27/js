import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {useFormik,Form,Formik} from 'formik';
import * as yup from 'yup';


function Medisin(props) {
    const [open, setOpen] = React.useState(false);
    const [dopen, setDopen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [expiry, setExpiry] = React.useState('');
    const [data, setData] = React.useState([]);
    const [did, setDid] = React.useState();
    const[update,setUpdate]=React.useState(false);
    const[uid,setUid]=React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDopen(false);
    };
    const handleDclickOpen = (params) => {
        setDopen(true);
        setDid(params.id);
    };
    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        if (localData !== null) {
            setData(localData);
        }
    }
    const handleEdit=(params)=>{
        setOpen(true);
        formik.setValues({
            name:params.row.name,
            price:params.row.price,
            quantity:params.row.quantity,
            expiry:params.row.expiry

        });
        setUpdate(true);
        setUid(params.row.id);
    }
    const handleUpdate=(values)=>{
        console.log(values,uid);
        let localData=JSON.parse(localStorage.getItem("medicines"));
        let vData=localData.map((l)=>{
            if(l.id===uid)
            {
                return {id:uid,...values};
            }
            else{
                return l;
            }
            console.log(vData);
        })
        localStorage.setItem("medicines",JSON.stringify(vData));
        setOpen(false);
        setUpdate(false);
        setUid();
        getData();
    }
    const handleDelete = () => {
        // console.log(params);
        let localData1 = JSON.parse(localStorage.getItem("medicines"));
        //     console.log(fData);
        let fData = localData1.filter((l, i) => l.id !== did);
        localStorage.setItem("medicines", JSON.stringify(fData));
        getData();
        setDid();
        handleClose();

    }
    React.useEffect(() => { getData(); }, [])
    let handleSubmit = (values) => {
        console.log(name, price, quantity, expiry);
        let data = {
            id: Math.floor(Math.random() * 1000).values,
            name: name.values,
            price: price.values,
            quantity: quantity.values,
            expiry: expiry.values
        };
        // localStorage.setItem("medicines",JSON.stringify(data));
        handleClose();
        setName('');
        setPrice('');
        setQuantity('');
        setExpiry('');
        getData();
        let localData = JSON.parse(localStorage.getItem("medicines"));
        if (localData === null) {
            localStorage.setItem("medicines", JSON.stringify([data]));
        }
        else {
            localData.push(data);
            localStorage.setItem("medicines", JSON.stringify(localData));
        }


    }
    let schema = yup.object().shape({
        name: yup.string().min(4).required('enter valid name'),
        price: yup.number().positive().integer().required('enter correct price'),
        quantity: yup.number().positive().integer().required('enter no of quantity'),
        expiry: yup.number().positive().integer().min(4).required('enter expiry year'),

    });
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: '',
        },
        validationSchema:schema,
        onSubmit: values => {
            if(update){
                handleUpdate(values);
            }
            else{
                handleSubmit(values);
            }
            // alert(JSON.stringify(values, null, 2));
            handleClose();
           
        },
        
    });

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Medicine Name', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => {
                return (
                    <>
                    <IconButton aria-label="delete" onClick={() => handleDclickOpen(params)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
                      <ModeEditIcon />
                    </IconButton>
                    </>
                  
                )
            }
        }

    ];


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
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
                <DialogTitle>Add Medicine</DialogTitle>
                <Formik values={Formik}>
                    <Form onSubmit={formik.handleSubmit}>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            value={formik.values.name}
                            label="Medicine Name"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                        />
                         {formik.errors.name?<p>{formik.errors.name}</p>:null}
                        <TextField
                            autoFocus
                            margin="dense"
                            name="price"
                            value={formik.values.price}
                            label="Medicine price"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                        />
                         {formik.errors.price?<p>{formik.errors.price}</p>:null}
                        <TextField
                            autoFocus
                            margin="dense"
                            name="quantity"
                            value={formik.values.quantity}
                            label="Quantity"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                        />
                         {formik.errors.quantity?<p>{formik.errors.quantity}</p>:null}
                        <TextField
                            autoFocus
                            margin="dense"
                            name="expiry"
                            value={formik.values.expiry}
                            label="Expiry"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                        />
                         {formik.errors.expiry?<p>{formik.errors.expiry}</p>:null}
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
                    </Form></Formik>
                   

               
            </Dialog>
            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"r u sure want to delete?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>no</Button>
                    <Button onClick={handleDelete} autoFocus>
                        yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Medisin;