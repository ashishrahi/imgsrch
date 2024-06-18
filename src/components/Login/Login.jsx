import {Stack,Box} from '@mui/material'
import { Link } from 'react-router-dom'
import Sign_up from '../Signup/Signup'

const Login = () => {

    return (
    <Stack sx={{border:'1px solid',
     color:'gray',
     width:'400px',height:'400px',
     textAlign:'center',gap:'10px'}}>
        <h1>WelCome Back</h1>
        <span>Dont have an Account? <Link to='/signup'>Sign_up</Link></span>
    <Box>
    <Box sx={{border:'1px solid',width:'300px',textAlign:'center'}}>
        Continue with Google
        </Box>
    <span>Or Continue with username/email</span>
   <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
   <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
   <span>Username</span> 
    <input type="text" />
    </Box>
   <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
    <span>Password</span>
    <input type="text" />
    <span>Forget Your Password?</span>
    </Box>
    </Box>
    </Box>
    </Stack>
  )
}

export default Login