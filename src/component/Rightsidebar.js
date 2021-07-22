import React, { useState , useEffect } from 'react';
import '../Style.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Badge from '@material-ui/core/Badge';
import { socket } from './SocketClient';


const OnlineBadge = withStyles(() => ({
    badge: {
        backgroundColor : '#44b700',
        color : '#44b700',
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


  const OfflineBadge = withStyles(() => ({
    badge: {
        backgroundColor : '#FAA61A',
        color : '#FAA61A',
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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width : 'fit-content',
        backgroundColor: theme.palette.background.paper,
    },
      paper: {
        padding: theme.spacing(2),
        backgroundColor : '#2F3136',
        color: theme.palette.text.secondary
      },
      profileTop : {
          padding : 10,
          backgroundColor : "#292B2F",
          borderTopLeftRadius : 8,
          borderTopRightRadius : 8
      },
      white : {
          color : "white"
      },
      rightSideBar : {
          paddingTop : 12,
          paddingBottom : 15,
          paddingRight : 0,
          paddingLeft : 0,
      },
      team : { 
          marginBottom : 10 ,
          marginLeft : 15 , 
        },
        small: {
            width: 34,
            height: 34
          },
        allProfile : {
            padding : 0,
            paddingTop : 10,
            paddingLeft : 15,
            paddingRight : 7
        },
        length : {
            backgroundColor : "#DA4043",
            color : 'white',
            padding : '1px 7px',
            fontSize : 8,
            borderRadius : 8
        },
        gridList: {
            width: "100%",
            maxHeight: 600,
            padding : 0
          }
}));



export default function Rightsidebar() {

    const classes = useStyles();
    const [data,setData] = useState([]);
    const [user,setUser] = useState([]);




    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () => {
        fetch('/user').then((res)=>res.json()).then((res)=>{
            setData(res)
        })
    }


    useEffect(()=>{
        socket.on('users',(data)=>{
            setUser([data])
        });
    },[])

    const isOnline = (name,obj)=> {
       
        for(var key in obj) {
            if(obj[key] === name){
                    return true
             }
        }
        
    }


    return (
        <Paper className={`${classes.paper} ${classes.rightSideBar}`}>
        <Typography variant="caption" display="block" gutterBottom className={classes.team}>
            KCE TEAM MEMBERS - <span className={classes.length}>{data.length}</span>
        </Typography>
         <Divider style={{marginBottom : 5}}/>


         <GridList cellHeight={19} spacing={1}  style={{paddingTop : 8}}>
            <GridListTile cols={2}>
                 <Typography variant="caption" display="block" gutterBottom style={{fontSize : 10, letterSpacing : 2, paddingLeft : 15}}>
                    ONLINE
                </Typography>
            </GridListTile>
        </GridList>


         <GridList cellHeight={47} spacing={1} className={classes.gridList} id="grid">

           
            
         {
             data.map(data=>

                isOnline(data._id,user[0]) &&
    
                <GridListTile key={data._id} cols={2} className={classes.gridListItem}>
                <CardHeader
                className={classes.allProfile}
                avatar={
                    <OnlineBadge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        variant="dot"
                        >
                        <Avatar alt="Profile-Image" src={data.image} className={classes.small} />
                    </OnlineBadge>
                    
                }
                titleTypographyProps={{variant:'caption'}}
                title={data.name}
                />
                </GridListTile>
    
                )

             }

        <GridList cellHeight={19} spacing={1}  style={{paddingTop : 8  , height : "fit-content"}}>
            <GridListTile cols={2}>
                 <Typography variant="caption" display="block" gutterBottom style={{fontSize : 10, letterSpacing : 2, paddingLeft : 15}}>
                    OFFLINE
                </Typography>
            </GridListTile>
        </GridList>
             {

                data.map(data=>
    
                !isOnline(data._id,user[0]) &&
    
                <GridListTile key={data._id} cols={2} className={classes.gridListItem}>
                <CardHeader
                className={classes.allProfile}
                avatar={
                <OfflineBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    variant="dot"
                    >
                    <Avatar alt="Profile-Image" src={data.image} className={classes.small} />
                </OfflineBadge>
    
                }
                titleTypographyProps={{variant:'caption'}}
                title={data.name}
                />
                </GridListTile>
    
                )
         }

        </GridList>
        </Paper>
    )
}
