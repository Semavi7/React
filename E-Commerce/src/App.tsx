import { useEffect, useState } from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import type { ProductType, UserType } from './types/Type'
import ProductService from './services/ProductService'
import { setCurrentUser, setProducts } from './redux/appSlice'
import { setBasket } from './redux/basketSlice'

function App() {

  const { currentUser } = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch();

  const getAllProduct = async () => {
    const product: ProductType[] = await ProductService.getAllProduct();
    dispatch(setProducts(product));
  }

  useEffect(() => {
    getAllProduct();
  }, [])

  useEffect(() => {
    const currentUserString: string | null = localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser: UserType = JSON.parse(currentUserString) as UserType;
      dispatch(setCurrentUser(currentUser))
    }
  }, [])

  useEffect(() => {
    const basketString = localStorage.getItem("basket");
    if (basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[]
      dispatch(setBasket(basket));
    }
  })

  return (
    <div>
      {currentUser && <Navbar />}
      <RouterConfig />
      <ToastContainer autoClose={2500} />
      <Spinner />
    </div>
  )
}

export default App
