import { useState } from 'react'
import './App.css'
import PageContainer from './contianer/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'


function App() {

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
    </PageContainer>
  )
}

export default App
