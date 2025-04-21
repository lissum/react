import React, { Component } from 'react';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";


class Store extends Component {
    constructor( props ) {
        super( props );
        this.state    = {
            view: 'module' // 'module' for cards, 'list' for list view
        };
        this.products = [{
            id: 1,
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            id: 2,
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            id: 3,
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            id: 4,
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            id: 5,
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            id: 6,
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];
    }

    handleSwitch = () => {
        this.setState( prevState => ( {
            view: prevState.view === 'module' ? 'list' : 'module'
        } ) );
    };

    render() {
        const icon = this.state.view === 'module' ? 'view_list' : 'view_module';
        return (
            <div className="container">
                <IconSwitch
                    icon={icon}
                    onSwitch={this.handleSwitch}
                />
                {this.state.view === 'module' ? (
                    <CardsView cards={this.products}/>
                ) : (
                    <ListView items={this.products}/>
                )}
            </div>
        );
    }
}

export default Store;