import React, { Component, Fragment } from 'react';
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogList: []
        }
    }

    //update list of dogs
    updateDogList = (newList) => {
        this.setState({ dogList: newList });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className='header'>Dog Adoption Site</h1>

                    <div className="dog-list">
                        <AvailableDogs dogList={this.state.dogList} />
                    </div>

                    <div className="adoption-form">
                        <AddAdoptionForm updateDogList={this.updateDogList} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AppContainer;