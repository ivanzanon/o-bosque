import React, {Component} from 'react';
import api_o_bosque from "../../services/api-o-bosque";

import "./styles.css";
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        dishes: [],
    };

    componentDidMount () {
        this.loadDishes();
    };

    loadDishes = async () => {
        const response = await api_o_bosque.get("/dishes");

        this.setState({dishes: response.data});
        console.log(response.data);
    };

    render() {
        return (
            <div className="dishes-list">
                {this.state.dishes.map(dish => (
                    <article key={dish.id}>
                        <strong>{dish.name}</strong>
                        <p>{dish.description}</p>
                        <p>${dish.value}</p>
                        <Link to={`/dishes/${dish.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        );
    }
}