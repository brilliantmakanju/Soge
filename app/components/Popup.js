'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';


const Popup = ({ msg }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false)
    };

    const [opens, setOpen] = useState(false)
    function deleteProp() {
        setOpen(true)
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={opens}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                <DialogContentText>
                    {msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup