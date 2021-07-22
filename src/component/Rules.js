import React , { useEffect} from 'react';
import '../Style.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import  IconButton  from '@material-ui/core/IconButton';
import { Button, Tooltip, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';
import TopProfile from './TopProfile';
import SettingsIcon from '@material-ui/icons/Settings';
import Rightsidebar from './Rightsidebar';
import CardActions from '@material-ui/core/CardActions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import 'emoji-mart/css/emoji-mart.css';
import { socket } from "./SocketClient";



const useStyles = makeStyles((theme)=> ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          width : 'fit-content',
        },
        paper: {
          backgroundColor : '#2F3136',
          color: theme.palette.text.secondary,
        },
        container : {
            marginTop : 20
        },
        sideBar : {
            borderTopRightRadius : 0,
            borderTopLeftRadius : 0,
            paddingRight : 10,
            paddingLeft : 10,
            paddingTop : 5,
            paddingButton : 5
        },
        white : {
            color : "white"
        },
        mainBar : {
          padding : 0,
          paddingBottom : 5,
          borderRadius : 0
        },
        chatTop : {
            padding : 0,
            paddingLeft : 17,
            paddingRight : 17,
            backgroundColor : "#292B2F",
            borderTopLeftRadius : 6,
            borderTopRightRadius : 6
        },
        chatBottom : {
          display: 'flex',
          borderTopLeftRadius : 0,
          borderTopRightRadius : 0,
          backgroundColor : '#292B2F',
        },
        icon : {
          marginTop: 7,
          verticalAlign : 'center',
        },
        gridList: {
          width: "100%",
          height: 518,
          padding : 0,
          alignItems : 'flex-end'
        },
        input: {
          marginLeft: theme.spacing(2),
          flex: 1,
          fontSize : 15,
        },
        iconButton: {
          padding: "5px 10px",
          margin : 7
        },
        divider: {
          height: 28,
          margin: 4,
        },
        messageBar : {
          display: 'flex',
          alignItems: 'center',
          width : '100%',
          margin : 8,
          backgroundColor: '#40444B'
        },
        allProfile : {
          alignItems : 'flex-start',
          padding : 0,
          fontWeight : 'bold',
          paddingTop : 0,
          paddingLeft : 10,
          paddingRight : 10,
          paddingBottom : 6,
          marginTop : 20
       },
        small : { 
          height : 33,
          width  : 33,
          marginTop : 0,
        },
        lucifer :{ 
          background : '#5865F2' , 
          color : 'white',
          padding : '2px 5px',
          fontSize : 8,
          fontWeight : 500,
          borderRadius  : 3
        },
        rules : {
          backgroundColor : '#36393F',
          marginTop : 10,
          marginBottom : 5,
          borderLeft : '4px solid #2ECC71',
          borderRadius : 5,
          padding : 10,
          width : '80%'
        }
}));



export default function Rules({data}) {

   
    const classes = useStyles();

    useEffect(()=>{
      socket.emit('login',{userId : data._id}); 
    },[data._id])

    return (
            <Container maxWidth="lg">
                <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={4} lg={3}>
                    <TopProfile userdata={data}/>
                    <Paper className={`${classes.paper} ${classes.sideBar}`}>
                      <Sidebar/>
                    </Paper>
                </Grid>
                 <Grid item xs={12} md={8} lg={6}>
                    <CardHeader
                     className={classes.chatTop}
                        titleTypographyProps={{ variant : "subtitle1"}}
                        title="&#128216; #-rules"
                        action={
                          <CardActions disableSpacing className={classes.icon}>
                          <Tooltip title="This option will appear soon!">
                          <IconButton aria-label="settings"  size="small" style={{verticalAlign : 'center'}}>
                          <SettingsIcon/>
                          </IconButton>
                          </Tooltip>
                          </CardActions>
                        }
                    />
                    <Paper className={`${classes.paper} ${classes.mainBar}`}>
                         <GridList cellHeight='auto' spacing={1} className={classes.gridList} id="grid">
                           <GridListTile key="bot" cols={2} className={classes.gridListItem}>
                           <Grid container wrap="nowrap" spacing={2} className={classes.allProfile}>
                             <Grid item>
                                  <Avatar alt="Profile-Image" src="./img/bot.svg" className={classes.small} />
                             </Grid>
                             <Grid item xs style={{ paddingLeft : 4 }}>
                                 <Typography style={{fontWeight : 400 , fontSize : 13.5, color : '#FFFDFA'}}>
                                   Decoder <span className={classes.lucifer}>KCESPOT BOT</span> 
                                 </Typography>
                                 <div className={classes.rules}>
                                   <Typography style={{fontWeight : 500 , fontSize : 13.5 , color : '#FFFDFA' , marginBottom : 13}}>
                                       General Student Rules
                                   </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                         Here you have the rules of the community, always keep in mind that they apply in conversations by text channels.
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3, color : '#DCDDDE' , marginBottom : 10}}>
                                         01. Use original name on this server, don't use anything else other than the combination of your First & Last Name.
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                         02. Be respectful to everyone an don't make anyone feel uncomfortable
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                         03. Try to chat as much as in English as possible. 
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                         04. No Piracy related conversation of/or any other cause in the server.
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                          05. Do not discuss any political, racial, religious or other sensitive issues in the server.
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                          06. Do not send unwanted messages (spam) such as advertising or flood (flood the channel with messages full of junk/no content).
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                          07. Do not share sensitive personal information such as age, phone number, email address, etc.
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                          08. Do not impersonate another person or use names, profile images or nicknames that may be considered inappropriate. Identity theft is not a joke
                                     </Typography>
                                     <Typography style={{fontWeight : 400 , fontSize : 13.3 , color : '#DCDDDE' , marginBottom : 10}}>
                                          Conclusion :-
                                     </Typography>
                                 </div>
                                       </Grid>
                                   </Grid>
                             </GridListTile>
                         </GridList>
                        </Paper>                      
                      <Paper className={classes.chatBottom}> 
                        <Paper className={classes.messageBar}>
                              <InputBase
                                  className={classes.input}
                                  placeholder="You can't able to type in #-rules book page"
                                  inputProps={{ 'aria-label': 'search google maps' }}
                                  required
                                  disabled = {true}
                                />
                                <Divider className={classes.divider} orientation="vertical" />
                                  <Button size="small" disabled={true} color='primary' variant="contained" className={classes.iconButton}>Rules Book</Button>
                          </Paper>
                        </Paper>
                 </Grid>
                  <Grid item xs={12} lg={3}>
                      <Rightsidebar/>
                  </Grid>
                </Grid>
            </Container>
    )
}
