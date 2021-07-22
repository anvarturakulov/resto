import React, {Component}from 'react';
import './menu-list-item.scss';
import {withRouter} from 'react-router-dom'

class MenuListItem extends Component {
    
    
    render() {
        const {menuItem, itemId} = this.props
        const {title, price, url, category} = menuItem;
        const categoryImg = `${process.env.PUBLIC_URL}/image/${category}.png`;

        return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <div 
                    className='img-box'
                    onClick = {() =>{
                        this.props.history.push(`/menu/${itemId}`)
                    }} >
                    <img className="menu__img" src={url} alt={title}></img>
                    <img className='category-img' src={categoryImg} alt={category}></img>
                </div>
                
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <div className='btn-box'>
                    <button 
                        className="menu__btn btn-view"
                        onClick = {() =>{
                            this.props.history.push(`/menu/${itemId}`)
                        }}
                        >View</button>   
                    <button className="menu__btn">Add to cart</button>
                </div>
            </li>
        )
    }
    
}

export default withRouter(MenuListItem);