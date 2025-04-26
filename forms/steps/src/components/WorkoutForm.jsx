import React, { Component } from 'react';
import '../App.css';

class WorkoutForm extends Component {
    state = {
        date: '',
        distance: '',
    };

    componentDidUpdate( prevProps ) {
        if ( this.props.editingWorkout !== prevProps.editingWorkout ) {
            if ( this.props.editingWorkout ) {
                this.setState( {
                    date: this.props.editingWorkout.date,
                    distance: this.props.editingWorkout.distance.toString(),
                } );
            }
            else {
                this.setState( {date: '', distance: ''} );
            }
        }
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        const {date, distance}                          = this.state;
        const {addWorkout, editWorkout, editingWorkout} = this.props;

        if ( ! date || ! distance || isNaN( distance ) || Number( distance ) <= 0 ) return;

        const workout = {date, distance: Number( distance )};
        if ( editingWorkout ) {
            editWorkout( workout );
        }
        else {
            addWorkout( workout );
        }
        this.setState( {date: '', distance: ''} );
    };

    render() {
        const {date, distance}                = this.state;
        const {editingWorkout, cancelEditing} = this.props;

        return (
            <form className="workout-form" onSubmit={this.handleSubmit}>
                <input
                    type="date"
                    value={date}
                    onChange={( e ) => this.setState( {date: e.target.value} )}
                    required
                />
                <input
                    type="number"
                    value={distance}
                    onChange={( e ) => this.setState( {distance: e.target.value} )}
                    placeholder="Пройдено км"
                    step="0.1"
                    min="0"
                    required
                />
                <button type="submit">{editingWorkout ? 'Ок' : 'Добавить'}</button>
                {editingWorkout && (
                    <button type="button" onClick={cancelEditing}>
                        Отмена
                    </button>
                )}
            </form>
        );
    }
}

export default WorkoutForm;