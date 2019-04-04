import React, { Component } from 'react';

// SCSS
import './NavBar.scss';

// Router
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

    renderItems = () => {
        let array = [];
        this.props.items.forEach((item, index) => {
            array.push(
                <NavLink
                    activeClassName="selected"
                    key={index}
                    to={"/" + item.route}>
                    {item.text}
                </NavLink>);
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
