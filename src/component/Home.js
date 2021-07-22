import React  from 'react'
import "../App.css";
import { Link  } from "react-router-dom"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
    },
    login : {
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        borderRadius : 10,
      backgroundColor: '#151A21',
      padding: theme.spacing(2),
      paddingTop : 10,
      paddingBottom : 35,
      textAlign: 'center',
      color: theme.palette.text.white,
    },
    signin : {
        width : "50%"
    }
  }));



function Home() {

    const classes = useStyles();  
    // let history = useHistory();
    document.title = "Welcome to KceSpot.in";


    return (
           
            <Container>
                <Grid container className={classes.login}>
                    <Grid item xs={11} md={4}>
                       <Paper className={classes.paper}>
                           <h3>Welcome To KCEspot.in</h3>
                           <p>
                           <small>By logging in you accept our <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Service.</Link></small>
                           </p>
                           <a href='http://localhost:3001/google'>
                               <img src="/img/signin.png" className={classes.signin} alt="Sign In With Google"></img>
                           </a>
                       </Paper>
                    </Grid>
                </Grid>
            </Container>
        
    )
}


export default Home;