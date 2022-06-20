import React from "react";
import ExerciseCard from "./ExerciseCard";

function MyExercises({exercises, onRemoveFromWorkout}) {
    return (
        <div>
            <h3>My Workout</h3>
            <ul className="myexercises">
                {exercises.map(exercise => {
                    return <ExerciseCard exercise={exercise} key={exercise.id} onRemoveFromWorkout={onRemoveFromWorkout} />
                })}
            </ul>
        </div>
        
    )
}

export default MyExercises