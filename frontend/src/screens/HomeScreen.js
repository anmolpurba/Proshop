import React from 'react'
import {Row, Col} from "react-bootstrap"
import Product from '../components/Product.js'
import Message from "../components/Message"
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from "../components/Loader"

const HomeScreen = () => {

  const {data:products, isLoading, error} = useGetProductsQuery();



  return (
    <>
        {isLoading ? (<Loader />) : error ? (<Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>) : (<><h1>Latest Products</h1>
        <Row>
            {products.map((product) => {
                return (<Col sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product={product} />
                </Col>)
            })}
        </Row></>) }
        
    </>
  )
}

export default HomeScreen