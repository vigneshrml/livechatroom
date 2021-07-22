import React , { useState , useEffect, useCallback} from 'react';
import '../Style.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import  IconButton  from '@material-ui/core/IconButton';
import { Tooltip, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';
import TopProfile from './TopProfile';
import SettingsIcon from '@material-ui/icons/Settings';
import Rightsidebar from './Rightsidebar';
import CardActions from '@material-ui/core/CardActions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { socket } from "./SocketClient";
import Skeleton from '@material-ui/lab/Skeleton';



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
          fontSize : 15
        },
        iconButton: {
          padding: 7,
          margin : 3
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
       },
        emoji : {
          position : 'relative',
          top : '-420px',
          left : 340,
          width : 'fit-content',
          maxHeight : 0
        },
        small : { 
          height : 33,
          width  : 33,
          marginTop : 0,
        },
}));



export default function Cloud({data}) {

   
    const classes = useStyles();
    const [emj, setEmj] = useState('none');
    const [message, SetMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [isLoaded , setIsLoaded] = useState(true);

    const demochat = [{},{},{},{},{},{},{},{},{},{},{}];
    
    const setRef = useCallback((node)=>{
      if(node){
        node.scrollIntoView({ smooth : true })
      }
    },[])
    
    const formatter = buildFormatter(frenchStrings)

    const handleClickOpenEmj = (event) => {
      emj === 'none' ? setEmj('block') : setEmj('none');
      event.preventDefault();
    };

    const newpost = {
      author : data._id,
      message : message,
    }

    function fetchData(){
      fetch('/cloud').then((res)=>{
        if(res.ok){
          return res.json();
        }
      }).then((res) => {
        setChat(res.chat)
        setIsLoaded(false)
      });
    }

    const handleSubmit = (event) => {
      event.preventDefault();
         socket.emit('cloudcomputingMessage',newpost);
      SetMessage('')
    }

    useEffect(()=>{
      socket.on('cloudcomputingData',()=>{
        fetchData()
      });
    },[])
    
    useEffect(()=>{
      fetchData()
    },[])


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
                        title="&#9749; #-cloud-computing"
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
                            <GridListTile key={data._id} cols={2} className={classes.gridListItem}>
                              {isLoaded ? 
                              demochat.map((data,index)=>{
                                  const lastmsg = demochat.length - 1 === index
                                  return(
                                    <Grid container ref={lastmsg ? setRef : null} wrap="nowrap" spacing={2} key={index} className={classes.allProfile} style={index === 0 ? {marginTop : 10} : index === chat.length - 1 ? { paddingBottom : 0}:{}}>
                                        <Grid item>
                                        <Skeleton animation="wave" variant="circle" width={33} height={33} />
                                        </Grid>
                                        <Grid item xs style={{ paddingLeft : 4 }}>
                                            <Skeleton animation="wave" height={10} width="30%" style={{ marginBottom: 5 }} />
                                            <Skeleton animation="wave" height={10} width="80%" />
                                        </Grid>
                                    </Grid>
                                 )})
                                : chat.map((data,index)=>{
                               const lastmsg = chat.length - 1 === index
                                return(
                                 <Grid container ref={lastmsg ? setRef : null} wrap="nowrap" spacing={2} key={index} className={classes.allProfile} style={index === 0 ? {marginTop : 10} : index === chat.length - 1 ? { paddingBottom : 0}:{}}>
                                      <Grid item>
                                           <Avatar alt="Profile-Image" src={data.author.image} className={classes.small} />
                                      </Grid>
                                      <Grid item xs style={{ paddingLeft : 4 }}>
                                          <Typography style={{fontWeight : 400 , fontSize : 13.5, color : '#FFFDFA'}}>
                                              {data.author.name} <TimeAgo date={data.createdAt} formatter={formatter} style={{ fontSize : 12 , marginLeft : 6 , color : "#72767D"}} />
                                          </Typography>
                                          <Typography style={{fontWeight : 400 , fontSize : 13 , color : '#C1C2C3'}}>
                                              {data.message}
                                          </Typography>
                                      </Grid>
                                  </Grid>
                                )})
                                }
                            </GridListTile>
                        </GridList>
                    </Paper>
                    <form onSubmit={handleSubmit}>
                      <Paper className={classes.chatBottom}> 
                        <Paper className={classes.messageBar}>
                              <InputBase
                                  className={classes.input}
                                  placeholder="Type your message here"
                                  value={message}
                                  onChange={event => SetMessage(event.target.value)}
                                  inputProps={{ 'aria-label': 'search google maps' }}
                                  required
                                />
                                <IconButton className={classes.iconButton} onClick={handleClickOpenEmj}>
                                <EmojiEmotionsIcon/>
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton type="submit" className={classes.iconButton}>
                                <SendIcon/>
                                </IconButton>
                          </Paper>
                        </Paper>
                     </form>
                     <div className={`${classes.emoji} , emoji`}>
                      <Picker 
                      style={{ display : `${emj}`}}
                      emojiSize={20} 
                      perLine={7}   
                      onSelect={emoji => SetMessage(message + emoji.native)}
                      theme='dark' 
                      />
                    </div>
                 </Grid>
                  <Grid item xs={12} lg={3}>
                      <Rightsidebar/>
                  </Grid>
                </Grid>
            </Container>
    )
}
