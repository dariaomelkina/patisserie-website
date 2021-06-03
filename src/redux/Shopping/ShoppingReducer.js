import * as actionTypes from './ShoppingTypes';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            type: 'cake',
            title: 'Cheesecake',
            price: 15.12,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cheesecake-2867614_1920.jpg?raw=true'
        },
        {
            id: 2,
            type: 'cake',
            title: 'Chocolate Cake',
            price: 18.11,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/chocolate_cake.jpg?raw=true'
        },
        {
            id: 3,
            type: 'vegan',
            title: 'Coffe&Chocolate Cake',
            price: 13.98,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/chocolate-cake-4446608_1920.jpg?raw=true'
        },
        {
            id: 4,
            type: 'vegan',
            title: 'Strawberry Roll Cake',
            price: 12.00,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cake-219595_1920.jpg?raw=true'
        },
        {
            id: 5,
            type: 'cake',
            title: 'Orange Cake',
            price: 13.17,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/orange-cake-398966_1920.jpg?raw=true'
        },
        {
            id: 6,
            type: 'vegan',
            title: 'Fruit Cake',
            price: 16.20,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cake.jpg?raw=true'
        },
        {
            id: 7,
            type: 'cake',
            title: 'Vanilla&Chocolate Cake',
            price: 10.11,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cake2.jpg?raw=true'
        },
        {
            id: 8,
            type: 'treat',
            title: 'Sugar Candies',
            price: 5.45,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/candy-1961538_1920.jpg?raw=true'
        },
        {
            id: 9,
            type: 'drink',
            title: 'Hot Americano',
            price: 2.23,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/coffee-3043424_1920.jpg?raw=true'
        },
        {
            id: 10,
            type: 'drink',
            title: 'Cappuccino',
            price: 5.19,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/coffee-983955_1920.jpg?raw=true'
        },
        {
            id: 11,
            type: 'treat',
            title: 'Cookies Assorti',
            price: 13.10,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cookies-5841280_1920.jpg?raw=true'
        },
        {
            id: 12,
            type: 'drink',
            title: 'Chamomile Tea',
            price: 2.23,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cup.jpg?raw=true'
        },
        {
            id: 13,
            type: 'treat',
            title: 'Carrot Cupcake',
            price: 5.67,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cupcake-2588646_1920.jpg?raw=true'
        },
        {
            id: 14,
            type: 'vegan',
            title: 'Chocolate Cupcake',
            price: 5.23,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/cupcakes-690040_1920.jpg?raw=true'
        },
        {
            id: 15,
            type: 'vegan',
            title: 'Daifuku',
            price: 3.11,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/daifuku-503776_1920.jpg?raw=true'
        },
        {
            id: 16,
            type: 'treat',
            title: 'Almond Cookies',
            price: 6.31,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/dessert.jpg?raw=true'
        },
        {
            id: 17,
            type: 'drink',
            title: 'Berry Smoothie',
            price: 3.99,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/food-5227740_1920.jpg?raw=true'
        },
        {
            id: 18,
            type: 'drink',
            title: 'Latte',
            price: 2.57,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/latte-art-2431160_1920.jpg?raw=true'
        },
        {
            id: 19,
            type: 'drink',
            title: 'Latte-Macchiato',
            price: 3.22,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/latte-macchiato-3669136_1920.jpg?raw=true'
        },
        {
            id: 20,
            type: 'drink',
            title: 'Matcha-Latte',
            price: 2.99,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/matcha-latte-2356772_1920.jpg?raw=true'
        },
        {
            id: 21,
            type: 'drink',
            title: 'Milkshake',
            price: 3.45,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/milkshake-5199609_1920.jpg?raw=true'
        },
        {
            id: 22,
            type: 'vegan',
            title: 'Quark Tart',
            price: 5.99,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/quark-tart-2549438_1920.jpg?raw=true'
        },
        {
            id: 23,
            type: 'treat',
            title: 'Rum Bites',
            price: 1.99,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/rum-1871512_1920.jpg?raw=true'
        },
        {
            id: 24,
            type: 'cake',
            title: 'Matcha Cake',
            price: 2.33,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/sweets-847918_1920.jpg?raw=true'
        },
        {
            id: 25,
            type: 'vegan',
            title: 'Matcha Cake',
            price: 2.59,
            image:
                'https://github.com/dariaomelkina/patisserie-website/blob/master/src/images/vegan-dessert.jpg?raw=true'
        }
    ], //id: 1, type, title, price, image
    cart: [],
    currentItem: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CARD:
            const item = state.products.find(prod => prod.id === action.payload.id);
            return {
                ...state,
                cart: [...state.cart, { ...item }],
            }
        case actionTypes.CLEAR_CARD:
            return {
                ...state,
                cart: state.cart([]),
            }
        default:
            return state;
    }
};

export default shopReducer;