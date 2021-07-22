import React , { useState } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import  IconButton  from '@material-ui/core/IconButton';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';



const StyledBadge = withStyles(() => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px #292B2F`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '""',
      },
    }
  }))(Badge);


  
const useStyles = makeStyles((theme)=> ({
      profileTop : {
          padding : 10,
          backgroundColor : "#292B2F",
          borderTopLeftRadius : 6,
          borderTopRightRadius : 6
      }
}));



export default function TopProfile({userdata}) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  


 return (
        <>
        <CardHeader
            className={classes.profileTop}
            avatar={
                <StyledBadge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                variant="dot"
                >
                <Avatar alt="Profile-Image" src={userdata.image} />
            </StyledBadge>
            }
            action={
                <Tooltip title="Logout">
                <IconButton aria-label="settings" color="default" onClick={handleClickOpen}>
                    <ExitToAppIcon/>
                </IconButton>
                </Tooltip>
                }
            titleTypographyProps={{variant:'caption' }}
            subheaderTypographyProps={{variant:'caption' }}
            title={userdata.name}
            subheader='Welcome To KceSpot.in'
         />     
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classes.white}>
                Are you sure you want to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="light" size="normal" autoFocus >
                    Cancel
                </Button>
                <Button onClick={()=> window.open('http://localhost:3001/logout',"_self")} color="primary" size="normal" variant='contained'>
                    Logout
                </Button>
            </DialogActions>
        </Dialog>
        </>            
     )
}
                    