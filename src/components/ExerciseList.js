import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({exercises, onSetDemo, onAddToWorkout, onRemoveFromWorkout}) {
    return (
        <div>
            <h3>Search Results</h3>
            <ul className="searchlist">
                {exercises.map(exercise => {
                    return <ExerciseCard exercise={exercise} key={exercise.id} onSetDemo={onSetDemo} onAddToWorkout={onAddToWorkout} onRemoveFromWorkout={onRemoveFromWorkout}/>
                })}
            </ul>
        </div>
    )
}

export default ExerciseList