const initialState = {
    menu : [],
    cart : [],
    loading:true,
    error: false,
    totalPrice : 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading:false,
                error : false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading:true,
                error : false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error:true
            };
        case 'ADD_ITEM_TO_CART':
            const id = action.payload
            const itemInd = state.cart.findIndex(item => item.id === id)

            if (itemInd >=0) {
                const itemInCart = state.cart.find(item => item.id === id)
                const newItem = {
                    ...itemInCart,
                    qtty : ++itemInCart.qtty
                }
                return {
                    ...state,
                    cart : [
                        ...state.cart.slice(0, itemInd),
                        newItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    totalPrice : state.totalPrice + newItem.price
                }
            }

            const item = state.menu.find(item => item.id === id)
            const newItem = {
                title : item.title,
                price : item.price,
                url : item.url,
                id : item.id,
                qtty : 1
            };

            return {
                ...state,
                cart : [
                        ...state.cart,
                        newItem
                    ],
                totalPrice : state.totalPrice + newItem.price
            }

        case 'DELETE_ITEM_FROM_CART':
            const idx = action.payload
            const index = state.cart.findIndex(item => item.id === idx)
            const itemDel = state.cart.find(item => item.id === idx)
            return {
                ...state,
                cart : [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index+1)
                ],
                totalPrice : state.totalPrice - itemDel.price*itemDel.qtty
            };
        default : 
            return state;
    }
}

export default reducer;