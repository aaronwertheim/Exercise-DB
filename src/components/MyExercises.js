import React from "react";
import ExerciseCard from "./ExerciseCard";

function MyExercises({exercises, onRemoveFromWorkout}) {
    return (
        <section class="bgimage2">
        <div id="myworkouts" class="container">
            <h1 class="text-center">My Workouts</h1>
            <ul className="myexercises">
                {exercises.map(exercise => {
                    return <ExerciseCard exercise={exercise} key={exercise.id} onRemoveFromWorkout={onRemoveFromWorkout} />
                })}
            </ul>
        </div>
        </section>
    )
}

export default MyExercises