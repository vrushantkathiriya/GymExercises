import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] =useState ([]);
  // let gold= "gold"
  return (
    <>
   <Box>
       <HeroBanner />
       <SearchExercises  
       setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
       <Exercises 
       setExercises={setExercises}
       bodyPart={bodyPart} 
      exercises={exercises}
        //  HELLO={gold}
       /> 
   </Box>
   </>
  )
}

export default Home