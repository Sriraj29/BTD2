import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const {id,token}=useParams()
  const history = useNavigate();

  const[password,setPassword]=useState("");
  const[message, setMessage]=useState("");
  const [data2, setData]=useState("");

  const userValid=async()=>{

    //api call
    const res=await fetch(`/forgotpassword/${id}/${token}`,{
      method:"GET",
      headers:{
        "Content-type":"appication/json"
      }      
    });

    const data=await res.json()

    if(data.status===201){
      // console.log("user valid")
    }
    else{
      history("*")
    }
  }

  const setVal=(e)=>{
    setPassword(e.target.value)
    

  }

  const sendPassword=async(e)=>{
    e.preventDefault()

    if (password === "") {
      toast.error("password is required!", {
          position: "top-center"
      });
      } 
      else if (password.length < 6) {
        toast.error("password must be 6 char!", {
          position: "top-center"
      });

      } 
      else {
        const res=await fetch(`/${id}/${token}`,{
          method:"POST",
          headers:{
            "Content-type":"appication/json"
        },

      body:JSON.stringify({password})      
      });

      // const data=await res.json()

      // if(data.status===201){
      //   setPassword("")
      //   setMessage(true)
      // }
      // else{
      //   toast.error("!Token Expired. Generate new Link",{
      //   position: "top-center"
      // })
      // }
    }
  }

    useEffect(()=>{
    userValid()
    setTimeout(()=>{
      setData(true)
    },3000)
  },[])


  return (
  <>
  {
    data2?(
      <>
      <section>
      <div className='form-data'>

      <div className='form-heading'>
        <h1>Enter Your New Password</h1>
        </div>

        <form>
          {message?<p style={{color:"green"}}>password successfully updated</p>:""}

          <div className='form-input'>
            <label htmlFor="email">New Password</label>
            <input type="password" value="password" onChange={setVal} name='password' id='password' placeholder='Enter your new password' />
          </div>

          <button className='btn' onClick={sendPassword}>Send</button>

        </form>

      </div>
    </section>

      </>
    ):<Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
    Loading... &nbsp;
    <CircularProgress />
    </Box>
  }
  
  <ToastContainer/>

  </>
  )
}

export default ForgotPassword