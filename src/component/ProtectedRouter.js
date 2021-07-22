import React, { useEffect, useState } from 'react'
import {Redirect, Route} from 'react-router-dom';


//ui

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'


function ProtectedRouter({component: Component,   ...rest}) {

    const [isLoaded , setIsLoaded] = useState(false)
    const [isAuth , setIsAuth] = useState(false)
    const [data, setData] = useState(null)
    const [backdrop , setBackdrop] = useState(true)

    useEffect(()=>{
        fetchAuthState()
    },[])

    
     const fetchAuthState = async ()=>{
      
      
        await fetch('/success').then((res)=>res.json()).then((res) => {
            if(res.success){
                setData(res.data)
                setIsAuth(true)
            }
        });
        setIsLoaded(true)
        setBackdrop(false)
      }
       
    return (
       <>
       {
           isLoaded?
       <Route 
       {...rest}
       render={(props) => isAuth ?  <Component data={data} {...props}  />  : 
       <Redirect to ={{pathname : '/' , state:{from:props.location}}} /> } /> 
       : 
       <Backdrop className="backdrop" open={backdrop}>
          <CircularProgress color="inherit" />
       </Backdrop>
       }
       </>
    )

  
}

export default ProtectedRouter