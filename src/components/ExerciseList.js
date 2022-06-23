import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({exercises, onSetDemo, onAddToWorkout, onRemoveFromWorkout}) {
    return (
        <div class="exerciselist">
            <h3 class="results">Search Results</h3>
            <ul className="searchlist">
                {exercises.map(exercise => {
                    return <ExerciseCard exercise={exercise} key={exercise.id} onSetDemo={onSetDemo} onAddToWorkout={onAddToWorkout} onRemoveFromWorkout={onRemoveFromWorkout}/>
                })}
            </ul>
        </div>
    )
}

export default ExerciseList