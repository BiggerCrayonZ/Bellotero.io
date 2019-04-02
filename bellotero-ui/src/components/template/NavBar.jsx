import React, { Component } from 'react';

// SCSS
import './NavBar.scss';

// Router
import { Link } from 'react-router-dom';

class NavBar extends Component {

    renderItems = () => {
        let array = [];
        this.props.items.map((item, index) => {
            array.push(<Link key={index} className="nav-link" to={item.route}> {item.text} </Link>);
        });
        return array;
    }

    render() {
        return (
            <div className="navbar_container w-100 d-flex justify-content-around align-items-center">
                {this.renderItems()}
            </div>
        )
    }
}

export default NavBar;
