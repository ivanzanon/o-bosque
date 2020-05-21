import React, {Component} from 'react';


import "./styles.css";
import api_o_bosque from '../../services/api-o-bosque';

export class Dish extends Component {
    state = {
        dish: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api_o_bosque.get(`/dishes/${id}`);

        this.setState({ dish: response.data });
    }

    render() {
        const { dish } = this.state;
        return (
            <div className="dish-info">
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
                <p>${dish.value}</p>
            </div>
        );
    };
}