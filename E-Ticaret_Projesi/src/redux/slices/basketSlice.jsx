import { createSlice } from '@reduxjs/toolkit'

const getBAsketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getBAsketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketToStorage = (basket) => {

    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha önce eklenmiştir.
                const exstractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...exstractedProducts, findProduct];
                writeFromBasketToStorage(state.products);
            }
            else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },

        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }

    }
})

export const { addToBasket, setDrawer, calculateBasket } = basketSlice.actions

export default basketSlice.reducer