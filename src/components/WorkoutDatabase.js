import React, { useEffect } from "react";
import { useState } from 'react';
import SearchBar from './SearchBar'
import ExerciseList from './ExerciseList'
import Demonstration from "./Demonstration";
import MyExercises from "./MyExercises";

function WorkoutDatabase() {

    const [exercises, setExercises] = useState([])
    const options = {
      method: 'GET',
      headers: {
        //API INFO, list by name
      }
    };
  
  function onHandleSubmit(newSearchTerm) {
            
            fetch('https://exercisedb.p.rapidapi.com/exercises/name/' + newSearchTerm, options)
            .then(res => res.json())
            .then(data => setExercises(data))
  }

  const [demo, setDemo] = useState([])
  function onSetDemo(newExercise) {
    setDemo(newExercise)
  }

  const [currentWorkout, setCurrentWorkout] = useState([])
  useEffect(() => {
    fetch('http://localhost:8002/workout')
    .then(res => res.json())
    .then(data => setCurrentWorkout(data))
  },[])
  function onAddToWorkout(newExercise) {
    if(currentWorkout.includes(newExercise)) return null

    setCurrentWorkout([...currentWorkout, newExercise])
  }

  function onRemoveFromWorkout(deletedExercise) {
    
    const exercisesToDisplay = currentWorkout.filter(exercise => exercise !== deletedExercise)
    setCurrentWorkout(exercisesToDisplay)
  }

    return (
        <div>
            <SearchBar onHandleSubmit={onHandleSubmit} />
            <ExerciseList exercises={exercises} onSetDemo={onSetDemo} onAddToWorkout={onAddToWorkout} onRemoveFromWorkout={onRemoveFromWorkout}/>
            <Demonstration demo={demo} />
            <MyExercises exercises={currentWorkout} onRemoveFromWorkout={onRemoveFromWorkout}/>
        </div>
    )
}

export default WorkoutDatabase