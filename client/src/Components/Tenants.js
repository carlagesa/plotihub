import * as React from 'react';
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

function createData(tenant_name, property_name, unit_name, phone_number, deposit, balance, account_number) {
    return { tenant_name, property_name, unit_name, phone_number, deposit, balance, account_number };
}

const rows = [
    createData('Carl Agesa', 'Magiq Square', 'block D', '07212531733', 5000, 5000, 212123),
    createData('David Park', 'Magiq Square', 'block D', '07212531733', 5000, 5000, 212123)

];


export default function Tenants() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='invoice-left-side'>
                <PermanentDrawerLeft />
                <div className='payment-buttons'>

                    <Button variant="outlined" onClick={handleClickOpen}>Add Tenant</Button>
                    <Button variant="outlined"> Send Message </Button>
                    <Button variant="outlined"> Send Reminders</Button>
                    <Button variant="outlined"> Shift Tenants</Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Tenant Form"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <p>Select Tenant</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                                <p>Paid Amount</p>  <input className='payment-reminders-input' placeholder='Enter Paid Amount e.g 10000'></input>
                                <p>Select Tenant</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                                <p>Payment Type (optional)</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                                <p>Description (optional)</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                                {/* <Button variant="outlined">Add PAyment</Button> */}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose} autoFocus>Add Payment</Button>
                        </DialogActions>

                    </Dialog>
                </div>
                <div className='invoice-left-filters'>
                    <input className='invoice-left-inputs' placeholder='Type to search'></input>
                    <h5>Date</h5>
                    <input className='invoice-left-inputs' placeholder='Start date'></input><br />
                    <input className='invoice-left-inputs' placeholder='Start date'></input>
                </div>
            </div>

            <div className='invoice-right-side'>
                <div className='invoice-summarry-card'>
                    <div className='invoice-card-details'>
                        <h4>Summary</h4>
                        <Divider />

                        <p>Total Tenants</p>
                        <h3>0</h3>
                    </div>

                </div>

            </div>

            <div className='invoice-table'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Tenant Name</TableCell>
                                <TableCell align="right">Property Name</TableCell>
                                <TableCell align="right">Unit ID/Name</TableCell>
                                <TableCell align="right">Phone Number</TableCell>
                                <TableCell align="right">Deposit</TableCell>
                                <TableCell align="right">Balance</TableCell>
                                <TableCell align="right">Account Number</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.tenant_name}</TableCell>
                                    <TableCell align="right">{row.property_name}</TableCell>
                                    <TableCell align="right">{row.unit_name}</TableCell>
                                    <TableCell align="right">{row.phone_number}</TableCell>
                                    <TableCell align="right">{row.deposit}</TableCell>
                                    <TableCell align="right">{row.balance}</TableCell>
                                    <TableCell align="right">{row.account_number}</TableCell>
                                    <TableCell align="right"><Button variant='outlined'>Download</Button></TableCell>

                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )

}