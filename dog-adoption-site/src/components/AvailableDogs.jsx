import React, { Component, Fragment } from 'react';

class AvailableDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h2>List of Dogs</h2>
                {this.props.dogList.map(
                    (dog,inx) => {
                        return (
                            <div key={inx}>
                                <p>Name: {dog.name}</p>
                                <p>Age: {dog.age}</p>
                                <p>Breed: {dog.breed}</p>
                                <p>Color: {dog.color}</p>
                                <p>Potty Trained: {dog.pottyTrained}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default AvailableDogs;