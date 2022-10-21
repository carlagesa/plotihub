import React, { useEffect, useState } from 'react';
import '../App.css'
import PermanentDrawerLeft from './Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ServerRequestDatePicker from './Date';
function createData(date, payment_number, tenant_name, item, unit_name, status, amount_to_pay) {
    return { date, payment_number, tenant_name, item, unit_name, status, amount_to_pay };
}

const rows = [
    createData('7/1/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,),
    createData('7/2/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,),
    createData('7/3/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,),
    createData('7/4/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,),
    createData('7/5/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,),
    createData('7/6/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,)
];


export default function Payment({user}) {
    const {id} = user
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Start of fetching payments data
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/payments")
            .then((response) => response.json())
            .then((data) => {
                setPayment(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);
    // End of fetching payments data



    const [properties, setProperties] = useState();
    const [tenants, setTenants] = useState();


    // Start of fetching property data
    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/properties")
            .then((response) => response.json())
            .then((data) => {
                setProperty(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);
    // End of fetching property data


    // Start of fetching tenant data
    const [tenant, setTenant] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/tenants")
            .then((response) => response.json())
            .then((data) => {
                setTenant(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);
    // End of fetching tenant data


    // Start of Posting payment data
    const [date, setDate] = useState("");
    const [property_name, setProperty_name] = useState("");
    const [payment_number, setPayment_number] = useState("");
    const [tenant_name, setTenant_name] = useState("");
    const [status, setStatus] = useState("");
    const [paid_amount, setPaid_amount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/payments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                date,
                property_name,
                payment_number,
                tenant_name,
                // status: string,
                paid_amount

                //   password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => r.json())
        // .then((user) => onLogin(user));
        console.log("POST MADE")

    }
    // End of Posting payment data
    return (

        <div>
            <div className='payment-left-side'>
                <PermanentDrawerLeft />

                <div className='payment-buttons'>

                    <Button variant="outlined" onClick={handleClickOpen}>
                        Record Payment
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <form onSubmit={handleSubmit} >

                            <DialogTitle id="responsive-dialog-title">
                                {"Payment Form"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <p>Select Property</p>
                                    <select className='property-dropdown' value={property_name} onChange={e => setProperty_name(e.target.value)}>
                                        {property.map((item) => (

                                            <option>{item.property_name}</option>

                                        ))}

                                    </select>

                                    <input
                                        onChange={e => setProperty_name(e.target.value)}
                                        value={property_name}
                                        className='payment-reminders-input'
                                        placeholder='Enter Property name' />


                                    {/* <select className='property-dropdown' onChange={e => setProperty_name(e.target.value)} value={property_name}>
                                        {property.map((item) => (
                                            <option value={item.property_name}>{item.property_name}</option>
                                        ))}
                                    </select> */}


                                    {/* <p>Select Unit</p>
                                <select className='property-dropdown' value={properties} onChange={e => setProperties(e.target.value)}>
                                    {property.map((item) => (

                                        <option>{item.unit_number}</option>

                                    ))}

                                </select>  */}
                                    <p>Select Tenant</p>
                                    {/* 
                                    <select className='property-dropdown' value={tenant_name} onChange={e => setTenant_name(e.target.value)}>
                                        {tenant.map((item) => (

                                            <option>{item.tenant_name}</option>

                                        ))}

                                    </select> */}

                                    <input
                                       onChange={e => setTenant_name(e.target.value)}
                                       value={tenant_name}
                                        className='payment-reminders-input'
                                        placeholder='Enter Tenant Name' />

                                    {/* <select className='property-dropdown' onChange={e => setTenant_name(e.target.value)} value={tenant_name}>
                                        {tenant.map((item) => (
                                            <option value={item.tenant_name}>{item.tenant_name}</option>
                                        ))}
                                    </select> */}

                                    <p>Payment Number</p>

                                    <input
                                        onChange={e => setPayment_number(e.target.value)}
                                        value={payment_number}
                                        className='payment-reminders-input'
                                        placeholder='Enter Paid Amount e.g 10000' />


                                    <p>Paid Amount</p>

                                    <input
                                        onChange={e => setPaid_amount(e.target.value)}
                                        value={paid_amount}
                                        className='payment-reminders-input'
                                        placeholder='Enter Paid Amount e.g 10000' />


                                    <p>Payment Date</p>

                                    <input type="date"
                                        onChange={e => setDate(e.target.value)}
                                        value={date}
                                    />
                                    {/* < ServerRequestDatePicker
                                        onChange={e => setDate(e.target.value)}
                                        value={date}
                                    /> */}
                                    <p>Status</p>
                                    {/* <input className='payment-reminders-input' placeholder='Status' /> */}
                                    <select
                                        className='property-dropdown'
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}>
                                        {/* {payment.map((item) => ( */}

                                        <option >Confirmed</option>
                                        <option >Pending</option>
                                        {/* <option value={paid}>Paid</option> */}


                                        {/* ))} */}
                                    </select>
                                    {/* <p>Description (optional)</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input> */}
                                    {/* <Button variant="outlined">Add PAyment</Button> */}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button type='submit' variant="outlined" onClick={handleClose} autoFocus>Add Paymentr</Button>

                                {/* <Button autoFocus onClick={handleClose}>
                                Disagree
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button> */}
                            </DialogActions>
                        </form>
                    </Dialog>



                    <Button variant="outlined"> Bulk Upload Payment </Button>
                    {/* <Button variant="outlined"> Generate Rent payment</Button> */}
                </div>

                <div className='payment-left-filters'>
                    <input className='payment-left-inputs' placeholder='Type to search'></input>
                    <h5>Date</h5>
                    <input className='payment-left-inputs' placeholder='Start date'></input><br />
                    <input className='payment-left-inputs' placeholder='Start date'></input>
                </div>
            </div>

            <div className='payment-right-side'>
                <div className='payment-summarry-card'>
                    <div className='payment-card-details'>
                        <h4>Summary</h4>
                        <Divider />

                        <p>Total</p>
                        <h3>0.00</h3>
                        <p>(KSH)</p>
                    </div>

                </div>

            </div>

            <div className='payment-table'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Payment ID/Number</TableCell>
                                <TableCell align="right">Tenant</TableCell>
                                <TableCell align="right">Item</TableCell>
                                <TableCell align="right">Property (Unit)</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Amount to pay (kshs)</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payment.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.date}
                                    </TableCell>
                                    <TableCell align="right">{item.payment_number}</TableCell>
                                    <TableCell align="right">{item.tenant_name}</TableCell>
                                    <TableCell align="right">{item.item}</TableCell>
                                    <TableCell align="right">{item.unit_name}</TableCell>
                                    <TableCell align="right">{item.status}</TableCell>
                                    <TableCell align="right">{item.paid_amount}</TableCell>

                                    <Button variant='outlined'>Download</Button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )

}