import React, {Component} from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteItemFromCart} from '../../actions';
import WithRestoService from '../hoc';

class CartTable extends Component {
    
    
    render(){
        const {cartItems} = this.props;
        
        return (
            <>
                <div className="cart__title">Ваш заказ:</div>
                <ul className="cart__list">
                    {
                        cartItems.map(item => {
                                return (
                                        <li key ={item.id} className="cart__item">
                                            <img src={item.url} className="cart__item-img" alt={item.title}></img>
                                            <div className="cart__item-title">{item.title}</div>
                                            <div className="cart__item-price">{item.price}$</div>
                                            <div className="cart__item-price">кол {item.qtty}</div>
                                            <div 
                                                className="cart__close"
                                                onClick = {() => this.props.deleteItemFromCart(item.id)}
                                                >&times;</div>
                                        </li>
                                )
                        })
                    }                 
                </ul>
            </>
        );
    }
    
};

const mapStateToProps = (state) =>{
    return {
        cartItems : state.cart
    }
}

const mapDispatchToProps = {
    deleteItemFromCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));