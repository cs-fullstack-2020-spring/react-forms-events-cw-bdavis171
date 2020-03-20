import React, { Component, Fragment } from 'react';
import '../App.css';


class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            breed: '',
            color: '',
            pottyTrained: 'No',
            dogList: []
        }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'age') {
            this.setState({ age: event.target.value });
        }
        else if (event.target.name === 'breed') {
            this.setState({ breed: event.target.value });
        }
        else if (event.target.name === 'color') {
            this.setState({ color: event.target.value });
        }

    }

    //handle checkbox for pottyTrained
    handlePottyTrained = (event) => {
        if (event.target.checked) {
            this.setState({ pottyTrained: 'Yes' });
        }
        else {
            this.setState({ pottyTrained: 'No' });
        }
    }

    //handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let dog = { name: this.state.name, age: this.state.age, breed: this.state.breed, color: this.state.color, pottyTrained: this.state.pottyTrained };
        this.state.dogList.push(dog);
        this.setState({ dogList: this.state.dogList });
        this.props.updateDogList(this.state.dogList);
        this.setState({
            name: '',
            age: 0,
            breed: '',
            color: '',
            pottyTrained: 'No'
        })
    }

    render() {
        return (
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Dog Adoption Form</legend>
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' onChange={this.handleChange} value={this.state.name} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="age">Age:</label>
                            <input type="number" name='age' id='age' onChange={this.handleChange} value={this.state.age} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="breed">Breed:</label>
                            <input type="text" name='breed' id='breed' onChange={this.handleChange} value={this.state.breed} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="color">Color:</label>
                            <select name="color" id="color" onChange={this.handleChange}>
                                <option value={this.state.color}>--</option>
                                <option value="White">White</option>
                                <option value="Brown">Brown</option>
                                <option value="Black">Black</option>
                                <option value="Spotted">Spotted</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="pottyTrained">Potty Trained:</label>
                            <input type="checkbox" name='pottyTrained' id='pottyTrained' onChange={this.handlePottyTrained} value={this.state.pottyTrained} />
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
        );
    }
}

export default AddAdoptionForm;