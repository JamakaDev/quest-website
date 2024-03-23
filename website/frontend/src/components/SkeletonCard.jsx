import React from 'react'
import { Box, Skeleton } from '@mui/material'

const SkeletonCard = () => {
  return (
    <Box className='d-flex justify-content-center  ms-4 me-4 mb-4' style={{backgroundColor:'#abcdef', borderRadius:'.5rem', alignContent:'space-around'}}>
      <Box sx={{width: '20vw', height:'60vh'}}>
        <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width='17.5vw' height='20vh' className='mt-3 ms-4'/>
        
        <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width='14.75vw' height='7vh' className='mt-4 ms-5'/>
        
        <Box sx={{ pt: 0.5 }}>
          <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width='14.75vw' height='3vh' className='mt-4 ms-5'/>
        
          <Box className='d-flex justify-content-evenly align-items-center '>
            <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width="7vw" height='2vh' className=' mt-4'/>            
            <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width="5vw" height='2vh' className='mt-4' />
          </Box>
        
        </Box>

        <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width='15vw' height='4vh' className='mt-4 ms-5' style={{borderRadius:'5rem'}}/>

        <Skeleton sx={{bgcolor: '#332D2D'}} variant="rounded" width='15vw' height='4vh' className='mt-4 ms-5' style={{borderRadius:'5rem'}}/>
      </Box> 
     </Box>
  )
}

export default SkeletonCard