import React from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peopleList: null
        };

        this.componentDidMount = () => {
            const swapiService = new SwapiService();

            swapiService.getAllPeople()
                .then(peopleList => {
                    this.setState({
                        peopleList
                    });
                });
        };
        
        this.renderItems = (items) => {
            return items.map(({id, name}) => {
                return (
                    <li className="list-group-item"
                        key={id}
                        onClick={() => this.props.onItemSelected(id)}
                    >
                      {name}
                    </li>
                );
            });
        };
    };
    
    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner />;
        };

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );
    };
};
