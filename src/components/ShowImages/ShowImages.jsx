import {Stack,Box,Card,CardMedia} from '@mui/material'

import Pagination from '../Pagination/Pagination'
const ShowImages = ({photos,setPage1,page1}) => {
  return (
    <Stack>
    <Box>
    <Pagination color='primary' count={50} setPage1={setPage1} page1={page1}/>
    </Box>
  
    <Box sx={{display:'grid',gridTemplateColumns:'auto auto auto auto',padding:'1px',gap:'10px',marginTop:'10px'}}>

     {photos.map(photo =>(
      
      <img 
      style={{ width:'200px',height:'200px',borderRadius:'10px',marginBottom:'10px'}} 
      key={photo.id} 
      src={photo.urls.regular}
      alt={photo.alt_description}/>
))
    
    }</Box>
  
    </Stack>
  )
}

export default ShowImages