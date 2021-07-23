import React, {Component} from 'react';
import './item-view.scss';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuError, addItemToCart} from '../../actions'
import WithRestoService from '../hoc';
import Spinner from '../spinner'

class ItemView extends Component {
    componentDidMount() {
        const {menuItems} = this.props;
        if (menuItems.length === 0) {
            console.log('загрузка с сервера')
            this.props.menuRequested();
            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(() => this.props.menuError())
        } else {
            console.log('Загрузка со стейта')
        }
    }

    addToCart = (id) =>{
        this.props.addItemToCart(id)
    }

    render () {
        if (this.props.loading) {
            return (
                <div className="view__item">
                    <Spinner/>
                </div>
            )
        }
        const {menuItems, itemId} = this.props;
        let currentItem = menuItems.find(item => {
            return item.id === +itemId
        })

        let title, url, category, price;

        if (currentItem) {
            title = currentItem.title
            url = currentItem.url
            category = currentItem.category
            price = currentItem.price
        }

        return(
            <div className="view__item">
                <div className="view__box">
                    <img className="view__img" src={url} alt={title}></img>
                </div>
                <div className="view__info">
                    <div className="view__title">{title}</div>
                    <div className="view__category">Category: <span>{category}</span></div>
                    <div className="view__price">Price: <span>{price}$</span></div>
                    <button className="view__btn"
                            onClick = {() => this.props.addItemToCart(+itemId)}
                    >Add to cart</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems:state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addItemToCart
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(ItemView));

