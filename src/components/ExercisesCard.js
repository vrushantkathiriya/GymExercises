import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'


const ExerciseCard = ({exercise}) => {

  const imgURL = "https://plus.unsplash.com/premium_photo-1668196794612-4f87b03e19a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"

  
  return (
    <>
    <Link className='exercise-card' to = {'/exercise/${exercise.id}'}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
      <Stack direction="row">
        <Button sx={{ ml: '21px', color:'#fff' , background:'#ffa9a9',
      fontSize:'14px', borderRadius:'20px', textTransform:'capitalize' }}>
        {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color:'#fff' , background:'#fcc757',
      fontSize:'14px', borderRadius:'20px', textTransform:'capitalize' }}>
        {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px"
      pd= "10px" textTransform="capitalizes" fontSize="24px">
        {exercise.name}
      </Typography>
    </Link>
    </>
  )
}

export default ExerciseCard