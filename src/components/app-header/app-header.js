import React, {Component} from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


class AppHeader extends Component {
    render() {
        const {cartList} = this.props;
        let total = cartList.reduce((sum,item) => {
            return sum + item.price
        },0)

        return (
            <header className="header">
                <Link className="header__link" to="/">
                    Menu
                </Link>
                <Link className="header__link" to="/cart">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total} $
                </Link>
            </header>
        )
    }
    
};

const mapStateToProps = (state) => {
    return {
        cartList : state.cart
    }
}

export default connect(mapStateToProps)(AppHeader);