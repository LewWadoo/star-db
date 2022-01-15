import React from 'react';

import './person-details.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class PersonDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: null,
            isDataValid: true
        };

        this.componentDidMount = () => {
        this.swapiService = new SwapiService();
            this.updatePerson();
        };

        this.componentDidUpdate = (prevProps) => {
            if (this.props.personId !== prevProps.personId) {
                this.setState({
                    isDataValid: false
                });
                this.updatePerson();
            }
        };
        
        this.updatePerson = () => {
            const {personId } = this.props;
            if (!personId) {
                return;
            }

            this.swapiService
                .getPerson(personId)
                .then((person) => {
                    this.setState({
                        person,
                        isDataValid: true
});
                });
        };
    };

    render() {

        if (!this.state.isDataValid) {
            return <Spinner/>;
        }
        
        if (!this.state.person) {
            return <span>Select a person from the list!</span>;
        }

        const {id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
              <img className="person-image" alt="person" src={`https://starwars-visualguide.com/assets/img/characters/${this.state.person.id}.jpg`}/>
              <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><span className="term">Gender</span>
                    <span>{gender}</span></li>
                  <li className="list-group-item"><span className="term">Birth Year</span>
                    <span>{birthYear}</span></li>
                  <li className="list-group-item"><span className="term">Eye Color</span>
                    <span>{eyeColor}</span></li>
                </ul>
              </div>
            </div>
        );
    };
};
