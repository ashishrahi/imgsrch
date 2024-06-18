import ShowImages from "../ShowImages/ShowImages"
import {Stack,Box,TextField,Button} from '@mui/material'
import { useState,useEffect } from "react"
import axios from "axios"
const SearchImages = () => {

const[search,setSearch]= useState('');
const [query,setQuery] = useState('')
const[page1,setPage1]=useState(1)
const [photos,setPhotos]=useState([]);

console.log(page1);

useEffect(() => {
  async function fetchPhotos() {
      try {
        const unsplashBaseUrl = 'https://api.unsplash.com/';
          const response = await axios.get(`${unsplashBaseUrl}search/photos?page=${page1}
          &query=${query}&client_id=pVdReNXYkBqG1zCigH5utr9xlutTR-EQwUHPPXitluM`);
          setPhotos(response.data.results);
      } catch (error) {
          console.error('Error fetching photos:', error);
      }
  }

  fetchPhotos();
}, [page1,query]);

const handleSubmit=(e)=>{
e.preventDefault();
setQuery(search); 
}

  return (
    <Stack >
    <Box sx={{display:'flex',flexDirection:'column',alignContent:'center',marginLeft:'40%',gap:'10px',color:'gray'}}>
      <h1>Image Search Engine</h1>
        <Box sx={{gap:'16px'}}>
       <TextField onChange={(e)=>setSearch(e.target.value)}  sx={{width:'400px'}} id="standard-basic"   />
        <Button onClick={handleSubmit} variant="contained" sx={{color: 'primary',width:'190px',height:'50px',marginLeft:'20px'}}>Search Images</Button>
        </Box>
    </Box>
    
    <ShowImages photos={photos} setPage1={setPage1} page1={page1}/>
    
    
    </Stack>
  )
}

export default SearchImages