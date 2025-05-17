import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './contianer/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
      <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
        {
          products && products.map((product) => {
            return (
              <div key={product.id}>
                <div className='flex-row' style={{ padding: '20px' }}>
                  <img style={{ marginRight: '5px' }} src={product.image} with={50} height={50} />
                  <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                  <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}TL</p>
                  <button className='btn-delete'>Sil</button>
                </div>

              </div>
            )
          })
        }
        <div className='flex-row'>
          <h2>Toplam Tutar: {totalAmount}</h2>
        </div>
      </Drawer>
    </PageContainer>
  )
}

export default App
