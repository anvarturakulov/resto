const menuLoaded = (newMenu) => {
    return {
        type : 'MENU_LOADED',
        payload : newMenu
    };
};

const menuRequested = () => {
    return {
        type : 'MENU_REQUESTED',
    };
};

const menuError = () => {
    return {
        type : 'MENU_ERROR',
    };
};

const addItemToCart = (itemId) => {
    return {
        type : 'ADD_ITEM_TO_CART',
        payload : itemId
    };
};

const deleteItemFromCart = (itemId) => {
    return {
        type : 'DELETE_ITEM_FROM_CART',
        payload : itemId
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError, 
    addItemToCart,
    deleteItemFromCart
}