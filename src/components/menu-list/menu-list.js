import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addItemToCart} from '../../actions'
import Spinner from '../spinner'
import Error from '../error'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError())
            
    }

    render() {
        const {menuItems, loading, error, addItemToCart} = this.props;

        if (loading) return <Spinner/> 
        if (error)   return <Error/>

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                            key = {menuItem.id}
                            itemId = {menuItem.id}
                            menuItem = {menuItem}
                            onAddItemToCart = {addItemToCart}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems:state.menu,
        loading : state.loading,
        error : state.error,
        cartItems : state.cart
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addItemToCart
    
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));