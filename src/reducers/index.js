const initialState = {
    menu : [],
    cart : [],
    loading:true,
    error: false
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
        case 'ADD_TOCART':
            return {
                ...state,
                cart : action.cartList
            };
        case 'DELETE_FROMCART':
            return {
                ...state,
                cart : action.cartList
            };
        default : 
            return state;
    }
}

export default reducer;