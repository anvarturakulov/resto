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

const addToCard = (newCart) => {
    return {
        type : 'ADD_TOCART',
        cartList : newCart
    };
};

const deleteFromCard = (newCart) => {
    return {
        type : 'DELETE_FROMCART',
        cartList : newCart
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError, 
    addToCard,
    deleteFromCard
}