import React, {Component} from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCard} from '../../actions';

class CartTable extends Component {
    
    onDeleteFromCart = (itemId) => {
        let {cartItems} = this.props;
        const index = cartItems.findIndex(item => item.id === itemId)
        if (index !== -1) {
            cartItems.splice(index,1)
            console.log(cartItems)
            this.props.deleteFromCard(cartItems)
        }
    }

    render(){
        const {cartItems} = this.props;
        
        let cartList = cartItems.map(item => {
            return (
                    <li key ={item.id} className="cart__item">
                        <img src={item.url} className="cart__item-img" alt={item.title}></img>
                        <div className="cart__item-title">{item.title}</div>
                        <div className="cart__item-price">{item.price}$</div>
                        <div 
                            className="cart__close"
                            onClick = {() => this.onDeleteFromCart(item.id)}
                            >&times;</div>
                    </li>
            )
        })
        
        if (cartItems.length === 0) {
            cartList = (
                <h3>Пока Ваш список пуст</h3>
            )
        }

        return (
            <>
                <div className="cart__title">Ваш заказ:</div>
                <ul className="cart__list">
                    {cartList}                 
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
    deleteFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);