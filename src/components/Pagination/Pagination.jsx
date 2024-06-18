import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({setPage1,page1}) {
  
  const handlePageChange = (event, newPage) => {
    setPage1(newPage);
  };
  return (
    <Stack spacing={2} sx={{marginLeft:'40%',marginTop:'15px',marginBottom:'20px'}}>
      <Pagination 
      count={10} 
      page={page1} 
      onChange={handlePageChange} />
      
    </Stack>
  );
}