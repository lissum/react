import React from 'react';
import { formatDate } from '../utils/dateUtils';
import '../App.css';

const WorkoutTable = ( {workouts, deleteWorkout, startEditing} ) => {
    return (
        <table className="workout-table">
            <thead>
            <tr>
                <th>Дата (ДД.ММ.ГГ)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {workouts.map( ( workout, index ) => (
                <tr key={index}>
                    <td>{formatDate( workout.date )}</td>
                    <td>{workout.distance.toFixed( 1 )}</td>
                    <td>
                        <button onClick={() => startEditing( workout )} className="action-btn">✎</button>
                        <button onClick={() => deleteWorkout( workout.date )} className="action-btn">✘</button>
                    </td>
                </tr>
            ) )}
            </tbody>
        </table>
    );
};

export default WorkoutTable;