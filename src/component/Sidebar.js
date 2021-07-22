import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(()=>({
    list : {
        paddingTop : 2,
        paddingBottom : 2, 
        borderRadius : 4
    },
    listItem : {
      minWidth : 10
    },
    listText : {
        paddingLeft : 10
    }
}));

export default function Sidebar() {

    const classes = useStyles();

    const [data, setData] = React.useState('');
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleForm = (e) => {
        e.preventDefault()
        console.log(data)
    }

    

    return (  
            <>
             <List component="nav" aria-label="main mailbox folders" dense={true}>
                        <Typography variant="caption" display="block" gutterBottom style={{marginLeft : 5}}>
                        DISCUSSION ROOMS
                        </Typography>
                        {/* <ListItem button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128226;
                        </ListItemIcon>
                        <ListItemText primary="#-news - not available" className={classes.listText} />
                        </ListItem> */}
                        <ListItem to="/rules" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128216;
                        </ListItemIcon>
                        <ListItemText primary="#-rules" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/dashboard" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128218;
                        </ListItemIcon>
                        <ListItemText primary="#-general" className={classes.listText} />
                        </ListItem>
                        <Divider style={{ marginTop : 8 , marginBottom : 8 }}/>
                        <ListItem to="/freelancing" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128184;
                        </ListItemIcon>
                        <ListItemText primary="#-freelancing" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/web-development" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#127760;
                        </ListItemIcon>
                        <ListItemText primary="#-web-development" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/programming" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128170;
                        </ListItemIcon>
                        <ListItemText primary="#-general-programming" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/data-structure" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128128;
                        </ListItemIcon>
                        <ListItemText primary="#-data-structure" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/data-science" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128202;
                        </ListItemIcon>
                        <ListItemText primary="#-data-science" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/android-development" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128244;
                        </ListItemIcon>
                        <ListItemText primary="#-android-development" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/cloud-computing" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#9749;
                        </ListItemIcon>
                        <ListItemText primary="#-cloud-computing" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/machine-learning" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#127920;
                        </ListItemIcon>
                        <ListItemText primary="#-machine-learning" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/cyber-security" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#128373;
                        </ListItemIcon>
                        <ListItemText primary="#-cyber-security" className={classes.listText} />
                        </ListItem>
                        <ListItem to="/ui-ux-design" component={Link} button className={classes.list}>
                        <ListItemIcon className={classes.listItem}>
                        &#127912;
                        </ListItemIcon>
                        <ListItemText primary="#-ui-ux-design" className={classes.listText} />
                        </ListItem>
                        <Divider style={{ marginTop : 8 }}/>
                        <div className={classes.report} style={{marginLeft : 5 , marginTop : 5}}>
                           <Typography variant="caption">Report a bug to Contribute.</Typography><br></br>
                           <Button variant="contained" disabled={true} color="primary" size="small" style={{marginTop : 8}}>Report Bug!</Button>
                           {/* <Button variant="contained" color="primary" size="small" style={{marginTop : 8}} onClick={()=>{window.open("http://blog.kcespot.in/")}}>BLOG PAGE</Button>  */}
                        </div>
                        <Typography variant="caption" display="block" gutterBottom style={{marginLeft : 5, marginTop : 10}}>
                         <Link to="/privacy">Privary Policy & Terms</Link>
                        </Typography>
                    </List>
                        <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                         >
                        <form onSubmit={handleForm}>
                        <DialogTitle id="alert-dialog-title" >
                                <Typography>
                                    Before reporting please ensure that bug is active now.
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                            <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Write the Bug details"
                            multiline
                            rows={5}
                            variant="outlined"
                            onChange = {(e)=> setData(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} style={{color : "light"}} size="medium">
                                    CANCEL
                            </Button>
                            <Button type="submit" color="primary" variant='contained' autoFocus>
                                SUBMIT
                            </Button>
                            </DialogActions>
                        </form>
                         </Dialog>
            </>
            
                    
    )
}
