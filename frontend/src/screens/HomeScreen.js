import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Row, Col} from "react-bootstrap"
import Product from '../components/Product.js'

const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const {data} = await axios.get('/api/products');
    setProducts(data);
  }

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => {
                return (<Col sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product={product} />
                </Col>)
            })}
        </Row>
    </>
  )
}

export default HomeScreen