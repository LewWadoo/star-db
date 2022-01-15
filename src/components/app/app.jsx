import React from 'react';

import './app.css';

import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from '../item-list/item-list.jsx';
import PersonDetails from '../person-details/person-details.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null
        };

        this.onPersonSelected = (id) => {
            console.log(id);
            this.setState({
                selectedPerson: id,
            });
        };
    };
        render() {
            return (
                <div>
                  <Header/>
                  <RandomPlanet/>
                  <div className="row mb2">
                    <div className="col-md-6">
                      <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                      <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                  </div>
                </div>
            );
        };
};
