import React, { Component } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutTable from './components/WorkoutTable';
import { parseDate } from './utils/dateUtils';
import './App.css';

class App extends Component {
    state = {
        workouts: [],
        editingWorkout: null,
    };

    addWorkout = (newWorkout) => {
        this.setState((prevState) => {
            const existingWorkout = prevState.workouts.find((w) => w.date === newWorkout.date);
            if (existingWorkout) {
                return {
                    workouts: prevState.workouts.map((w) =>
                        w.date === newWorkout.date
                            ? { ...w, distance: w.distance + newWorkout.distance }
                            : w
                    ),
                };
            }
            const updatedWorkouts = [...prevState.workouts, newWorkout];
            return {
                workouts: updatedWorkouts.sort((a, b) => parseDate(b.date) - parseDate(a.date)),
            };
        });
    };

    deleteWorkout = (date) => {
        this.setState((prevState) => ({
            workouts: prevState.workouts.filter((w) => w.date !== date),
        }));
    };

    editWorkout = (updatedWorkout) => {
        this.setState((prevState) => ({
            workouts: prevState.workouts
                .map((w) => (w.date === prevState.editingWorkout.date ? updatedWorkout : w))
                .sort((a, b) => parseDate(b.date) - parseDate(a.date)),
            editingWorkout: null,
        }));
    };

    startEditing = (workout) => {
        this.setState({ editingWorkout: workout });
    };

    cancelEditing = () => {
        this.setState({ editingWorkout: null });
    };

    render() {
        const { workouts, editingWorkout } = this.state;

        return (
            <div className="app">
                <h1>Учёт тренировок</h1>
                <WorkoutForm
                    addWorkout={this.addWorkout}
                    editWorkout={this.editWorkout}
                    editingWorkout={editingWorkout}
                    cancelEditing={this.cancelEditing}
                />
                <WorkoutTable
                    workouts={workouts}
                    deleteWorkout={this.deleteWorkout}
                    startEditing={this.startEditing}
                />
            </div>
        );
    }
}

export default App;